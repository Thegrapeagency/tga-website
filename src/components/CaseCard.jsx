import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CaseCard({ c, index = 0 }) {
  const cover = c.images && c.images[0];
  const cls = ["tile", cover ? "tile--photo" : "tile--solid", index % 2 ? "tile--alt" : ""].join(" ");
  return (
    <motion.div
      className="tile-wrap"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/werk/${c.slug}`} className={cls}>
        {cover && <img className="tile__img" src={cover} alt={c.brand} loading="lazy" />}
        {!cover && <span className="tile__ghost" aria-hidden="true">{c.brand}</span>}
        <span className="tile__shade" aria-hidden="true" />
        <div className="tile__body">
          <span className="tile__tag">{c.tag}</span>
          <h3 className="tile__brand">{c.brand}</h3>
          <p className="tile__line">{c.oneliner}</p>
          <span className="tile__cta">Bekijk case <span aria-hidden="true">→</span></span>
        </div>
      </Link>
    </motion.div>
  );
}
