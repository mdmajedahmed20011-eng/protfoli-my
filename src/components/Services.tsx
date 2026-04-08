import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Target, 
  Zap, 
  TrendingUp, 
  Award,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { AnimatedSection } from "./animations/AnimatedSection";

const services = [
  {
    id: "01",
    title: "Conversion Alchemy",
    subtitle: "UI/UX that prints money",
    description: "I don't just build websites. I engineer psychological journeys. Every pixel, button, and color choice is aggressively optimized to turn casual browsers into rabid buyers. We sell experiences, not just products.",
    icon: Target,
    color: "from-blue-600 to-cyan-400",
    glow: "bg-cyan-500/30",
    features: ["Neuro-Design", "Frictionless Checkouts", "Mobile-First"]
  },
  {
    id: "02",
    title: "Performance Engineering",
    subtitle: "Because patience is dead",
    description: "A 1-second delay costs you 7% in conversions. I architect Shopify stores that load at lightning speed. Zero bloat. Flawless code. Instant gratification for your buyers.",
    icon: Zap,
    color: "from-amber-500 to-orange-400",
    glow: "bg-amber-500/30",
    features: ["Sub-2s Loads", "Core Web Vitals", "Clean Code"]
  },
  {
    id: "03",
    title: "AOV Maximization",
    subtitle: "Ethically stealing more revenue",
    description: "Traffic is too expensive to waste. I build strategic up-sells, cross-sells, and post-purchase funnels that maximize the Lifetime Value (LTV) and Average Order Value of every single customer.",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-400",
    glow: "bg-green-500/30",
    features: ["Strategic Upsells", "Sales Funnels", "Cart Optimization"]
  },
  {
    id: "04",
    title: "Premium Positioning",
    subtitle: "Charge 3x more effortlessly",
    description: "Stand out in a sea of generic dropshippers. I craft premium, hyper-trustworthy brand aesthetics that elevate your perceived value, allowing you to dominate your market.",
    icon: Award,
    color: "from-purple-600 to-pink-500",
    glow: "bg-purple-500/30",
    features: ["High-End Aesthetics", "Trust Building", "Custom Assets"]
  }
];

export const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>The Growth Engine</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold mt-4 mb-6 leading-none max-w-4xl tracking-tight">
            Not just "Services". <br />
            <span className="gradient-text italic">Business Transformations.</span>
          </h2>
        </AnimatedSection>

        {/* Interactive Split Layout for Desktop */}
        <div className="hidden lg:flex gap-16 items-center">
          {/* Left Column: Interactive List */}
          <div className="w-1/2 flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = index === activeIdx;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`group relative cursor-pointer p-8 rounded-3xl transition-all duration-500 border overflow-hidden ${
                    isActive 
                      ? 'bg-card/80 border-primary/30 shadow-2xl scale-[1.02]' 
                      : 'bg-transparent border-transparent hover:bg-card/30'
                  }`}
                >
                  {/* Subtle active glow */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-50"
                      initial={false}
                      transition={{ duration: 0.5, ease: "anticipate" }}
                    />
                  )}
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">
                        {service.id} — {service.subtitle}
                      </div>
                      <h3 className={`text-3xl font-display font-bold transition-colors duration-300 ${
                        isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'border-primary bg-primary text-primary-foreground' : 'border-border text-muted-foreground group-hover:border-foreground group-hover:text-foreground'
                    }`}>
                      <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${isActive ? '-rotate-45' : ''}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Showcase Presentation */}
          <div className="w-1/2 h-[600px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.95 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-card border border-border/50 shadow-2xl overflow-hidden flex flex-col p-12"
              >
                {/* Dynamic Background Aurora Effect */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-40 mix-blend-screen transition-colors duration-1000 ${activeService.glow}`} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Floating Icon */}
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-lg mb-auto`}>
                    <activeService.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="mt-auto">
                    <h3 className="text-4xl font-display font-bold mb-6 text-white text-glow">
                      {activeService.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                      {activeService.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {activeService.features.map(feature => (
                        <span key={feature} className="px-4 py-2 rounded-full bg-background/50 backdrop-blur-md border border-border text-sm font-semibold text-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout: Stacked Cards */}
        <div className="lg:hidden flex flex-col gap-8">
          {services.map((service) => (
            <div key={service.id} className="relative rounded-[2rem] bg-card border border-border/50 overflow-hidden p-8">
              <div className={`absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px] opacity-30 ${service.glow}`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-8`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  {service.id} — {service.subtitle}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {service.features.map(feature => (
                     <span key={feature} className="px-3 py-1.5 rounded-full bg-secondary/50 text-xs font-semibold text-foreground">
                       {feature}
                     </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
