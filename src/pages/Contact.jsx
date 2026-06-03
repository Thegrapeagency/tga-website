import Page from "../components/Page.jsx";

const EMAIL = "cheers@thegrapeagency.nl";

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Projectaanvraag — ${f.get("brand") || "merk"}`);
    const body = encodeURIComponent(
      `Naam: ${f.get("name")}\nMerk / bedrijf: ${f.get("brand")}\nE-mail: ${f.get("email")}\n\n${f.get("message")}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title">Een merk dat ergens moet landen?<br />Laten we praten.</h1>

          <div className="contact-grid mt-l">
            <div>
              <p className="lead">
                Vertel kort wat je merk is en waar je het wilt neerzetten. We reageren snel en
                denken meteen mee, ook als je nog geen uitgewerkt plan hebt.
              </p>
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
                <label htmlFor="name">Naam</label>
                <input id="name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="brand">Merk / bedrijf</label>
                <input id="brand" name="brand" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="message">Waar wil je je merk neerzetten?</label>
                <textarea id="message" name="message" rows="5" />
              </div>
              <button className="btn" type="submit">Verstuur</button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  );
}
