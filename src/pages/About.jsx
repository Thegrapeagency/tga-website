import { Link } from "react-router-dom";
import Page from "../components/Page.jsx";

export default function About() {
  return (
    <Page>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Over ons</p>
          <h1 className="page-title">We komen uit de wijnwereld.<br />Daarom durven we eruit te stappen.</h1>

          <div className="about-cols mt-l">
            <div>
              <p className="lead">
                The Grape Agency is een brand activation bureau voor wijn. We zijn voortgekomen
                uit eventbureau Meisjes van de Wijn en wijnfestival Nacht van de Wijn, en kennen
                de wijnwereld dus van binnenuit.
              </p>
              <p>
                Juist daarom plaatsen we merken op plekken waar wijn niet vanzelfsprekend is. Een
                hardstylefestival, een filmpremière, een beurs over vakanties. We weten waar de
                doelgroep is, hoe je hun aandacht wint en hoe je een merk laat blijven hangen.
              </p>
              <p>
                We bedenken niet alleen het concept. We bouwen de bar, leveren het sommelierteam,
                maken het artwork en regelen de media eromheen. Eén partij, van idee tot het laatste
                glas dat geschonken wordt.
              </p>
            </div>
            <div>
              <div className="fact">
                <span className="fact__k">Opgericht vanuit</span>
                <span className="fact__v">Meisjes van de Wijn &amp; Nacht van de Wijn</span>
              </div>
              <div className="fact">
                <span className="fact__k">Eerder gewerkt voor</span>
                <span className="fact__v">Mirabeau, 19 Crimes, Mouton Cadet, Schlumberger, Rotari, Casa Rojo, Torres, Domaine Ott, Jacquart</span>
              </div>
              <div className="fact">
                <span className="fact__k">Gevestigd</span>
                <span className="fact__v">Daltonlaan 200, 3584 BJ Utrecht</span>
              </div>
              <div className="fact">
                <span className="fact__k">KvK</span>
                <span className="fact__v">89631773 — handelsnaam van MvdW BV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <p className="statement">Setting down a brand is one thing. Setting it down where it counts is another.</p>
          <div className="mt-l"><Link to="/werk" className="btn btn--light">Zie hoe we dat doen</Link></div>
        </div>
      </section>
    </Page>
  );
}
