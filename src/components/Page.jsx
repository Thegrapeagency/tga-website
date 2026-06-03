import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(6px)",
    transition: { duration: 0.3, ease: [0.7, 0, 0.84, 0] },
  },
};

export default function Page({ children }) {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <motion.div variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}
