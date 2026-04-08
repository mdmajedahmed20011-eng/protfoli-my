import { useState } from "react";
import { Send, Mail, MessageCircle, MapPin, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { AnimatedSection, MagneticButton } from "./animations/AnimatedSection";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "majed@majedahmed.com",
    href: "mailto:majed@majedahmed.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+880 1754795557",
    href: "https://wa.me/8801754795557",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Working Worldwide",
    href: null,
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hi, I'm ${formData.name}.\n\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/8801754795557?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">Contact</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to transform your e-commerce presence? Get in touch and let's 
            discuss your project.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3" direction="left" delay={0.2}>
            <motion.div 
              className="bg-card rounded-3xl p-8 lg:p-10 border border-border"
              whileHover={{ borderColor: 'hsl(var(--primary) / 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Send className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-display font-semibold">Send a Message</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form and I'll get back to you</p>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border rounded-xl h-12 focus:border-primary transition-colors"
                    />
                  </motion.div>
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border rounded-xl h-12 focus:border-primary transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="budget" className="text-sm font-medium">Project Budget</Label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="flex h-12 w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:border-primary transition-colors"
                  >
                    <option value="">Select your budget range</option>
                    <option value="250-450">$250 - $450</option>
                    <option value="450-650">$450 - $650</option>
                    <option value="650+">$650+</option>
                  </select>
                </motion.div>

                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <Label htmlFor="message" className="text-sm font-medium">Project Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/50 border-border resize-none rounded-xl focus:border-primary transition-colors"
                  />
                </motion.div>

                <MagneticButton strength={0.1} className="w-full">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full btn-primary text-lg group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </form>
            </motion.div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection className="lg:col-span-2 space-y-6" direction="right" delay={0.3}>
            {/* Contact methods */}
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className={`p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all group ${
                  method.href ? 'cursor-pointer' : ''
                }`}
                onClick={() => method.href && window.open(method.href, method.href.startsWith('mailto') ? '_self' : '_blank')}
                whileHover={{ scale: 1.02, y: -4 }}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                  {method.href && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  )}
                </div>
              </motion.div>
            ))}

            {/* Response time */}
            <motion.div 
              className="p-6 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Response</h4>
                  <p className="text-sm text-muted-foreground">
                    I typically respond within 24 hours. For urgent projects, 
                    mention "URGENT" in your message.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div 
              className="p-6 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                  <motion.div 
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <p className="font-semibold">Currently Available</p>
                  <p className="text-sm text-muted-foreground">Accepting new projects</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
