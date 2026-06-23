import { Award, Users, Clock, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, FloatingElement } from "./animations/AnimatedSection";
import { useCounter } from "@/hooks/useScrollReveal";
import majedPhoto from "@/assets/majed-photo.webp";

const stats = [
  { icon: Award, value: 3, suffix: "+", label: "Years Experience" },
  { icon: Users, value: 25, suffix: "+", label: "Shopify Stores" },
  { icon: Clock, value: 25, suffix: "+", label: "FB Ads Campaigns" },
  { icon: Target, value: 98, suffix: "%", label: "Client Retention" },
];

const skills = [
  "Shopify Theme Development",
  "Liquid Programming",
  "Facebook Ads",
  "Conversion Optimization",
  "Facebook Pixel & CAPI",
  "Speed Optimization",
  "SEO Best Practices",
  "Retargeting Campaigns",
];

const StatCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div ref={ref} className="text-2xl font-display font-bold gradient-text">
      {count}{suffix}
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Background gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 rounded-3xl"
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                {/* Main card */}
                <div className="absolute inset-4 bg-card rounded-2xl border border-border overflow-hidden">
                  {/* Profile section */}
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                    {/* Avatar */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-[3px]">
                        <img 
                          src={majedPhoto} 
                          alt="Majed Ahmed" 
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      {/* Status indicator */}
                      <motion.div 
                        className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <h3 className="text-2xl font-display font-bold mb-1">Majed Ahmed</h3>
                    <p className="text-primary font-medium mb-6">Shopify & Facebook Ads Expert</p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-3 gap-4 w-full">
                      {[
                        { value: "25+", label: "Stores" },
                        { value: "25+", label: "FB Ads" },
                        { value: "98%", label: "Success" },
                      ].map((stat, i) => (
                        <motion.div 
                          key={stat.label}
                          className="text-center p-3 bg-secondary/50 rounded-xl"
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="text-lg font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <FloatingElement 
                  className="absolute -top-2 -right-2"
                  amplitude={10}
                  duration={4}
                >
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg">
                    Shopify Partner
                  </div>
                </FloatingElement>
                <FloatingElement 
                  className="absolute -bottom-2 -left-2"
                  amplitude={12}
                  duration={5}
                  delay={1}
                >
                  <div className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium shadow-lg">
                    Certified Expert ✓
                  </div>
                </FloatingElement>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Content */}
          <AnimatedSection direction="right" delay={0.2}>
            <span className="badge-primary mb-6">About Me</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6">
              Crafting Digital{" "}
              <span className="gradient-text">Excellence</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                I am Majed Ahmed, a passionate Shopify developer and Facebook Ads specialist 
                dedicated to helping brands succeed in the e-commerce world.
              </p>
              <p>
                With over 3 years of experience, 25+ Shopify stores built, and 25+ successful 
                Facebook Ads campaigns, I help businesses transform their online presence 
                and achieve remarkable growth through data-driven strategies.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-10">
              <h4 className="font-semibold mb-4 text-foreground">Core Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <motion.div 
                    className="text-center p-4 bg-card rounded-2xl border border-border"
                    whileHover={{ y: -4, borderColor: 'hsl(var(--primary) / 0.5)' }}
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 text-primary font-medium group"
              whileHover={{ x: 5 }}
            >
              <span className="link-underline">Let's work together</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
