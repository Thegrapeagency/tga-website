import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import Aurora from "../components/Aurora.jsx";
import Reveal from "../components/Reveal.jsx";
import Magnetic from "../components/Magnetic.jsx";
import { useLang } from "../i18n.jsx";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <Page>
      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">{a.eyebrow}</Reveal>
          <Reveal as="h1" delay={0.05} className="page-title" style={{ whiteSpace: "pre-line" }}>{a.title}</Reveal>

          <div className="about-cols mt-l">
            <Reveal delay={0.1}>
              <p className="lead">{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="fact"><span className="fact__k">{a.f1k}</span><span className="fact__v">{a.f1v}</span></div>
              <div className="fact"><span className="fact__k">{a.f2k}</span><span className="fact__v">{a.f2v}</span></div>
              <div className="fact"><span className="fact__k">{a.f3k}</span><span className="fact__v">{a.f3v}</span></div>
              <div className="fact"><span className="fact__k">{a.f4k}</span><span className="fact__v">{a.f4v}</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <Aurora />
        <div className="container">
          <Reveal as="p" className="statement">{a.statement}</Reveal>
          <Reveal delay={0.15} className="mt-l"><Magnetic><Link to="/werk" className="btn btn--light">{a.cta} <span className="btn__arrow" aria-hidden="true">→</span></Link></Magnetic></Reveal>
        </div>
      </section>
    </Page>
  );
}
