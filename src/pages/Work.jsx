import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import { cases, getCase } from "../data/cases.js";
import { useLang, pick } from "../i18n.jsx";

export default function Work() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { lang, t } = useLang();
  const selected = slug ? getCase(slug) : null;
  const ordered = [...cases].sort((a, b) => (b.images ? 1 : 0) - (a.images ? 1 : 0));

  return (
    <Page>
      <section className="section work-intro">
        <div className="container">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h1 className="work-title">{t.work.title}</h1>
          <p className="lead mt-s">{t.work.lead}</p>
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
            {ordered.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <CaseSheet key={selected.slug} data={selected} lang={lang} t={t} onClose={() => navigate("/werk")} />
        )}
      </AnimatePresence>
    </Page>
  );
}

function CaseSheet({ data, lang, t, onClose }) {
  const approach = pick(data.approach, lang) || [];
  const videos = data.videos || (data.video ? [data.video] : []);
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
          <button className="case-sheet__close" onClick={onClose} aria-label={t.work.close}>
            {t.work.close} ✕
          </button>
        </div>

        <div className="case-sheet__scroll">
          <header className="case-hero-inner container">
            <p className="eyebrow on-dark">{pick(data.tag, lang)}</p>
            <h1>{data.brand}</h1>
            <p className="case-sub">{pick(data.oneliner, lang)}</p>
            {!data.verified && <span className="draft-flag">{t.work.draft}</span>}
            <dl className="case-meta">
              <div><dt>{t.work.client}</dt><dd>{pick(data.client, lang)}</dd></div>
              <div><dt>{t.work.where}</dt><dd>{pick(data.where, lang)}</dd></div>
              <div><dt>{t.work.services}</dt><dd>{pick(data.services, lang).join(", ")}</dd></div>
            </dl>
          </header>

          {(videos[0] || (data.images && data.images[0])) && (
            <div className="case-sheet__hero container">
              {videos[0] ? (
                <video src={videos[0]} poster={data.images && data.images[0]} autoPlay muted loop playsInline />
              ) : (
                <img src={data.images[0]} alt={data.brand} loading="lazy" />
              )}
            </div>
          )}

          <div className="container case-sheet__body">
            <div className="case-body">
              <p className="lead">{pick(data.intro, lang)}</p>

              <h3>{t.work.challenge}</h3>
              <p>{pick(data.challenge, lang)}</p>

              <h3>{t.work.approach}</h3>
              {approach.map((p, i) => <p key={i}>{p}</p>)}

              <h3>{t.work.result}</h3>
              <p>{pick(data.result, lang)}</p>
            </div>

            {videos.length > 1 && (
              <div className="case-videos">
                {videos.slice(1).map((src, i) => (
                  <video key={i} src={src} controls playsInline preload="metadata" />
                ))}
              </div>
            )}

            {data.images && data.images.length > 1 && (
              <div className="case-gallery">
                {data.images.slice(1).map((src, i) => (
                  <img key={i} src={src} alt={`${data.brand} ${i + 2}`} loading="lazy" />
                ))}
              </div>
            )}

            <div className="case-results section--green">
              <p className="eyebrow on-dark">{t.work.numbers}</p>
              <div className="results mt-s">
                {data.results.map((r, i) => (
                  <div className="result" key={i}>
                    <b>{r.value}</b>
                    <span>{pick(r.label, lang)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="case-sheet__next">
              <button className="btn btn--light" onClick={onClose}>{t.work.back}</button>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
