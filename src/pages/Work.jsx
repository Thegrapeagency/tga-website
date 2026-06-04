import Page from "../components/Page.jsx";
import CaseCard from "../components/CaseCard.jsx";
import ScrollGrid from "../components/ScrollGrid.jsx";
import { cases } from "../data/cases.js";
import { bentoSpan } from "../lib/layout.js";
import { useLang } from "../i18n.jsx";

export default function Work() {
  const { t } = useLang();
  const ordered = [...cases].sort((a, b) => (b.images ? 1 : 0) - (a.images ? 1 : 0));

  return (
    <Page>
      <section className="section work-intro">
        <div className="container">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h1 className="work-title">{t.work.title}</h1>
          <p className="lead mt-s">{t.work.lead}</p>
        </div>
      </section>

      <section className="section work-grid-section">
        <ScrollGrid variant="light" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="work-grid">
            {ordered.map((c, i) => (
              <CaseCard key={c.slug} c={c} index={i} span={bentoSpan(i)} />
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
