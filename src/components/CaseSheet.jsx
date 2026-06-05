import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, useDragControls } from "framer-motion";
import { useLenis } from "lenis/react";
import Reveal from "./Reveal.jsx";
import Lightbox from "./Lightbox.jsx";
import Aurora from "./Aurora.jsx";
import TechMesh from "./TechMesh.jsx";
import { takeOpenOrigin } from "../lib/openOrigin.js";
import { useLang, pick } from "../i18n.jsx";

const GAL_SPAN = ["gal--wide", "gal--tall", "gal--tall", "gal--full", "gal--tall", ""];

export default function CaseSheet({ data, onClose }) {
  const { lang, t } = useLang();
  const lenis = useLenis();
  const scrollRef = useRef(null);
  const dragControls = useDragControls();
  const { scrollY } = useScroll({ container: scrollRef });
  const heroY = useTransform(scrollY, [0, 700], [0, 90]);
  // Horizontal gallery reel: pans sideways as the section scrolls through.
  const reelRef = useRef(null);
  const { scrollYProgress: reelProgress } = useScroll({ container: scrollRef, target: reelRef, offset: ["start end", "end start"] });
  const reelEndPct = -Math.min(74, (data.images ? data.images.length - 1 : 0) * 8);
  const reelX = useTransform(reelProgress, [0, 1], ["4%", `${reelEndPct}%`]);
  const [lb, setLb] = useState(null);
  const approach = pick(data.approach, lang) || [];
  const videos = data.videos || (data.video ? [data.video] : []);
  const cover = data.images && data.images[0];
  const heroVideo = videos[0];
  const gallery = data.images ? data.images.slice(1) : [];
  // Knockout-hero font size scales down for longer brand names so they fit.
  const bn = data.brand.length;
  const heroFont = bn <= 7 ? 250 : bn <= 10 ? 200 : bn <= 13 ? 158 : bn <= 18 ? 120 : 95;

  // Card-expand: grow out of the tapped tile's footprint via clip-path, with
  // the cover photo growing along (image continuity), then dissolving to the
  // case. Falls back to a slide-up for deep-links (no origin).
  const originRef = useRef(takeOpenOrigin(data.slug));
  const o = originRef.current;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1280;
  const vh = typeof window !== "undefined" ? window.innerHeight : 800;
  const sheetTop = vw <= 720 ? 0 : 20;
  const openProps = o
    ? {
        initial: {
          opacity: 1,
          clipPath: `inset(${Math.max(0, o.top - sheetTop)}px ${Math.max(0, vw - o.left - o.width)}px ${Math.max(0, vh - o.top - o.height)}px ${Math.max(0, o.left)}px round 16px)`,
        },
        animate: { opacity: 1, clipPath: "inset(0px 0px 0px 0px round 26px)" },
        transition: { duration: 0.66, ease: [0.16, 1, 0.3, 1] },
      }
    : {
        initial: { y: "100%" },
        animate: { y: 0 },
        transition: { type: "spring", stiffness: 240, damping: 32 },
      };

  // Lock background scroll while the sheet is open.
  useEffect(() => {
    lenis?.stop();
    return () => lenis?.start();
  }, [lenis]);

  const onDragEnd = (_e, info) => {
    if (info.offset.y > 140 || info.velocity.y > 650) onClose();
  };

  return createPortal(
    <>
      <motion.div className="sheet-scrim" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
      <motion.aside
        className="case-sheet"
        initial={openProps.initial}
        animate={openProps.animate}
        exit={{ y: "100%", opacity: 0, transition: { duration: 0.34, ease: [0.7, 0, 0.84, 0] } }}
        transition={openProps.transition}
        drag="y"
        dragListener={false}
        dragControls={dragControls}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.55 }}
        onDragEnd={onDragEnd}
        role="dialog"
        aria-label={`${data.brand} case`}
      >
        <Aurora className="aurora--sheet" />
        <TechMesh className="techmesh--sheet" />
        {o && cover && (
          <motion.div
            className="case-sheet__grow"
            style={{ backgroundImage: `url(${cover})` }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        )}
        <div
          className="case-sheet__bar"
          onPointerDown={(e) => dragControls.start(e)}
          style={{ touchAction: "none", cursor: "grab" }}
        >
          <span className="case-sheet__handle" />
          <button
            className="case-sheet__close"
            onClick={onClose}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label={t.work.close}
          >
            {t.work.close} ✕
          </button>
        </div>

        <div className="case-sheet__scroll" data-lenis-prevent ref={scrollRef}>
          {(heroVideo || cover) ? (
            <motion.div
              className="case-knockout container"
              initial={{ opacity: 0, y: 26, clipPath: "inset(7% 3% 7% 3% round 22px)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0% round 22px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="case-knockout__stage">
                <motion.div className="case-knockout__media" style={{ y: heroY }}>
                  {heroVideo ? (
                    <video src={heroVideo} poster={cover} autoPlay muted loop playsInline />
                  ) : (
                    <img src={cover} alt="" />
                  )}
                </motion.div>
                <div className="case-knockout__window" aria-hidden="true">
                  <svg className="case-knockout__svg" viewBox="0 0 1400 600" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <mask id={`kc-${data.slug}`}>
                        <rect x="-1400" y="-600" width="4200" height="1800" fill="#fff" />
                        <text className="case-knockout__text" x="700" y="392" textAnchor="middle" fontSize={heroFont}>{data.brand}</text>
                      </mask>
                    </defs>
                    <rect x="-1400" y="-600" width="4200" height="1800" fill="#0b130d" fillOpacity="0.5" mask={`url(#kc-${data.slug})`} />
                  </svg>
                </div>
                <p className="case-knockout__tag">{pick(data.tag, lang)}</p>
                <div className="case-knockout__foot">
                  <h1 className="sr-only">{data.brand}</h1>
                  {!data.verified && <span className="draft-flag">{t.work.draft}</span>}
                  <p className="case-knockout__sub">{pick(data.oneliner, lang)}</p>
                  {data.link && (
                    <a className="btn btn--light case-link" href={data.link.url} target="_blank" rel="noopener noreferrer">
                      {pick(data.link.label, lang)} <span className="btn__arrow" aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
              <dl className="case-meta">
                <div><dt>{t.work.client}</dt><dd>{pick(data.client, lang)}</dd></div>
                <div><dt>{t.work.where}</dt><dd>{pick(data.where, lang)}</dd></div>
                <div><dt>{t.work.services}</dt><dd>{pick(data.services, lang).join(", ")}</dd></div>
              </dl>
            </motion.div>
          ) : (
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

            {data.timeline && (
              <div className="case-timeline">
                <p className="eyebrow on-dark">{t.work.timeline}</p>
                <ol className="timeline">
                  {data.timeline.map((step, i) => (
                    <motion.li
                      className="timeline__step"
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-8%" }}
                      transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <span className="timeline__date">{pick(step.date, lang)}</span>
                      <div className="timeline__content">
                        <h4>{pick(step.title, lang)}</h4>
                        <p>{pick(step.body, lang)}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </div>
            )}

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
              <div className={`case-reel ${data.imagesContain ? "case-reel--contain" : ""}`} ref={reelRef}>
                <p className="eyebrow on-dark case-reel__label">{lang === "en" ? "In pictures" : "In beeld"}</p>
                <motion.div className="case-reel__track" style={{ x: reelX }}>
                  {gallery.map((src, i) => (
                    <button
                      type="button"
                      key={i}
                      className="case-reel__item"
                      onClick={() => setLb(i + 1)}
                      aria-label={`${data.brand} ${i + 2}`}
                    >
                      <img src={src} alt={`${data.brand} ${i + 2}`} loading="lazy" />
                    </button>
                  ))}
                </motion.div>
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

            {data.quote && (
              <motion.figure
                className="case-quote"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <blockquote>{pick(data.quote, lang)}</blockquote>
                {data.quote.by && <figcaption>{pick(data.quote.by, lang)}</figcaption>}
              </motion.figure>
            )}

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
