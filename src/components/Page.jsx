import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

const variants = {
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  enter: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -16,
    filter: "blur(6px)",
    transition: { duration: 0.32, ease: [0.7, 0, 0.84, 0] },
  },
};

export default function Page({ children }) {
  const lenis = useLenis();
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [lenis]);
  return (
    <motion.div variants={variants} initial="initial" animate="enter" exit="exit">
      {children}
    </motion.div>
  );
}
