"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: prefersReducedMotion ? 120 : 180,
    damping: prefersReducedMotion ? 28 : 22,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[220] h-[2px] origin-left bg-gradient-to-r from-gold-muted via-gold to-gold-muted"
      style={{ scaleX }}
    />
  );
}
