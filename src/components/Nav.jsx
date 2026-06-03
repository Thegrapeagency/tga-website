import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "../i18n.jsx";

const Icon = ({ d, fill }) => (
  <svg className="tabbar__icon" viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);
const icons = {
  home: <Icon d={<path d="M3 11.5 12 4l9 7.5M5 10v10h14V10" />} />,
  work: <Icon d={<><rect x="3" y="4" width="7" height="7" rx="1.2" /><rect x="14" y="4" width="7" height="7" rx="1.2" /><rect x="3" y="14" width="7" height="6" rx="1.2" /><rect x="14" y="14" width="7" height="6" rx="1.2" /></>} />,
  services: <Icon d={<path d="M12 3v3m0 12v3M3 12h3m12 0h3M6 6l2 2m8 8 2 2m0-12-2 2M8 16l-2 2M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />} />,
  about: <Icon d={<><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></>} />,
  contact: <Icon d={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>} />,
};

export default function Nav() {
  const { pathname } = useLocation();
  const base = "/" + pathname.split("/")[1];
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const tabs = [
    { to: "/werk", label: t.nav.work, icon: "work" },
    { to: "/diensten", label: t.nav.services, icon: "services" },
    { to: "/over", label: t.nav.about, icon: "about" },
    { to: "/contact", label: t.nav.contact, icon: "contact" },
  ];
  const bottomTabs = [{ to: "/", label: t.nav.home, icon: "home" }, ...tabs];

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
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
            <nav className="tabs nav__tabs--desktop" aria-label="Menu">
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

      <nav className="tabbar" aria-label="Menu">
        <div className="tabbar__row">
          {bottomTabs.map((tab) => {
            const active = base === tab.to;
            return (
              <Link key={tab.to} to={tab.to} className={`tabbar__item ${active ? "tabbar__item--active" : ""}`}>
                {active && (
                  <motion.span
                    layoutId="tabbar-pill"
                    className="tabbar__pill"
                    transition={{ type: "spring", stiffness: 480, damping: 40 }}
                  />
                )}
                {icons[tab.icon]}
                <span className="tabbar__label">{tab.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
