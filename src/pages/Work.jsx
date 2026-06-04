import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import Reveal from "../components/Reveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import Aurora from "../components/Aurora.jsx";
import { cases, getCase } from "../data/cases.js";
import { bentoSpan } from "../lib/layout.js";
import { useLang, pick } from "../i18n.jsx";

const GAL_SPAN = ["gal--wide", "gal--tall", "gal--tall", "gal--full", "gal--tall", ""];

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
              scale: selected ? 0.985 : 1,
              opacity: selected ? 0.4 : 1,
              filter: selected ? "blur(3px)" : "blur(0px)",
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {ordered.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} span={bentoSpan(i)} />
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
  const lenis = useLenis();
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({ container: scrollRef });
  const heroY = useTransform(scrollY, [0, 700], [0, 90]);
  const [lb, setLb] = useState(null);
  const approach = pick(data.approach, lang) || [];
  const videos = data.videos || (data.video ? [data.video] : []);
  const cover = data.images && data.images[0];
  const heroVideo = videos[0];
  const gallery = data.images ? data.images.slice(1) : [];

  // Lock background scroll while the sheet is open.
  useEffect(() => {
    lenis?.stop();
    return () => lenis?.start();
  }, [lenis]);

  return createPortal(
    <>
      <motion.div className="sheet-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.aside
        className="case-sheet"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 240, damping: 32 }}
        role="dialog"
        aria-label={`${data.brand} case`}
      >
        <Aurora className="aurora--sheet" />
        <div className="case-sheet__bar">
          <span className="case-sheet__handle" />
          <button className="case-sheet__close" onClick={onClose} aria-label={t.work.close}>
            {t.work.close} ✕
          </button>
        </div>

        <div className="case-sheet__scroll" data-lenis-prevent ref={scrollRef}>
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

          {(heroVideo || cover) && (
            <motion.div
              className="case-sheet__hero container"
              initial={{ opacity: 0, y: 30, clipPath: "inset(8% 4% 8% 4% round 22px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 22px)" }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div className="case-sheet__hero-media" style={{ y: heroY }}>
                {heroVideo ? (
                  <video src={heroVideo} poster={cover} autoPlay muted loop playsInline />
                ) : (
                  <img className="case-hero-img" src={cover} alt={data.brand} />
                )}
                <span className="case-hero-glow" />
              </motion.div>
            </motion.div>
          )}

          <div className="container case-sheet__body">
            <div className="case-body">
              <Reveal as="p" className="lead">{pick(data.intro, lang)}</Reveal>
              <Reveal as="h3">{t.work.challenge}</Reveal>
              <Reveal as="p" delay={0.05}>{pick(data.challenge, lang)}</Reveal>
              <Reveal as="h3">{t.work.approach}</Reveal>
              {approach.map((p, i) => <Reveal as="p" key={i} delay={0.05 * i}>{p}</Reveal>)}
              <Reveal as="h3">{t.work.result}</Reveal>
              <Reveal as="p" delay={0.05}>{pick(data.result, lang)}</Reveal>
            </div>

            {videos.length > 1 && (
              <div className="case-videos">
                {videos.slice(1).map((src, i) => (
                  <motion.video key={i} src={`${src}#t=0.1`} poster={cover} controls playsInline preload="metadata"
                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }} />
                ))}
              </div>
            )}

            {gallery.length > 0 && (
              <div className="case-gallery">
                {gallery.map((src, i) => (
                  <motion.button
                    type="button"
                    key={i}
                    className={`gal ${GAL_SPAN[i % GAL_SPAN.length]}`}
                    onClick={() => setLb(i + 1)}
                    aria-label={`${data.brand} ${i + 2}`}
                    initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{ duration: 0.65, delay: (i % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img src={src} alt={`${data.brand} ${i + 2}`} loading="lazy" />
                  </motion.button>
                ))}
              </div>
            )}

            <div className="case-results">
              <p className="eyebrow on-dark">{t.work.numbers}</p>
              <div className="results">
                {data.results.map((r, i) => (
                  <motion.div className="result" key={i}
                    initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
                    <b>{r.value}</b>
                    <span>{pick(r.label, lang)}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="case-sheet__next">
              <button className="btn btn--light" onClick={onClose}>{t.work.back}</button>
            </div>
          </div>
        </div>
      </motion.aside>

      <Lightbox
        images={data.images || []}
        index={lb}
        onClose={() => setLb(null)}
        onIndex={setLb}
        alt={data.brand}
      />
    </>,
    document.body
  );
}
