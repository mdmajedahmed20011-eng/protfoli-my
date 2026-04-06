import { MessageCircle, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const processSteps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We discuss your vision, goals, and requirements to understand exactly what you need for your Shopify store.",
  },
  {
    step: "02",
    icon: Palette,
    title: "Design & Planning",
    description: "I create a custom design mockup and detailed plan tailored to your brand identity and target audience.",
  },
  {
    step: "03",
    icon: Code,
    title: "Development",
    description: "Your store is built with clean code, optimized for speed, SEO, and conversions with all features integrated.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "After thorough testing, your store goes live. I provide training and ongoing support to ensure success.",
  },
];

export const WorkProcess = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="process" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">How It Works</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Client{" "}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A streamlined 4-step process to transform your e-commerce vision into a 
            high-converting Shopify store.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
          {processSteps.map((item, index) => (
            <StaggerItem key={item.step}>
              <motion.div
                className="relative bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all h-full group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <div className="px-4 py-1 bg-primary rounded-full">
                    <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                  </div>
                </div>

                {/* Icon */}
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mt-2 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>

                {/* Connector line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg group hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
};
