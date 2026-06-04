import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang, pick } from "../i18n.jsx";
import { setOpenOrigin } from "../lib/openOrigin.js";

// span: "feat" | "wide" | "tall" | undefined  -> bento sizing
export default function CaseCard({ c, index = 0, span }) {
  const { lang } = useLang();
  const location = useLocation();
  const cover = c.images && c.images[0];
  const feat = span === "feat";
  const wrapCls = ["tile-wrap", span ? `tile-wrap--${span}` : ""].join(" ");
  const cls = ["tile", cover ? "tile--photo" : "tile--solid", index % 2 ? "tile--alt" : ""].join(" ");

  return (
    <motion.div
      className={wrapCls}
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/werk/${c.slug}`}
        state={{ background: location }}
        className={cls}
        data-tile={c.slug}
        onClick={(e) => setOpenOrigin(c.slug, e.currentTarget)}
      >
        <div className="tile__media">
          {cover ? (
            <img className="tile__img" src={cover} alt={c.brand} loading="lazy" />
          ) : (
            <span className="tile__ghost" aria-hidden="true">{c.brand}</span>
          )}
        </div>
        <span className="tile__shade" aria-hidden="true" />

        <div className="tile__body">
          <span className="tile__tag">{pick(c.tag, lang)}</span>
          <h3 className="tile__brand">{c.brand}</h3>
          <p className="tile__line">{pick(c.oneliner, lang)}</p>
          <div className="tile__foot">
            <span className="tile__cta">
              {lang === "en" ? "View case" : "Bekijk case"} <span aria-hidden="true">→</span>
            </span>
            {feat && c.headline && (
              <span className="tile__metric">
                <b>{c.headline.value}</b> {pick(c.headline.label, lang)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
