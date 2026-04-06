import { motion } from "framer-motion";
import { AnimatedSection } from "./animations/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a Shopify store?",
    answer: "The timeline depends on the package you choose. Basic Starter stores typically take 3-5 days, Growth Plan stores take 7-10 days, and Premium Scale projects can take 10-14 days. Rush delivery is available for an additional fee.",
  },
  {
    question: "Do I need to have products ready before starting?",
    answer: "Not necessarily! You can start the design process while preparing your products. However, having at least some product images and descriptions ready helps create a more accurate final design. I can also help with product photography tips and description optimization.",
  },
  {
    question: "What payment methods can my store accept?",
    answer: "Your Shopify store can accept all major credit cards, PayPal, Apple Pay, Google Pay, and many local payment methods. Shopify Payments is available in most countries with competitive transaction fees.",
  },
  {
    question: "Will my store be mobile-friendly?",
    answer: "Absolutely! All stores I build are fully responsive and optimized for mobile devices. With over 70% of e-commerce traffic coming from mobile, this is a top priority for every project.",
  },
  {
    question: "Do you provide training on how to manage the store?",
    answer: "Yes! Growth Plan includes 1-on-1 training for 1 person, and Premium Scale includes training for up to 2 persons. I provide video tutorials and documentation to help you confidently manage your store, add products, and process orders.",
  },
  {
    question: "What happens after my store is launched?",
    answer: "All packages include post-delivery support (7 days for Growth, 21 days for Premium). During this period, I help fix any issues and answer questions. Extended support and maintenance packages are also available.",
  },
  {
    question: "Can you help with marketing and SEO?",
    answer: "Yes! All packages include basic SEO setup. Growth and Premium plans include SEO-friendly URLs, meta setup, and social media sales channel integration. I can also recommend marketing strategies to drive traffic to your new store.",
  },
  {
    question: "What is the payment process?",
    answer: "All packages require 30% upfront payment to begin work. The remaining 70% is due upon project completion before the final handover. I accept bank transfers, PayPal, and other secure payment methods.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">FAQ</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? I have answers. Here are the most common questions 
            about my Shopify services.
          </p>
        </AnimatedSection>

        {/* FAQ Accordion */}
        <AnimatedSection className="max-w-3xl mx-auto" delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-5 [&[data-state=open]]:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection className="text-center mt-12" delay={0.4}>
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            whileHover={{ x: 5 }}
          >
            Get in touch →
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};
