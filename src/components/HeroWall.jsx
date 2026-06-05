import { Link } from "react-router-dom";
import { useLang } from "../i18n.jsx";

// Hero: a living wall of work in motion, seen THROUGH a giant knockout of
// "THE GRAPE AGENCY". The wall moves via pure CSS (compositor) so it stays
// smooth while scrolling — no per-frame JS transforms on the masked layer.
export default function HeroWall({ wall }) {
  const { t, lang } = useLang();

  const rowA = [...wall, ...wall];
  const rowB = [...wall.slice().reverse(), ...wall.slice().reverse()];
  const rowC = [...wall.slice(3), ...wall.slice(0, 3), ...wall.slice(3), ...wall.slice(0, 3)];

  return (
    <section className="herowall">
      <div className="herowall__wall" aria-hidden="true">
        <div className="herowall__row">
          <div className="herowall__track herowall__track--a">
            {rowA.map((c, n) => <span className="herowall__cell" key={`a${n}`}><img src={c.images[0]} alt="" loading="lazy" /></span>)}
          </div>
        </div>
        <div className="herowall__row">
          <div className="herowall__track herowall__track--b">
            {rowB.map((c, n) => <span className="herowall__cell" key={`b${n}`}><img src={c.images[0]} alt="" loading="lazy" /></span>)}
          </div>
        </div>
        <div className="herowall__row">
          <div className="herowall__track herowall__track--c">
            {rowC.map((c, n) => <span className="herowall__cell" key={`c${n}`}><img src={c.images[0]} alt="" loading="lazy" /></span>)}
          </div>
        </div>
      </div>

      <div className="herowall__window" aria-hidden="true">
        <svg className="herowall__cut" viewBox="0 0 1000 820" preserveAspectRatio="xMidYMid meet">
          <defs>
            <mask id="tga-cut">
              <rect x="-1000" y="-820" width="3000" height="2460" fill="#fff" />
              <text className="herowall__cut-text" x="500" textAnchor="middle">
                <tspan x="500" y="232">THE</tspan>
                <tspan x="500" y="450">GRAPE</tspan>
                <tspan x="500" y="668">AGENCY</tspan>
              </text>
            </mask>
          </defs>
          <rect x="-1000" y="-820" width="3000" height="2460" fill="#0b130d" fillOpacity="0.58" mask="url(#tga-cut)" />
        </svg>
      </div>

      <div className="container herowall__inner">
        <p className="herowall__eyebrow">
          <span className="hero__dot" /> {lang === "en" ? "Brand activation studio · wine · NL" : "Brand-activatiestudio · wijn · NL"}
        </p>
        <div className="herowall__foot">
          <div className="herowall__controls">
            <div className="showcase__cta">
              <Link to="/werk" className="btn btn--light">{t.hero.cta1} <span className="btn__arrow" aria-hidden="true">→</span></Link>
              <Link to="/contact" className="btn btn--ghost" style={{ color: "var(--cream)", borderColor: "rgba(243,239,204,.5)" }}>{t.hero.cta2}</Link>
            </div>
          </div>
        </div>
      </div>

      <span className="showcase__scroll" aria-hidden="true">Scroll</span>
    </section>
  );
}
