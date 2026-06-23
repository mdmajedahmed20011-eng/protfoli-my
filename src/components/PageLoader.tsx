import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // We want the preloader to hit 100% over 1.5 seconds.
    const duration = 1500;
    const intervalTime = 20;
    const ticks = duration / intervalTime;
    let currentTick = 0;

    const timer = setInterval(() => {
      currentTick++;
      // create a slight ease out effect mathematically
      const progressFraction = currentTick / ticks;
      const easedProgress = 1 - Math.pow(1 - progressFraction, 3);
      
      const p = Math.min(Math.floor(easedProgress * 100), 100);
      setProgress(p);

      if (currentTick >= ticks) {
        clearInterval(timer);
        // Wait a slight beat at 100% before triggering unmount
        setTimeout(() => {
          setIsLoading(false);
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
           initial={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
           className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
            }}
          />

          <motion.div 
             className="relative z-10 flex flex-col items-center"
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ duration: 0.5 }}
          >
            {/* The Count Up Number */}
            <div className="flex items-end overflow-hidden h-28 mb-4">
              <span className="text-[6rem] md:text-[8rem] font-display font-black leading-none text-foreground tracking-tighter">
                {progress}
              </span>
              <span className="text-3xl md:text-5xl font-display font-bold text-primary mb-3 md:mb-5 ml-1">%</span>
            </div>
            
            {/* Premium Branding */}
            <div className="text-sm tracking-[0.3em] md:tracking-[0.5em] uppercase text-muted-foreground font-semibold">
              Majed Ahmed
            </div>
            
            {/* Progress line indicator (micro-interaction) */}
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent mt-8" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
