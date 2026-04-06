import { useState, useEffect } from 'react';

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center transition-opacity duration-300"
      style={{ opacity: isLoading ? 1 : 0 }}
    >
      {/* Background gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
        }}
      />

      {/* Logo and loading content */}
      <div className="relative flex flex-col items-center animate-fade-in">
        {/* Logo */}
        <span className="text-4xl font-display font-bold mb-6">
          Majed<span className="text-primary">.</span>
        </span>

        {/* Loading bar */}
        <div className="w-40 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-brand-gold rounded-full animate-[loading_0.4s_ease-out_forwards]"
          />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};
