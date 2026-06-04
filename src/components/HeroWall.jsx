import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLang, pick } from "../i18n.jsx";
import { setOpenOrigin } from "../lib/openOrigin.js";
import ScrollGrid from "./ScrollGrid.jsx";

const EASE = [0.16, 1, 0.3, 1];

// Hero: a living wall of work in motion + giant "type-as-window" (the case
// brand in huge letters, filled with that case's photo), scroll-reactive.
export default function HeroWall({ items, wall }) {
  const { t, lang } = useLang();
  const location = useLocation();
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = items[i];
  const ref = useRef(null);

  // Scroll-reactive: zoom through the giant type + parallax the wall as you leave.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const typeScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.28]);
  const typeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const wallY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -90]);

  useEffect(() => {
    if (paused || reduce || items.length < 2) return;
    const id = setTimeout(() => setI((p) => (p + 1) % items.length), 4600);
    return () => clearTimeout(id);
  }, [i, paused, reduce, items.length]);

  const rowA = [...wall, ...wall];
  const rowB = [...wall.slice().reverse(), ...wall.slice().reverse()];

  return (
    <section
      className="herowall"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* living wall of work */}
      <motion.div className="herowall__wall" style={{ y: wallY }} aria-hidden="true">
        <div className="herowall__row">
          <div className="herowall__track herowall__track--a">
            {rowA.map((c, n) => <span className="herowall__cell" key={`a${n}`}><img src={c.images[0]} alt="" loading="lazy" /></span>)}
          </div>
        </div>
        <div className="herowall__row">
          <div className="herowall__track herowall__track--b">
            {rowB.map((c, n) => <span className="herowall__cell" key={`b${n}`}><img src={c.images[0]} alt="" loading="lazy" /></span>)}
          </div>
        </div>
      </motion.div>

      <ScrollGrid variant="dark" className="herowall__grid" />
      <span className="herowall__scrim" aria-hidden="true" />

      <motion.div className="container herowall__inner" style={{ opacity: fadeOut }}>
        <p className="herowall__eyebrow">
          <span className="hero__dot" /> The Grape Agency · {lang === "en" ? "brand activation · wine" : "merkactivatie · wijn"}
        </p>

        <motion.div className="herowall__center" style={{ scale: typeScale, y: typeY }}>
          <AnimatePresence mode="wait">
            <motion.h1
              key={active.slug}
              className="herowall__type"
              style={{ backgroundImage: `url(${active.images[0]})` }}
              initial={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, filter: "blur(14px)" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              {active.brand}
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        <div className="herowall__foot">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              className="herowall__case"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <span className="herowall__tag">{pick(active.tag, lang)}</span>
              <p className="herowall__line">{pick(active.oneliner, lang)}</p>
              <Link
                to={`/werk/${active.slug}`}
                state={{ background: location }}
                className="herowall__open"
                data-tile={active.slug}
                onClick={(e) => setOpenOrigin(active.slug, e.currentTarget.closest(".herowall"))}
              >
                {lang === "en" ? "View case" : "Bekijk case"} <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </AnimatePresence>

          <div className="herowall__controls">
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
      </motion.div>

      <span className="showcase__scroll" aria-hidden="true">{lang === "en" ? "Scroll" : "Scroll"}</span>
    </section>
  );
}
