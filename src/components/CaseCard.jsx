import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CaseCard({ c, index = 0 }) {
  const cover = c.images && c.images[0];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      style={{ height: "100%" }}
    >
      <Link to={`/werk/${c.slug}`} className={`case-card ${cover ? "case-card--img" : ""}`}>
        {cover && <span className="case-card__bg" style={{ backgroundImage: `url(${cover})` }} aria-hidden="true" />}
        <span className="case-card__tag">{c.tag}</span>
        <span className="case-card__brand">{c.brand}</span>
        <span className="case-card__title">{c.oneliner}</span>
        <span className="case-card__foot">
          <span className="case-card__metric">
            <b>{c.headline.value}</b>
            <span>{c.headline.label}</span>
          </span>
          <span className="case-card__arrow">↗</span>
        </span>
      </Link>
    </motion.div>
  );
}
