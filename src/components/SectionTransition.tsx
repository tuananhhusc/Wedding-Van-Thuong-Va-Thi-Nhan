"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUpVariants, getEnterDistance } from "@/lib/motion";

type SectionTransitionProps = {
  children: React.ReactNode;
};

export default function SectionTransition({ children }: SectionTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const distance = getEnterDistance(Boolean(prefersReducedMotion), true);

  return (
    <motion.div
      variants={fadeUpVariants(distance)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
