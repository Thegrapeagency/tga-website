import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Scroll-reactive line grid. Three layers drift at different rates and
// opposite directions (async) as you scroll, via background-position so it
// tiles infinitely. variant: "light" (on cream/sand) | "dark" (on ink/green).
export default function ScrollGrid({ variant = "dark", className = "" }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const k = reduce ? 0 : 1;
  const y1 = useTransform(scrollY, (v) => `${v * 0.12 * k}px`);
  const y2 = useTransform(scrollY, (v) => `${v * -0.22 * k}px`);
  const y3 = useTransform(scrollY, (v) => `${v * 0.4 * k}px`);

  return (
    <div className={`scrollgrid scrollgrid--${variant} ${className}`} aria-hidden="true">
      <motion.div className="scrollgrid__l scrollgrid__l1" style={{ backgroundPositionY: y1 }} />
      <motion.div className="scrollgrid__l scrollgrid__l2" style={{ backgroundPositionY: y2 }} />
      <motion.div className="scrollgrid__l scrollgrid__l3" style={{ backgroundPositionY: y3 }} />
    </div>
  );
}
