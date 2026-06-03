import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

// Reusable scroll-reveal. Fades + lifts (or slides) children into view once.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  x = 0,
  blur = true,
  className = "",
  once = true,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, x, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
