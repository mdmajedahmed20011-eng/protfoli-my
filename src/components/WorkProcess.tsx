import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AnimatedSection } from "./animations/AnimatedSection";
import { Button } from "./ui/button";
import { ArrowRight, Terminal, BarChart3, Palette, Search } from "lucide-react";

const processSteps = [
  {
    id: "01",
    label: "DISCOVERY",
    title: "Idea & Market Analysis",
    description: "We don't just build blindly. We analyze your market, study your competitors, and reverse-engineer what's already working to craft a bulletproof strategy.",
    graphic: (
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute w-[250px] h-[250px] bg-blue-600/30 rounded-full blur-[80px]" />
        
        {/* Floating Pills */}
        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 left-[10%] px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl text-sm font-bold text-white z-20">
          Target Audience
        </motion.div>
        <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-12 left-[15%] px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl text-sm font-bold text-white z-20">
          Competitor Audit
        </motion.div>
        <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 right-[10%] px-5 py-2.5 bg-black/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl text-sm font-bold text-white z-20">
          Brand Positioning
        </motion.div>

        {/* Center Orb */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_50px_rgba(56,189,248,0.5)] z-10 border border-white/20">
          <Search className="w-10 h-10 text-white" />
        </div>
      </div>
    )
  },
  {
    id: "02",
    label: "UI/UX DESIGN",
    title: "Neuro-Design & Wireframing",
    description: "I design custom high-fidelity layouts based on consumer psychology. Every pixel is purposely placed to minimize friction and maximize your store's conversion rate.",
    graphic: (
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute w-[250px] h-[250px] bg-purple-600/30 rounded-full blur-[80px]" />
        
        {/* Simulated Web Editor Graphic */}
        <motion.div 
          initial={{ rotateX: 20, rotateY: -10 }}
          animate={{ rotateX: [20, 15, 20], rotateY: [-10, -5, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[300px] h-[200px] bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(168,85,247,0.3)] overflow-hidden flex flex-col z-10"
        >
          {/* Mock Header */}
          <div className="h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          {/* Mock Body */}
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                 <Palette className="w-5 h-5 text-purple-400" />
              </div>
              <div className="w-32 h-3 bg-white/10 rounded-full" />
            </div>
            <div className="w-full h-24 bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/5 mt-2" />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: "03",
    label: "DEVELOPMENT",
    title: "High-Performance Coding",
    description: "Bringing the design to life with clean, bloat-free code. Lightning-fast loading times, seamless third-party app integration, and fully responsive across all devices.",
    graphic: (
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute w-[250px] h-[250px] bg-green-600/30 rounded-full blur-[80px]" />
        
        {/* Simulated Code Editor Graphic */}
        <motion.div 
          initial={{ rotateX: 20, rotateY: 10 }}
          animate={{ rotateX: [20, 25, 20], rotateY: [10, 15, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[320px] h-[220px] bg-[#0d1117] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(34,197,94,0.2)] overflow-hidden flex flex-col z-10"
        >
          <div className="h-8 border-b border-white/10 flex items-center px-4 bg-white/5">
             <Terminal className="w-4 h-4 text-muted-foreground mr-2" />
             <span className="text-[10px] text-muted-foreground tracking-wider font-mono">theme.liquid</span>
          </div>
          <div className="p-5 flex flex-col gap-2 relative">
             <div className="text-[11px] font-mono text-pink-400">{'<div className="product-grid">'}</div>
             <div className="text-[11px] font-mono text-green-400 ml-4">{'<ProductCard />'}</div>
             <div className="text-[11px] font-mono text-green-400 ml-4">{'<FastCheckout />'}</div>
             <div className="text-[11px] font-mono text-pink-400">{'</div>'}</div>
             <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500/20 rounded-full blur-xl" />
          </div>
        </motion.div>
      </div>
    )
  },
  {
    id: "04",
    label: "LAUNCH",
    title: "Launch & Revenue Scaling",
    description: "After rigorous A/B testing and quality assurance, we hit launch. But it doesn't end there—I monitor analytics closely to optimize your funnels for maximum AOV.",
    graphic: (
      <div className="relative w-full h-[300px] flex items-center justify-center">
        <div className="absolute w-[250px] h-[250px] bg-orange-600/30 rounded-full blur-[80px]" />
        
        {/* Simulated Dashboard Graphic */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[280px] h-[200px] bg-[#111] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.3)] overflow-hidden flex flex-col z-10 p-5"
        >
          <div className="flex items-center justify-between mb-6">
             <div className="flex flex-col gap-1">
               <span className="text-[10px] text-muted-foreground font-semibold uppercase">Total Revenue</span>
               <span className="text-xl font-display font-bold text-white">$145,200</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-400" />
             </div>
          </div>
          <div className="flex items-end gap-2 h-16 w-full pt-4">
            {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-orange-500 to-amber-300 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </motion.div>
      </div>
    )
  }
];

export const WorkProcess = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-32 bg-background overflow-hidden" ref={containerRef}>
      <div className="container-custom relative z-10">
        
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-24">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Our Process</div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
            Our Strategy To Get <br />
            <span className="text-white">You Sales With Design</span>
          </h2>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Vertical Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-border/50 -translate-x-1/2" />
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-purple-500 to-transparent -translate-x-1/2 origin-top"
            style={{ scaleY: lineHeight }}
          />

          <div className="flex flex-col gap-24 md:gap-32">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={step.id} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Central Node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background border border-primary z-20 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                      {step.id}
                    </div>
                  </div>

                  {/* Left Side Container */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end md:pr-20' : 'md:justify-start md:pl-20 md:order-last'}`}>
                    {/* Content Block */}
                    <div className="max-w-md text-center md:text-left">
                      <div className="md:hidden w-12 h-12 mx-auto rounded-full bg-primary/20 border border-primary flex items-center justify-center text-sm font-bold text-primary mb-6 shadow-[0_0_15px_rgba(var(--primary),0.5)]">
                        {step.id}
                      </div>

                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary uppercase text-[10px] font-bold tracking-widest rounded mb-4">
                        {step.label}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Side Container */}
                  <div className={`w-full md:w-1/2 mt-12 md:mt-0 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
                    {step.graphic}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Global CTA */}
        <AnimatedSection className="mt-32 flex justify-center">
           <Button 
             size="lg" 
             className="rounded-full px-10 py-6 text-lg font-bold shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all bg-primary text-primary-foreground"
             onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
           >
             Discuss Your Project
             <ArrowRight className="ml-2 w-5 h-5" />
           </Button>
        </AnimatedSection>
        
      </div>
    </section>
  );
};
