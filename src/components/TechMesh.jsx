import { motion, useReducedMotion } from "framer-motion";

// Subtle "tech" line-mesh backdrop for dark surfaces: a faint drifting grid,
// sand glow-nodes, and a perspective floor at the bottom. Brand-warm, not neon.
// `intensity` (0..1) lets callers scale it with an open/drag progress value.
export default function TechMesh({ className = "", floor = true }) {
  const reduce = useReducedMotion();
  return (
    <div className={`techmesh ${className}`} aria-hidden="true">
      <motion.div
        className="techmesh__grid"
        animate={reduce ? {} : { backgroundPositionY: ["0px", "40px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <div className="techmesh__nodes" />
      {floor && (
        <div className="techmesh__floor">
          <motion.div
            className="techmesh__floor-grid"
            animate={reduce ? {} : { backgroundPositionY: ["0px", "60px"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
}
