import { 
  Palette, 
  Zap, 
  Settings, 
  Rocket, 
  Code, 
  BarChart3,
  ArrowUpRight,
  Megaphone
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Custom Store Design",
    description: "Unique, brand-aligned designs that stand out from the competition and create memorable shopping experiences.",
    features: ["Brand Identity", "UI/UX Design", "Mobile-First"],
  },
  {
    icon: Code,
    title: "Theme Development",
    description: "Custom Shopify theme development from scratch or complete customization of existing themes.",
    features: ["Liquid/HTML/CSS", "Custom Sections", "Performance"],
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    description: "Lightning-fast load times that keep customers engaged and boost your search rankings.",
    features: ["Core Web Vitals", "Image Optimization", "Code Cleanup"],
  },
  {
    icon: Settings,
    title: "App Integration",
    description: "Seamless integration of essential Shopify apps for payments, shipping, marketing, and more.",
    features: ["Payment Gateways", "Marketing Tools", "Analytics"],
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    description: "Data-driven improvements to maximize your store's conversion rate and average order value.",
    features: ["A/B Testing", "Checkout Optimization", "Upsells"],
  },
  {
    icon: Rocket,
    title: "Store Migration",
    description: "Smooth migration from any platform to Shopify with zero downtime and complete data transfer.",
    features: ["Data Migration", "SEO Preservation", "Zero Downtime"],
  },
  {
    icon: Megaphone,
    title: "Facebook Ads",
    description: "Strategic Facebook & Instagram advertising to drive targeted traffic and maximize your store's revenue.",
    features: ["Pixel Setup", "Retargeting", "Conversion Tracking"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-primary mb-6">Services</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Everything You Need To{" "}
            <span className="gradient-text">Succeed Online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to launch and beyond, I provide comprehensive Shopify services 
            to help your brand thrive in the digital marketplace.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-500 premium-card h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <motion.div 
                  className="flex items-center text-primary font-medium group/link cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  <span className="link-underline">Learn more</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </motion.div>

                {/* Corner glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <p className="text-muted-foreground">
            Need something specific?{" "}
            <a href="#contact" className="text-primary font-medium link-underline">
              Let's discuss your requirements
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
