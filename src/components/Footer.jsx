import { Link } from "react-router-dom";

export default function Footer() {
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
            <p style={{ maxWidth: "34ch", marginTop: 18, color: "rgba(243,239,204,.7)" }}>
              Wij zetten wijnmerken neer op plekken waar niemand wijn verwacht.
            </p>
          </div>
          <div className="footer__links">
            <div className="footer__col">
              <h4>Menu</h4>
              <Link to="/werk">Werk</Link>
              <Link to="/diensten">Diensten</Link>
              <Link to="/over">Over</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer__col">
              <h4>Zustermerken</h4>
              <a href="https://meisjesvandewijn.nl" target="_blank" rel="noreferrer">Meisjes van de Wijn</a>
              <a href="https://nachtvandewijn.nl" target="_blank" rel="noreferrer">Nacht van de Wijn</a>
            </div>
            <div className="footer__col">
              <h4>Volg</h4>
              <a href="https://instagram.com/thegrapeagency" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/the-grape-agency/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div className="footer__col">
              <h4>Contact</h4>
              <a href="mailto:cheers@thegrapeagency.nl">cheers@thegrapeagency.nl</a>
              <p>Daltonlaan 200<br />3584 BJ Utrecht</p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} The Grape Agency — handelsnaam van MvdW BV</span>
          <span>KvK 89631773</span>
        </div>
      </div>
    </footer>
  );
}
