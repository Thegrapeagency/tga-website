import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

// Full-screen image viewer with prev/next + keyboard control.
// `index` is null when closed.
export default function Lightbox({ images = [], index, onClose, onIndex, alt = "" }) {
  const open = index !== null && index >= 0;

  const go = useCallback(
    (dir) => {
      if (!open) return;
      const next = (index + dir + images.length) % images.length;
      onIndex(next);
    },
    [open, index, images.length, onIndex]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-lenis-prevent
        >
          <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
          {images.length > 1 && (
            <>
              <button
                className="lightbox__nav lightbox__nav--prev"
                onClick={(e) => { e.stopPropagation(); go(-1); }}
                aria-label="Previous"
              >‹</button>
              <button
                className="lightbox__nav lightbox__nav--next"
                onClick={(e) => { e.stopPropagation(); go(1); }}
                aria-label="Next"
              >›</button>
            </>
          )}
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${alt} ${index + 1}`}
              className="lightbox__img"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>
          {images.length > 1 && (
            <div className="lightbox__count">{index + 1} / {images.length}</div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
