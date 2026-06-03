import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";
import { useLang } from "../i18n.jsx";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 className="page-title" style={{ whiteSpace: "pre-line" }}>{a.title}</h1>

          <div className="about-cols mt-l">
            <div>
              <p className="lead">{a.p1}</p>
              <p>{a.p2}</p>
              <p>{a.p3}</p>
            </div>
            <div>
              <div className="fact"><span className="fact__k">{a.f1k}</span><span className="fact__v">{a.f1v}</span></div>
              <div className="fact"><span className="fact__k">{a.f2k}</span><span className="fact__v">{a.f2v}</span></div>
              <div className="fact"><span className="fact__k">{a.f3k}</span><span className="fact__v">{a.f3v}</span></div>
              <div className="fact"><span className="fact__k">{a.f4k}</span><span className="fact__v">{a.f4v}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <p className="statement">{a.statement}</p>
          <div className="mt-l"><Link to="/werk" className="btn btn--light">{a.cta}</Link></div>
        </div>
      </section>
    </Page>
  );
}
