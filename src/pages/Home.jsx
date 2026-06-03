import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import { cases } from "../data/cases.js";
import { useLang } from "../i18n.jsx";

const stagger = { enter: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const line = {
  initial: { opacity: 0, y: "110%" },
  enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// Show the whole portfolio on the home page, media-rich cases first.
const featured = [...cases].sort((a, b) => (b.images ? 1 : 0) - (a.images ? 1 : 0));

export default function Home() {
  const { t } = useLang();
  return (
    <Page>
      <section className="hero">
        <div className="container">
          <motion.div variants={stagger} initial="initial" animate="enter">
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>{t.hero.l1}</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>{t.hero.l2}</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>{t.hero.l3}</motion.h1></div>
          </motion.div>
          <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            {t.hero.lede}
          </motion.p>
          <motion.div className="hero__cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
            <Link to="/werk" className="btn btn--light">{t.hero.cta1}</Link>
            <Link to="/contact" className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>{t.hero.cta2}</Link>
          </motion.div>
        </div>
        <span className="hero__mark" aria-hidden="true">G</span>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <h2>{t.home.featured}</h2>
            <Link to="/werk" className="btn btn--ghost">{t.home.all}</Link>
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
          <p className="statement">{t.home.statement}</p>
          <div className="mt-l">
            <Link to="/diensten" className="btn btn--light">{t.home.servicesCta}</Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <p className="eyebrow">{t.home.clients}</p>
          <div className="clients mt-m">
            {["Mirabeau", "19 Crimes", "Mouton Cadet", "Schlumberger", "Rotari", "Casa Rojo", "Castel Mimi", "Vacu Vin", "Jean Leon", "Rebels 0,0"].map((b) => (
              <span key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
