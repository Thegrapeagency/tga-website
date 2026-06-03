import Page from "../components/Page.jsx";
import { useLang } from "../i18n.jsx";

const EMAIL = "cheers@thegrapeagency.nl";

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Project — ${f.get("brand") || "brand"}`);
    const body = encodeURIComponent(
      `${c.name}: ${f.get("name")}\n${c.brand}: ${f.get("brand")}\n${c.email}: ${f.get("email")}\n\n${f.get("message")}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="page-title" style={{ whiteSpace: "pre-line" }}>{c.title}</h1>

          <div className="contact-grid mt-l">
            <div>
              <p className="lead">{c.lead}</p>
              <div className="big-contact mt-l">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <div className="mt-l">
                <p style={{ opacity: .7, marginBottom: 4 }}>The Grape Agency</p>
                <p style={{ opacity: .7, margin: 0 }}>Daltonlaan 200, 3584 BJ Utrecht</p>
              </div>
            </div>

            <form onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">{c.name}</label>
                <input id="name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="brand">{c.brand}</label>
                <input id="brand" name="brand" />
              </div>
              <div className="field">
                <label htmlFor="email">{c.email}</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">{c.message}</label>
                <textarea id="message" name="message" rows="5" />
              </div>
              <button className="btn" type="submit">{c.send}</button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  );
}
