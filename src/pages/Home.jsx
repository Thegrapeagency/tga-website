import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import Aurora from "../components/Aurora.jsx";
import Reveal from "../components/Reveal.jsx";
import Magnetic from "../components/Magnetic.jsx";
import Showcase from "../components/Showcase.jsx";
import ScrollGrid from "../components/ScrollGrid.jsx";
import { cases } from "../data/cases.js";
import { bentoSpan } from "../lib/layout.js";
import { useLang } from "../i18n.jsx";

// Whole portfolio, media-rich cases first.
const featured = [...cases].sort((a, b) => (b.images ? 1 : 0) - (a.images ? 1 : 0));
const showcaseItems = featured.filter((c) => c.images && c.images[0]).slice(0, 6);

export default function Home() {
  const { t } = useLang();
  return (
    <Page>
      <Showcase items={showcaseItems} />

      <section className="section section--cream work-home has-scrollgrid">
        <ScrollGrid variant="light" />
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
        <ScrollGrid variant="dark" />
        <div className="container">
          <Reveal as="p" className="statement">{t.home.statement}</Reveal>
          <Reveal delay={0.15} className="mt-l">
            <Magnetic><Link to="/diensten" className="btn btn--light">{t.home.servicesCta} <span className="btn__arrow" aria-hidden="true">→</span></Link></Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="section section--sand has-scrollgrid">
        <ScrollGrid variant="light" />
        <div className="container">
          <Reveal as="p" className="eyebrow">{t.home.clients}</Reveal>
          <div className="clients mt-m">
            {["Mirabeau", "19 Crimes", "Mouton Cadet", "Schlumberger", "Rotari", "Casa Rojo", "Castel Mimi", "Vacu Vin", "Jean Leon", "Rebels 0,0", "Bemberg"].map((b, i) => (
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
