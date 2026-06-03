import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import { cases, getCase } from "../data/cases.js";

export default function Work() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const selected = slug ? getCase(slug) : null;

  return (
    <Page>
      <section className="section work-intro">
        <div className="container">
          <p className="eyebrow">Het werk</p>
          <h1 className="work-title">
            Wijnmerken op plekken<br />waar niemand wijn verwacht.
          </h1>
          <p className="lead mt-s">
            Tik op een case. Hij schuift open. Echte activaties voor wijnmerken en importeurs,
            van dancefestivals tot een reuzenrad op de Vakantiebeurs.
          </p>
        </div>
      </section>

      <section className="section work-grid-section">
        <div className="container">
          <motion.div
            className="work-grid"
            animate={{
              scale: selected ? 0.97 : 1,
              opacity: selected ? 0.35 : 1,
              filter: selected ? "blur(2px)" : "blur(0px)",
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {cases.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <CaseSheet key={selected.slug} data={selected} onClose={() => navigate("/werk")} />
        )}
      </AnimatePresence>
    </Page>
  );
}

function CaseSheet({ data, onClose }) {
  return (
    <>
      <motion.div
        className="sheet-scrim"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />
      <motion.aside
        className="case-sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 32 }}
        role="dialog"
        aria-label={`${data.brand} case`}
      >
        <div className="case-sheet__bar">
          <span className="case-sheet__handle" />
          <button className="case-sheet__close" onClick={onClose} aria-label="Sluiten">
            Sluiten ✕
          </button>
        </div>

        <div className="case-sheet__scroll">
          <header className="case-hero-inner container">
            <p className="eyebrow on-dark">{data.tag}</p>
            <h1>{data.brand}</h1>
            <p className="case-sub">{data.oneliner}</p>
            {!data.verified && (
              <span className="draft-flag">Concept · cijfers nog te verifiëren</span>
            )}
            <dl className="case-meta">
              <div><dt>Klant</dt><dd>{data.client}</dd></div>
              <div><dt>Waar</dt><dd>{data.where}</dd></div>
              <div><dt>Diensten</dt><dd>{data.services.join(", ")}</dd></div>
            </dl>
          </header>

          {(data.video || (data.images && data.images[0])) && (
            <div className="case-sheet__hero container">
              {data.video ? (
                <video
                  src={data.video}
                  poster={data.images && data.images[0]}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img src={data.images[0]} alt={data.brand} loading="lazy" />
              )}
            </div>
          )}

          <div className="container case-sheet__body">
            <div className="case-body">
              <p className="lead">{data.intro}</p>

              <h3>De uitdaging</h3>
              <p>{data.challenge}</p>

              <h3>De aanpak</h3>
              {data.approach.map((p, i) => <p key={i}>{p}</p>)}

              <h3>Het resultaat</h3>
              <p>{data.result}</p>
            </div>

            {data.images && data.images.length > 1 && (
              <div className="case-gallery">
                {data.images.slice(1).map((src, i) => (
                  <img key={i} src={src} alt={`${data.brand} ${i + 2}`} loading="lazy" />
                ))}
              </div>
            )}

            <div className="case-results section--green">
              <p className="eyebrow on-dark">In cijfers</p>
              <div className="results mt-s">
                {data.results.map((r, i) => (
                  <div className="result" key={i}>
                    <b>{r.value}</b>
                    <span>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-sheet__next">
              <button className="btn btn--light" onClick={onClose}>← Terug naar het werk</button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
