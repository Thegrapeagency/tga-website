import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import { cases } from "../data/cases.js";

const stagger = {
  enter: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const line = {
  initial: { opacity: 0, y: "110%" },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const featured = cases.filter((c) =>
  ["mirabeau", "schlumberger", "mouton-cadet", "19-crimes"].includes(c.slug)
);

export default function Home() {
  return (
    <Page>
      <section className="hero">
        <div className="container">
          <motion.div variants={stagger} initial="initial" animate="enter">
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>Wij zetten wijnmerken</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>neer op plekken waar</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>niemand wijn verwacht.</motion.h1></div>
          </motion.div>
          <motion.p
            className="lede"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          >
            Brand activation voor wijnmerken en importeurs. Van een speakeasy op een wijnfestival
            tot een Provence-terras midden op een dancefestival. Het werk doet het woord.
          </motion.p>
          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/werk" className="btn btn--light">Bekijk het werk</Link>
            <Link to="/contact" className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>Start een project</Link>
          </motion.div>
        </div>
        <span className="hero__mark" aria-hidden="true">G</span>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <h2>Een greep uit het werk</h2>
            <Link to="/werk" className="btn btn--ghost">Alle cases →</Link>
          </div>
          <div className="work-grid">
            {featured.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <p className="eyebrow on-dark">Wat we doen</p>
          <p className="statement mt-s">
            Andere bureaus maken een stand. Wij maken het moment dat mensen onthouden.
          </p>
          <div className="mt-l">
            <Link to="/diensten" className="btn btn--light">Onze diensten</Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <p className="eyebrow">Merken die we neerzetten</p>
          <div className="clients mt-m">
            {["Mirabeau", "19 Crimes", "Mouton Cadet", "Schlumberger", "Rotari", "Casa Rojo", "Vacu Vin", "Jean Leon", "Rebels 0.0"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
