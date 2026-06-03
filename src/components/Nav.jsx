import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { to: "/werk", label: "Werk" },
  { to: "/diensten", label: "Diensten" },
  { to: "/over", label: "Over" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const { pathname } = useLocation();
  const base = "/" + pathname.split("/")[1];

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
            <small>Brand activation · wijn</small>
          </span>
        </Link>

        <nav className="tabs" aria-label="Hoofdmenu">
          {tabs.map((t) => {
            const active = base === t.to;
            return (
              <Link key={t.to} to={t.to} className={`tab ${active ? "tab--active" : ""}`}>
                {active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="tab__pill"
                    transition={{ type: "spring", stiffness: 480, damping: 38 }}
                  />
                )}
                <span className="tab__label">{t.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
