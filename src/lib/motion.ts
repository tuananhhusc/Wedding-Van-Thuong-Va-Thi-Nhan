import type { Variants } from "framer-motion";

export const motionTokens = {
  duration: {
    fast: 0.35,
    base: 0.6,
    slow: 0.9,
  },
  easing: {
    soft: [0.22, 1, 0.36, 1] as const,
    smooth: [0.33, 1, 0.68, 1] as const,
  },
};

export function getEnterDistance(isReducedMotion: boolean, mobile = false): number {
  if (isReducedMotion) return 0;
  return mobile ? 16 : 28;
}

export function fadeUpVariants(distance: number): Variants {
  return {
    hidden: { opacity: 0, y: distance },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.duration.base, ease: motionTokens.easing.soft },
    },
  };
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const scaleInVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.easing.soft },
  },
};
