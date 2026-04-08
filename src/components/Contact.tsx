import { useState } from "react";
import { Send, Mail, MessageCircle, MapPin, ArrowRight, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    projectType: "E-Commerce Store",
    budget: "$650+",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hi Majed, I'm ${formData.name}.\n\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\n\nDetails:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/8801754795557?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden py-32 bg-background">
      {/* Immersive 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div 
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px] mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
          <span className="badge-primary mb-6">Initiate Project</span>
          <h2 className="text-5xl sm:text-7xl font-display font-black mt-6 mb-8 uppercase tracking-tighter">
            Let's Build <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground opacity-80">
            Skip the boring standard forms. Let's have a conversation about scaling your brand's revenue.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          {/* Conversational Form - Mad Libs Style */}
          <AnimatedSection className="lg:col-span-8" direction="left" delay={0.2}>
            <div className="bg-card/30 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-14 border border-border/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
              
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-display leading-[1.8] sm:leading-[1.8] text-muted-foreground font-light">
                  <span>Hi Majed, my name is </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="inline-block bg-transparent border-b-2 border-primary/30 focus:border-primary text-foreground text-center px-4 py-2 mx-2 w-48 transition-colors placeholder:text-muted-foreground/30 outline-none font-medium"
                  />
                  <span> and I want to build a high-converting </span>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="inline-block bg-transparent border-b-2 border-purple-500/30 focus:border-purple-500 text-purple-400 text-center px-4 py-2 mx-2 transition-colors outline-none cursor-pointer font-bold appearance-none text-2xl sm:text-3xl lg:text-4xl"
                  >
                    <option className="bg-background text-base" value="E-Commerce Store">E-Commerce Store</option>
                    <option className="bg-background text-base" value="Landing Page">Landing Page</option>
                    <option className="bg-background text-base" value="Agency Website">Agency Website</option>
                    <option className="bg-background text-base" value="Custom Web App">Custom Web App</option>
                  </select>
                  <span>.</span>
                  
                  <br className="hidden sm:block" /><br className="hidden sm:block" />
                  
                  <span>You can reach me at </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="inline-block bg-transparent border-b-2 border-primary/30 focus:border-primary text-foreground text-center px-4 py-2 mx-2 w-64 transition-colors placeholder:text-muted-foreground/30 outline-none font-medium mt-4 sm:mt-0"
                  />
                  <span>. My allocated budget for this project is around </span>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="inline-block bg-transparent border-b-2 border-green-500/30 focus:border-green-500 text-green-400 text-center px-4 py-2 mx-2 transition-colors outline-none cursor-pointer font-bold appearance-none text-2xl sm:text-3xl lg:text-4xl mt-4 sm:mt-0"
                  >
                    <option className="bg-background text-base" value="$250 - $450">$250 - $450</option>
                    <option className="bg-background text-base" value="$450 - $650">$450 - $650</option>
                    <option className="bg-background text-base" value="$650+">$650+</option>
                  </select>
                  <span>.</span>
                  
                  <br className="hidden sm:block" /><br className="hidden sm:block" />
                  
                  <span>Here are some extra details: </span>
                  <textarea
                    name="message"
                    required
                    rows={1}
                    placeholder="Type your ideas here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="inline-block bg-transparent border-b-2 border-primary/30 focus:border-primary text-foreground w-full mt-6 px-4 py-2 transition-colors placeholder:text-muted-foreground/30 outline-none font-medium resize-y min-h-[60px]"
                  />
                </div>

                <div className="flex justify-end pt-8">
                  <MagneticButton strength={0.2}>
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-full px-10 py-8 bg-foreground text-background hover:bg-foreground/90 text-xl font-bold group shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all"
                    >
                      Shoot it Over
                      <Send className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all" />
                    </Button>
                  </MagneticButton>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Premium Contact Info Cards */}
          <AnimatedSection className="lg:col-span-4 flex flex-col justify-between" direction="right" delay={0.3}>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  className={`p-8 bg-card/50 backdrop-blur-lg rounded-3xl border border-white/5 hover:border-primary/30 transition-all group shadow-xl ${
                    method.href ? 'cursor-pointer hover:-translate-y-2' : ''
                  }`}
                  onClick={() => method.href && window.open(method.href, method.href.startsWith('mailto') ? '_self' : '_blank')}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">{method.label}</p>
                      <p className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Indicator */}
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-br from-green-500/10 to-transparent rounded-3xl border border-green-500/20 backdrop-blur-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                  </div>
                  <motion.div 
                    className="absolute inset-0 border-2 border-green-500 rounded-full"
                    animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Currently Available</p>
                  <p className="text-sm text-green-400 font-medium">Accepting new projects</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
