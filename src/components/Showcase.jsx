import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLang, pick } from "../i18n.jsx";
import { setOpenOrigin } from "../lib/openOrigin.js";
import TechMesh from "./TechMesh.jsx";

const EASE = [0.16, 1, 0.3, 1];

// Full-bleed immersive home hero: the work fills the screen and rotates,
// with minimal text and a direct way into the case.
export default function Showcase({ items }) {
  const { t, lang } = useLang();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = items[i];

  useEffect(() => {
    if (paused || reduce || items.length < 2) return;
    const id = setTimeout(() => setI((p) => (p + 1) % items.length), 5200);
    return () => clearTimeout(id);
  }, [i, paused, reduce, items.length]);

  return (
    <section
      className="showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="showcase__stage">
        <AnimatePresence>
          <motion.div
            key={active.slug}
            className="showcase__slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <motion.img
              src={active.images[0]}
              alt={active.brand}
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6.5, ease: "linear" }}
              draggable="false"
            />
          </motion.div>
        </AnimatePresence>
        <span className="showcase__shade" aria-hidden="true" />
        <TechMesh className="techmesh--showcase" floor={false} />
      </div>

      <div className="container showcase__overlay">
        <div className="showcase__top">
          <p className="showcase__eyebrow">
            <span className="hero__dot" /> The Grape Agency · {lang === "en" ? "brand activation · wine" : "merkactivatie · wijn"}
          </p>
        </div>

        <div className="showcase__bottom">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              className="showcase__case"
              initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="showcase__tag">{pick(active.tag, lang)}</span>
              <h1 className="showcase__brand">{active.brand}</h1>
              <p className="showcase__line">{pick(active.oneliner, lang)}</p>
              <Link
                to={`/werk/${active.slug}`}
                state={{ background: location }}
                className="showcase__open"
                data-tile={active.slug}
                onClick={(e) => setOpenOrigin(active.slug, e.currentTarget.closest(".showcase"))}
              >
                {lang === "en" ? "View case" : "Bekijk case"} <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="showcase__controls">
            <div className="showcase__dots" role="tablist" aria-label="Showcase">
              {items.map((c, idx) => (
                <button
                  key={c.slug}
                  className={`showcase__dot ${idx === i ? "is-active" : ""}`}
                  onClick={() => setI(idx)}
                  aria-label={c.brand}
                  aria-selected={idx === i}
                >
                  <span className="showcase__dot-fill" />
                </button>
              ))}
            </div>
            <div className="showcase__cta">
              <Link to="/werk" className="btn btn--light">{t.hero.cta1} <span className="btn__arrow" aria-hidden="true">→</span></Link>
              <Link to="/contact" className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "rgba(243,239,204,.5)" }}>{t.hero.cta2}</Link>
            </div>
          </div>
        </div>
      </div>

      <span className="showcase__scroll" aria-hidden="true">{lang === "en" ? "Scroll" : "Scroll"}</span>
    </section>
  );
}
