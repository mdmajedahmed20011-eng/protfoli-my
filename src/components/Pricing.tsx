import { Check, Star, ArrowRight, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, MagneticButton } from "./animations/AnimatedSection";

const pricingPlans = [
  {
    name: "Basic Starter",
    price: "$200",
    priceNote: "/project",
    description: "Perfect for new brands launching their first Shopify store.",
    features: [
      "Complete Shopify store setup & configuration",
      "Clean, mobile-responsive theme customization",
      "Product upload & optimization (up to 20 products)",
      "Essential pages (Home, About, Contact, FAQ)",
      "Payment gateway & shipping setup",
      "Basic speed optimization for fast loading",
      "3 days post-delivery support included",
    ],
    paymentNote: "30% upfront payment required",
    buttonText: "Start with Basic",
    popular: false,
    highlights: [],
  },
  {
    name: "Growth Plan",
    price: "$250",
    priceNote: "/project",
    description: "For growing brands ready to scale their online presence.",
    features: [
      "Everything in Basic Starter +",
      "Premium homepage with custom hero sections",
      "High-converting product page design",
      "Collection page with filters & sorting",
      "Size chart, trust badges & review integration",
      "SEO-optimized URLs, meta tags & descriptions",
      "Facebook Pixel installation & basic setup",
      "Facebook & Instagram sales channel setup",
      "Facebook Pixel + Product Catalog integration",
      "Custom audience & lookalike setup",
      "Email marketing integration (Klaviyo/Mailchimp)",
      "Advanced custom homepage sections & animations",
      "Product upload & optimization (up to 45 products)",
      "Multi-currency & multi-language ready setup",
      "Technical SEO audit & advanced optimization",
      "Upsell & cross-sell app integration",
      "Advanced speed optimization & image compression",
      "Essential legal pages (Privacy, Terms, Refund)",
      "7 days post-delivery priority support",
    ],
    paymentNote: "30% upfront payment required",
    buttonText: "Choose Growth Plan",
    popular: true,
    highlights: [],
  },
  {
    name: "Premium Scale",
    price: "$400",
    priceNote: "/project",
    description: "Complete solution for established brands with complex needs.",
    features: [
      "Everything in Growth Plan +",
      "Complete Facebook Ads setup & optimization",
      "Advanced retargeting & remarketing campaigns",
      "Conversion API (CAPI) integration",
      "Google Analytics 4 + Tag Manager setup",
      "Custom checkout experience optimization",
      "1 month priority support with quick response",
    ],
    paymentNote: "30% upfront payment required",
    buttonText: "Go Premium",
    popular: false,
    highlights: [
      "FREE Custom Domain Included",
      "Shopify 3 Months FREE Trial",
    ],
  },
];

export const Pricing = () => {
  const openWhatsApp = (planName: string) => {
    const message = `Hi, I'm interested in the ${planName} package. Can we discuss the details?`;
    window.open(`https://wa.me/8801754795557?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
          <span className="badge-primary mb-6">Pricing</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Investment In Your{" "}
            <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent pricing with no hidden fees. Choose the package that fits 
            your goals and budget.
          </p>
        </AnimatedSection>

        {/* Pricing Cards */}
        <StaggerContainer className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.15}>
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.name}>
              <motion.div
                className={`relative bg-card rounded-3xl p-8 border transition-all duration-500 h-full ${
                  plan.popular 
                    ? "border-primary lg:scale-105" 
                    : "border-border hover:border-primary/50"
                }`}
                whileHover={{ y: plan.popular ? -4 : -8 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: plan.popular ? '0 0 60px hsl(var(--primary) / 0.2)' : 'none'
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-primary rounded-full">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                      <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                    </div>
                  </motion.div>
                )}

                {/* Plan header */}
                <div className="mb-6 pt-2">
                  <h3 className="text-lg font-display font-semibold mb-2 text-foreground/80">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-display font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{plan.priceNote}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </motion.li>
                  ))}
                  
                  {/* Highlights with gift icon */}
                  {plan.highlights && plan.highlights.map((highlight, i) => (
                    <motion.li 
                      key={highlight} 
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (plan.features.length + i) * 0.03 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Gift className="w-3 h-3 text-amber-500" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Payment note */}
                {plan.paymentNote && (
                  <p className="text-xs text-muted-foreground text-center mb-4">{plan.paymentNote}</p>
                )}

                {/* CTA Button */}
                <MagneticButton strength={0.1} className="w-full mt-auto">
                  <Button
                    className={`w-full py-6 text-base font-semibold rounded-full group ${
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : plan.name === "Premium Scale"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                        : "bg-amber-500 hover:bg-amber-600 text-white"
                    }`}
                    onClick={() => openWhatsApp(plan.name)}
                  >
                    {plan.buttonText}
                  </Button>
                </MagneticButton>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Custom quote */}
        <AnimatedSection className="text-center mt-16" delay={0.5}>
          <motion.div 
            className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Need something custom?</p>
              <button
                onClick={() => openWhatsApp('Custom Project')}
                className="text-primary font-medium link-underline"
              >
                Let's discuss your project →
              </button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};
