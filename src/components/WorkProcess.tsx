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
      <div className="relative w-full h-[350px] flex items-center justify-center perspective-[1000px]">
        {/* Massive Background Glow */}
        <div className="absolute w-[250px] h-[250px] bg-blue-500/40 rounded-full blur-[80px]" />
        
        {/* 3D Floating Glass Pills */}
        <motion.div 
          animate={{ y: [-15, 10, -15], rotateZ: [-2, 2, -2] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-10 left-[5%] px-6 py-3 rounded-full text-sm font-black text-white z-20 
          bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 border-t-white/60 border-l-white/60
          shadow-[inset_0_-5px_15px_rgba(0,0,0,0.5),_0_20px_40px_rgba(0,0,0,0.5)]"
        >
          Target Audience
        </motion.div>
        
        <motion.div 
          animate={{ y: [10, -15, 10], rotateZ: [2, -2, 2] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
          className="absolute bottom-12 left-[10%] px-6 py-3 rounded-full text-sm font-black text-white z-20 
          bg-gradient-to-br from-indigo-500/30 to-purple-500/10 backdrop-blur-xl border border-white/30 border-t-white/60 border-l-white/60
          shadow-[inset_0_-5px_15px_rgba(0,0,0,0.5),_0_20px_40px_rgba(0,0,0,0.5)]"
        >
          Competitor Audit
        </motion.div>
        
        <motion.div 
          animate={{ y: [-10, 15, -10], rotateZ: [-1, 3, -1] }} 
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
          className="absolute top-1/2 right-[5%] px-6 py-3 rounded-full text-sm font-black text-white z-20 
          bg-gradient-to-br from-cyan-500/30 to-blue-500/10 backdrop-blur-xl border border-white/30 border-t-white/60 border-l-white/60
          shadow-[inset_0_-5px_15px_rgba(0,0,0,0.5),_0_20px_40px_rgba(0,0,0,0.5)]"
        >
          Brand Identity
        </motion.div>

        {/* 3D Volumetric Center Sphere */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-28 h-28 rounded-full z-10 flex items-center justify-center
          bg-gradient-to-br from-blue-300 via-blue-600 to-indigo-900 border border-white/20
          shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.6),_inset_10px_10px_20px_rgba(255,255,255,0.8),_0_30px_60px_rgba(37,99,235,0.6)]"
        >
          <Search className="w-12 h-12 text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]" />
        </motion.div>
      </div>
    )
  },
  {
    id: "02",
    label: "UI/UX DESIGN",
    title: "Neuro-Design & Wireframing",
    description: "I design custom high-fidelity layouts based on consumer psychology. Every pixel is purposely placed to minimize friction and maximize your store's conversion rate.",
    graphic: (
      <div className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]">
        <div className="absolute w-[250px] h-[250px] bg-purple-600/40 rounded-full blur-[80px]" />
        
        {/* 3D Glass Morphic Interface Card */}
        <motion.div 
          initial={{ rotateX: 25, rotateY: -15, rotateZ: 5 }}
          animate={{ rotateX: [25, 20, 25], rotateY: [-15, -10, -15], y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[320px] h-[220px] rounded-3xl overflow-hidden flex flex-col z-10
          bg-gradient-to-br from-purple-500/20 to-fuchsia-500/5 backdrop-blur-2xl
          border border-white/20 border-t-white/50 border-l-white/50
          shadow-[inset_0_0_20px_rgba(255,255,255,0.1),_20px_30px_60px_rgba(0,0,0,0.6),_0_0_40px_rgba(168,85,247,0.4)]"
        >
          {/* 3D Header Bar */}
          <div className="h-10 bg-gradient-to-b from-white/10 to-transparent border-b border-white/10 flex items-center px-4 gap-2 shadow-sm">
            <div className="w-3 h-3 rounded-full bg-red-400 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)]" />
            <div className="w-3 h-3 rounded-full bg-green-400 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6)]" />
          </div>

          <div className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              {/* 3D Inner Icon Box */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center
              shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.4),_inset_2px_2px_6px_rgba(255,255,255,0.4),_0_10px_20px_rgba(0,0,0,0.4)]">
                 <Palette className="w-7 h-7 text-white drop-shadow-md" />
              </div>
              <div className="w-32 h-4 bg-white/20 rounded-full shadow-inner" />
            </div>
            {/* 3D Wireframe Block */}
            <div className="w-full h-20 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/20 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] flex items-center justify-center">
               <div className="w-1/2 h-2 rounded-full bg-white/20" />
            </div>
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
      <div className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]">
        <div className="absolute w-[250px] h-[250px] bg-green-500/40 rounded-full blur-[80px]" />
        
        {/* 3D Code Editor Plate */}
        <motion.div 
          initial={{ rotateX: 25, rotateY: 15, rotateZ: -5 }}
          animate={{ rotateX: [25, 30, 25], rotateY: [15, 20, 15], y: [10, -10, 10] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[340px] h-[240px] rounded-3xl overflow-hidden flex flex-col z-10
          bg-[#0d1117] border border-white/20 border-t-white/40 border-l-white/40
          shadow-[inset_0_0_20px_rgba(0,0,0,1),_20px_30px_60px_rgba(0,0,0,0.7),_0_0_40px_rgba(34,197,94,0.4)]"
        >
          <div className="h-10 bg-[#161b22] border-b border-white/10 flex items-center px-4 shadow-md">
             <Terminal className="w-4 h-4 text-green-400 mr-2 drop-shadow-[0_0_5px_rgba(74,222,128,1)]" />
             <span className="text-xs text-white/80 font-mono tracking-wider font-bold">engine.tsx</span>
          </div>
          <div className="p-6 flex flex-col gap-3 relative h-full">
             <div className="text-sm font-mono text-pink-500 drop-shadow-[0_0_2px_rgba(236,72,153,0.8)]">{'<ShopifyStore>'}</div>
             <div className="text-sm font-mono text-green-400 ml-6 flex items-center drop-shadow-[0_0_2px_rgba(74,222,128,0.8)]">
                {'<UIUX optimized={true} />'}
             </div>
             <div className="text-sm font-mono text-cyan-400 ml-6 drop-shadow-[0_0_2px_rgba(34,211,238,0.8)]">{'<Speed>ultra-fast</Speed>'}</div>
             <div className="text-sm font-mono text-pink-500 drop-shadow-[0_0_2px_rgba(236,72,153,0.8)]">{'</ShopifyStore>'}</div>
             
             {/* Neon glowing sphere inside code block */}
             <div className="absolute bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full blur-[40px] opacity-60" />
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
      <div className="relative w-full h-[350px] flex items-center justify-center perspective-[1200px]">
        <div className="absolute w-[250px] h-[250px] bg-orange-500/40 rounded-full blur-[80px]" />
        
        {/* 3D Dashboard Pod */}
        <motion.div 
          initial={{ rotateX: 10, rotateY: 0 }}
          animate={{ rotateX: [10, 5, 10], y: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[300px] h-[220px] rounded-3xl overflow-hidden flex flex-col z-10 p-6
          bg-gradient-to-br from-[#111] to-[#222] backdrop-blur-2xl
          border border-white/20 border-t-white/50 border-l-white/50
          shadow-[inset_0_0_30px_rgba(0,0,0,0.8),_0_40px_80px_rgba(0,0,0,0.8),_0_0_50px_rgba(249,115,22,0.3)]"
        >
          <div className="flex items-center justify-between mb-8">
             <div className="flex flex-col gap-1">
               <span className="text-xs text-white/50 font-bold uppercase tracking-wider">Total Revenue</span>
               <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 drop-shadow-[0_2px_10px_rgba(249,115,22,0.8)]">
                 $145,200
               </span>
             </div>
             
             {/* 3D Icon button */}
             <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center
             shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.4),_inset_2px_2px_5px_rgba(255,255,255,0.4),_0_10px_20px_rgba(249,115,22,0.5)]">
                <BarChart3 className="w-6 h-6 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]" />
             </div>
          </div>
          
          {/* 3D Extruded Bar Chart lines */}
          <div className="flex items-end gap-3 h-20 w-full pt-2">
            {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-t-md border-t border-white/40 border-l border-white/20
                shadow-[inset_-1px_0_5px_rgba(0,0,0,0.4),_0_10px_20px_rgba(249,115,22,0.3)]" 
                style={{ 
                   height: `${h}%`,
                   background: `linear-gradient(180deg, hsl(30, 100%, ${50 + (i*4)}%), hsl(20, 100%, 40%))`
                }} 
              />
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
