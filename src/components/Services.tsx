import { 
  Target, 
  Zap, 
  TrendingUp, 
  Award,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const services = [
  {
    icon: Target,
    title: "Conversion-First UI/UX Design",
    description: "I don't just build websites; I engineer psychological journeys. Every button, color, and layout choice is data-driven to maximize your conversion rate and turn visitors into eager buyers.",
    features: ["Consumer Psychology", "Frictionless Checkout", "Mobile-First"],
    className: "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-card/50",
    glowColor: "bg-primary/20"
  },
  {
    icon: Zap,
    title: "Performance Engineering",
    description: "A 1-second delay costs you 7% of conversions. I optimize your store's architecture to load at lightning speed, keeping buyers glued to their screens.",
    features: ["Core Web Vitals", "Sub-2s Loads"],
    className: "col-span-1 bg-card",
    glowColor: "bg-amber-500/20"
  },
  {
    icon: TrendingUp,
    title: "AOV Maximization Systems",
    description: "Traffic is expensive. I implement strategic upsells, cross-sells, and post-purchase funnels to legally steal maximum revenue out of every single customer interaction.",
    features: ["Strategic Upsells", "Sales Funnels"],
    className: "col-span-1 bg-card",
    glowColor: "bg-green-500/20"
  },
  {
    icon: Award,
    title: "Premium Brand Positioning",
    description: "Stand out in a crowded, noisy market. I craft premium, highly-trustworthy aesthetics that elevate your brand's perceived value, allowing you to charge more and sell easier.",
    features: ["High-End Aesthetics", "Trust Building Elements", "Custom Assets"],
    className: "md:col-span-2 lg:col-span-2 bg-gradient-to-tr from-card to-card/50",
    glowColor: "bg-purple-500/20"
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden bg-background">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 outline-none border-none">
          <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        </div>
        <div className="absolute bottom-0 left-1/4 outline-none border-none">
          <div className="w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Not Just Another Developer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
            I Build Stores Designed to <span className="gradient-text">Print Money</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Forget about generic templates and "app integrations." 
            My entire process is reverse-engineered focused around one single metric: <strong className="text-foreground">Scaling your Revenue.</strong>
          </p>
        </AnimatedSection>

        {/* Bento Grid layout */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
          {services.map((service, index) => (
            <StaggerItem key={index} className={service.className}>
              <motion.div
                className="group relative rounded-3xl p-8 sm:p-10 border border-border hover:border-primary/50 transition-all duration-500 h-full overflow-hidden flex flex-col justify-between shadow-lg"
                whileHover={{ y: -5 }}
              >
                {/* Background Interactive Glow */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${service.glowColor}`} />

                <div>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px] mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Bottom row: Features & CTA */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 bg-background border border-border/50 rounded-full text-xs font-semibold text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-colors duration-300 shadow-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Aesthetic Line + Link */}
                  <div className="pt-6 border-t border-border/50 flex items-center justify-between group-hover:border-primary/30 transition-colors">
                    <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                      Discover How
                    </span>
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
