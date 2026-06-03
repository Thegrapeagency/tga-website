import { motion } from "framer-motion";

// Slow-drifting aurora: three soft brand-green/sand blobs over a deep
// green base. Lives behind dark, cinematic sections. Decorative only.
export default function Aurora({ className = "" }) {
  return (
    <div className={`aurora ${className}`} aria-hidden="true">
      <motion.span
        className="aurora__blob aurora__blob--a"
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="aurora__blob aurora__blob--b"
        animate={{ x: [0, -50, 40, 0], y: [0, 30, -40, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="aurora__blob aurora__blob--c"
        animate={{ x: [0, 30, -50, 0], y: [0, -30, -10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 38, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
