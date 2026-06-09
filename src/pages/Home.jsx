import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import Aurora from "../components/Aurora.jsx";
import Reveal from "../components/Reveal.jsx";
import Magnetic from "../components/Magnetic.jsx";
import { cases } from "../data/cases.js";
import { bentoSpan } from "../lib/layout.js";
import { useLang } from "../i18n.jsx";

const stagger = { enter: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };
const line = {
  initial: { opacity: 0, y: "110%" },
  enter: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

// Whole portfolio, media-rich cases first.
const featured = [...cases].sort((a, b) => (b.images ? 1 : 0) - (a.images ? 1 : 0));
const stripImages = featured.filter((c) => c.images).slice(0, 8);

export default function Home() {
  const { t } = useLang();
  return (
    <Page>
      <section className="hero">
        <Aurora />
        <div className="container hero__inner">
          <motion.div variants={stagger} initial="initial" animate="enter">
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>{t.hero.l1}</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }}>{t.hero.l2}</motion.h1></div>
            <div className="hero__line"><motion.h1 variants={line} style={{ display: "inline-block" }} className="hero__accent">{t.hero.l3}</motion.h1></div>
          </motion.div>
          <motion.p className="lede" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.7 }}>
            {t.hero.lede}
          </motion.p>
          <motion.div className="hero__cta" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.5 }}>
            <Magnetic><Link to="/werk" className="btn btn--light">{t.hero.cta1} <span className="btn__arrow" aria-hidden="true">→</span></Link></Magnetic>
            <Magnetic><Link to="/contact" className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "rgba(243,239,204,.5)" }}>{t.hero.cta2}</Link></Magnetic>
          </motion.div>
        </div>

        <motion.div className="hero__strip" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.8 }}>
          <div className="marquee">
            {[...stripImages, ...stripImages].map((c, i) => (
              <Link key={`${c.slug}-${i}`} to={`/werk/${c.slug}`} className="marquee__item">
                <img src={c.images[0]} alt={c.brand} loading="lazy" />
                <span>{c.brand}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="section-head">
            <Reveal as="h2">{t.home.featured}</Reveal>
            <Reveal delay={0.1}><Magnetic><Link to="/werk" className="btn btn--ghost">{t.home.all}</Link></Magnetic></Reveal>
          </div>
          <div className="work-grid">
            {featured.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} span={bentoSpan(i)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <Aurora />
        <div className="container">
          <Reveal as="p" className="statement">{t.home.statement}</Reveal>
          <Reveal delay={0.15} className="mt-l">
            <Magnetic><Link to="/diensten" className="btn btn--light">{t.home.servicesCta} <span className="btn__arrow" aria-hidden="true">→</span></Link></Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <Reveal as="p" className="eyebrow">{t.home.clients}</Reveal>
          <div className="clients mt-m">
            {["Mirabeau", "19 Crimes", "Mouton Cadet", "Schlumberger", "Rotari", "Casa Rojo", "Castel Mimi", "Vacu Vin", "Jean Leon", "Rebels 0,0"].map((b, i) => (
              <motion.span key={b}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 0.5, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 5) * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >{b}</motion.span>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
