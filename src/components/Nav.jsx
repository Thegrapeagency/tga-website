import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "../i18n.jsx";

export default function Nav() {
  const { pathname } = useLocation();
  const base = "/" + pathname.split("/")[1];
  const { lang, setLang, t } = useLang();

  const tabs = [
    { to: "/werk", label: t.nav.work },
    { to: "/diensten", label: t.nav.services },
    { to: "/over", label: t.nav.about },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link to="/" className="brand" aria-label="The Grape Agency home">
          <img
            src="/logo-black.png"
            alt="The Grape Agency"
            className="brand__logo"
            onError={(e) => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "block"; }}
          />
          <span className="wordmark" style={{ display: "none" }}>
            The Grape Agency
            <small>Brand activation · wine</small>
          </span>
        </Link>

        <div className="nav__right">
          <nav className="tabs" aria-label="Menu">
            {tabs.map((tab) => {
              const active = base === tab.to;
              return (
                <Link key={tab.to} to={tab.to} className={`tab ${active ? "tab--active" : ""}`}>
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      className="tab__pill"
                      transition={{ type: "spring", stiffness: 480, damping: 38 }}
                    />
                  )}
                  <span className="tab__label">{tab.label}</span>
                </Link>
              );
            })}
          </nav>
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            aria-label={lang === "en" ? "Schakel naar Nederlands" : "Switch to English"}
          >
            {t.langLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
