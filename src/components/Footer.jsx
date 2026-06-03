import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <img
              src="/logo-black.png"
              alt="The Grape Agency"
              style={{ height: 44, width: "auto", maxWidth: 230, filter: "invert(1) brightness(2)" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <p style={{ maxWidth: "34ch", marginTop: 18, color: "rgba(243,239,204,.7)" }}>{f.tagline}</p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h4>{f.menu}</h4>
              <Link to="/werk">{t.nav.work}</Link>
              <Link to="/diensten">{t.nav.services}</Link>
              <Link to="/over">{t.nav.about}</Link>
              <Link to="/contact">{t.nav.contact}</Link>
            </div>
            <div className="footer__col">
              <h4>{f.sister}</h4>
              <a href="https://meisjesvandewijn.nl" target="_blank" rel="noreferrer">Meisjes van de Wijn</a>
              <a href="https://nachtvandewijn.nl" target="_blank" rel="noreferrer">Nacht van de Wijn</a>
            </div>
            <div className="footer__col">
              <h4>{f.follow}</h4>
              <a href="https://instagram.com/thegrapeagency" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/the-grape-agency/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="footer__col">
              <h4>{f.contact}</h4>
              <a href="mailto:cheers@thegrapeagency.nl">cheers@thegrapeagency.nl</a>
              <p>Daltonlaan 200<br />3584 BJ Utrecht</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} The Grape Agency — MvdW BV</span>
          <span>KvK 89631773</span>
        </div>
      </div>
    </footer>
  );
}
