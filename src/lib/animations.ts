/**
 * Shared Framer Motion animation variants
 * Used across multiple components for consistent animations
 */

export const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export const slideInVariants = (direction: 'left' | 'right' = 'left') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -20 : 20 },
  show: { opacity: 1, x: 0 },
});
