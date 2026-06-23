import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-brand-gold to-primary origin-left z-[100]"
      style={{ scaleX }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary blur-sm opacity-70" />
    </motion.div>
  );
};
