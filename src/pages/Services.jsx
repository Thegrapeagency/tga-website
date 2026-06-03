import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";
import { useLang, pick } from "../i18n.jsx";

const services = [
  {
    n: "01",
    t: { en: "Festival & event activation", nl: "Festival- & eventactivatie" },
    d: {
      en: "Wine bars, lounges and concepts at festivals and events where wine is anything but a given. From Mysteryland to a castle garden.",
      nl: "Wijnbars, lounges en concepten op festivals en events waar wijn geen vanzelfsprekendheid is. Van Mysteryland tot een kasteeltuin.",
    },
  },
  {
    n: "02",
    t: { en: "Brand experience & concept", nl: "Brand experience & concept" },
    d: {
      en: "A speakeasy, a Ferris wheel, a full pop-up restaurant. We design the form that fits the brand, and we build it too.",
      nl: "Een speakeasy, een reuzenrad, een compleet restaurant. We bedenken de vorm die bij het merk hoort en bouwen hem ook.",
    },
  },
  {
    n: "03",
    t: { en: "Trade & retail activation", nl: "Beurs- & retailactivatie" },
    d: {
      en: "Standing out among hundreds of brands and selling at the same time. Including in-store promotions that pull visitors your way.",
      nl: "Opvallen tussen honderden merken en tegelijk verkopen. Inclusief instore-promoties die bezoekers naar je toe trekken.",
    },
  },
  {
    n: "04",
    t: { en: "Influencer & content", nl: "Influencer & content" },
    d: {
      en: "Creators who genuinely move their audience, plus content and commercials that give the brand its own voice instead of a product demo.",
      nl: "Creators die hun publiek echt bewegen, plus content en commercials die het merk een eigen toon geven in plaats van een productdemo.",
    },
  },
  {
    n: "05",
    t: { en: "Sommelier team & staffing", nl: "Sommelierteam & bemensing" },
    d: {
      en: "The Meisjes van de Wijn team pours, tells the story and sells. Knowledge at the table, not just a face behind the bar.",
      nl: "Het team van Meisjes van de Wijn schenkt, vertelt en verkoopt. Kennis aan tafel, niet alleen een gezicht achter de bar.",
    },
  },
  {
    n: "06",
    t: { en: "Strategy & positioning", nl: "Strategie & positionering" },
    d: {
      en: "Where should your brand be, for whom, and why there? We set the place before we build the bar.",
      nl: "Waar moet je merk staan, voor wie, en waarom daar? We bepalen de plek voordat we de bar bouwen.",
    },
  },
];

export default function Services() {
  const { lang, t } = useLang();
  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h1 className="page-title" style={{ whiteSpace: "pre-line" }}>{t.services.title}</h1>
          <p className="lead mt-s">{t.services.lead}</p>

          <div className="svc-grid mt-l">
            {services.map((s, i) => (
              <motion.div className="svc" key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              >
                <span className="num">{s.n}</span>
                <h3>{pick(s.t, lang)}</h3>
                <p>{pick(s.d, lang)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <p className="statement">{t.services.statement}</p>
          <div className="mt-l"><Link to="/contact" className="btn btn--light">{t.services.cta}</Link></div>
        </div>
      </section>
    </Page>
  );
}
