import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "../components/Page.jsx";

const services = [
  { n: "01", t: "Festival- & eventactivatie", d: "Wijnbars, lounges en concepten op festivals en events waar wijn geen vanzelfsprekendheid is. Van Defqon.1 tot een kasteeltuin." },
  { n: "02", t: "Brand experience & concept", d: "Een speakeasy, een reuzenrad, een compleet restaurant. We bedenken de vorm die bij het merk hoort en bouwen hem ook." },
  { n: "03", t: "Beurs- & retailactivatie", d: "Opvallen tussen honderden merken en tegelijk verkopen. Inclusief instore-promoties die bezoekers naar je toe trekken." },
  { n: "04", t: "Influencer & content", d: "Creators die hun publiek echt bewegen, plus content en commercials die het merk een eigen toon geven in plaats van een productdemo." },
  { n: "05", t: "Sommelierteam & bemensing", d: "Het team van Meisjes van de Wijn schenkt, vertelt en verkoopt. Kennis aan tafel, niet alleen een gezicht achter de bar." },
  { n: "06", t: "Strategie & positionering", d: "Waar moet je merk staan, voor wie, en waarom daar? We bepalen de plek voordat we de bar bouwen." },
];

export default function Services() {
  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Diensten</p>
          <h1 className="page-title">We bedenken het niet alleen.<br />We bouwen het en staan erachter.</h1>
          <p className="lead mt-s">
            The Grape Agency is opgericht vanuit eventbureau Meisjes van de Wijn en wijnfestival
            Nacht van de Wijn. We kennen de wijnwereld én de plek waar je doelgroep echt is.
          </p>

          <div className="svc-grid mt-l">
            {services.map((s, i) => (
              <motion.div className="svc" key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.05 }}
              >
                <span className="num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--green">
        <div className="container">
          <p className="statement">Klaar om je merk neer te zetten waar niemand het verwacht?</p>
          <div className="mt-l"><Link to="/contact" className="btn btn--light">Neem contact op</Link></div>
        </div>
      </section>
    </Page>
  );
}
