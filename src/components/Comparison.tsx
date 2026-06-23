import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { AnimatedSection } from "./animations/AnimatedSection";
import { Button } from "./ui/button";

const myBenefits = [
  "Results-oriented, conversion-focused design",
  "Experience with 25+ successful businesses",
  "Lightning-fast loading speeds",
  "Proven eCommerce Funnel Strategies",
  "Personalized 1-on-1 Communication",
  "24/7 Support, Anytime You Need Me"
];

const myBonuses = [
  "Free 1-on-1 CRO Consultancy",
  "Free Post-Launch Maintenance"
];

const othersDrawbacks = [
  "Unreliable developers with slow turnarounds.",
  "Websites that look okay but fail to convert.",
  "Slow loading speeds that kill your sales.",
  "No expertise in consumer psychology.",
  "Guesswork instead of data-driven decisions.",
  "Hidden costs and limited revisions.",
  "Delayed responses and poor communication."
];

export const Comparison = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground mb-4 block">
            Why Choose Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            Know What I Do <span className="gradient-text">Differently</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* My Column */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-card/40 backdrop-blur-xl border border-primary/30 p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col h-full overflow-hidden"
          >
            {/* Inner subtle glow */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-10 relative z-10">
              <div className="w-12 h-12 rounded-full border-2 border-primary/50 overflow-hidden flex items-center justify-center shrink-0">
                <img 
                  src="/assets/majed-photo.webp" 
                  alt="Majed Ahmed" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold">Majed Ahmed</h3>
            </div>

            <ul className="space-y-6 flex-1 relative z-10">
              {myBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-green-500" strokeWidth={3} />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-background/50 border border-primary/20 relative z-10">
              <p className="text-sm font-bold text-muted-foreground mb-4">Bonuses you get with me:</p>
              <ul className="space-y-4">
                {myBonuses.map((bonus, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                    </div>
                    <span className="text-sm font-semibold">{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Other Agencies Column */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-secondary/10 border border-border/50 p-8 sm:p-10 rounded-3xl flex flex-col h-full"
          >
            <h3 className="text-2xl font-bold mb-10 text-muted-foreground">Other Agencies & Freelancers</h3>

            <ul className="space-y-8 flex-1">
              {othersDrawbacks.map((drawback, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 opacity-50">
                    <X className="w-4 h-4 text-red-500" strokeWidth={2.5} />
                  </div>
                  <span className="text-muted-foreground">{drawback}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            onClick={scrollToContact}
            className="btn-primary px-8 py-6 text-lg relative overflow-hidden group shadow-lg shadow-primary/20"
          >
            Book A 30-Min Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
