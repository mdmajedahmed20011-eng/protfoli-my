import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface ParticlesProps {
  count?: number;
  className?: string;
}

export const Particles = ({ count = 50, className = '' }: ParticlesProps) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

interface GridPatternProps {
  className?: string;
}

export const GridPattern = ({ className = '' }: GridPatternProps) => {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--foreground) / 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, hsl(var(--foreground) / 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }}
    />
  );
};

interface ScanLineProps {
  className?: string;
}

export const ScanLine = ({ className = '' }: ScanLineProps) => {
  return (
    <motion.div
      className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent ${className}`}
      initial={{ top: 0, opacity: 0 }}
      animate={{
        top: ['0%', '100%'],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

interface MouseFollowerProps {
  className?: string;
}

export const MouseGlow = ({ className = '' }: MouseFollowerProps) => {
  return (
    <motion.div
      className={`fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0 ${className}`}
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
      }}
      animate={{
        x: typeof window !== 'undefined' ? window.innerWidth / 2 - 250 : 0,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 - 250 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 30,
      }}
    />
  );
};
