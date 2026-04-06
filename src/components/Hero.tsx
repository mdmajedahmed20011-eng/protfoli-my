import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Lightweight CSS-only background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Animated gradient orbs */}
        <div 
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 breathe"
          style={{ background: 'hsl(var(--primary))', filter: 'blur(140px)' }}
        />
        <div 
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none opacity-20 breathe"
          style={{ background: 'hsl(var(--accent))', filter: 'blur(120px)', animationDelay: '2s' }}
        />
        
        {/* Hero gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-24">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Urgency Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm shadow-lg shadow-primary/5 shimmer">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm text-primary font-bold tracking-wide uppercase">🔥 Limited Slots — Only 3 Available This Month</span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero-title mb-6"
            variants={itemVariants}
          >
            <span className="block mb-2">Stop Losing Sales.</span>
            <span className="block">
              Get a Shopify Store That{" "}
              <motion.span
                className="gradient-text text-glow relative inline-block"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Converts
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <motion.path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="hero-subtitle max-w-2xl mx-auto mb-8"
            variants={itemVariants}
          >
            Most Shopify stores fail because of poor design. I build{" "}
            <span className="text-foreground font-semibold">high-converting, premium stores</span>{" "}
            that turn visitors into paying customers.
          </motion.p>

          {/* Quick Value Props */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
            variants={itemVariants}
          >
            {[
              "Done in 7-14 Days",
              "Conversion Optimized", 
              "100% Satisfaction Guaranteed"
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 300 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </motion.div>
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="btn-primary text-lg px-12 py-8 group relative overflow-hidden shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-shadow pulse-glow"
              >
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                Get Your Store Built
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {/* Shimmer overlay */}
                <span className="absolute inset-0 -translate-x-full animate-[ctaShimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Button>
            </motion.div>
            <motion.button
              onClick={() => scrollToSection("#pricing")}
              className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              View Pricing →
            </motion.button>
          </motion.div>

          {/* Social Proof with Animated Counters */}
          <motion.div
            className="mt-20"
            variants={itemVariants}
          >
            <motion.p
              className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Trusted by 30+ brands worldwide
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {[
                { value: 50, suffix: "+", label: "Shopify Stores" },
                { value: 50, suffix: "+", label: "Facebook Ads Campaigns" },
                { value: 5, suffix: "★", label: "Average Rating" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center gap-2 group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.15, duration: 0.5 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-4xl sm:text-5xl font-display font-bold gradient-text counter-value">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes ctaShimmer {
          0% { transform: translateX(-100%); }
          50%, 100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
