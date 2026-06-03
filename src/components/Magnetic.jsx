import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Wraps any element and gives it a subtle magnetic pull toward the cursor.
// Disabled on touch / no-hover devices via the parent (pointer events still fine).
export default function Magnetic({ children, strength = 0.4, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 250, damping: 18, mass: 0.3 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - (r.left + r.width / 2);
    const my = e.clientY - (r.top + r.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.span
      ref={ref}
      className={`magnetic ${className}`}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );
}
