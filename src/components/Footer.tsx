import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "./animations/AnimatedSection";

const socialLinks = [
  { name: "LinkedIn", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Dribbble", href: "#" },
];

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer 
      ref={containerRef}
      className="relative bg-background overflow-hidden border-t border-border/50 pt-20 pb-10"
    >
      {/* Immersive 3D Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-[100%] blur-[120px] mix-blend-screen"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y }} className="container-custom relative z-10 flex flex-col items-center justify-center">
        
        {/* Massive Text CTA */}
        <div className="w-full text-center mb-20 relative group cursor-pointer" onClick={() => scrollToSection("#contact")}>
          <motion.div 
            className="overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 1, 0.5, 1] } }
            }}
          >
            <h2 className="text-[12vw] sm:text-[14vw] font-display font-black leading-[0.85] tracking-tighter text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/20 transition-all duration-700">
              LET'S
            </h2>
            <h2 className="text-[12vw] sm:text-[14vw] font-display font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 group-hover:scale-[1.02] transition-transform duration-700">
              TALK
            </h2>
          </motion.div>
          
          {/* Hover Floating Button */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 pointer-events-none"
          >
            <ArrowUpRight className="w-10 h-10" />
          </motion.div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mb-20 border-t border-b border-border/50 py-12">
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Email</h4>
            <MagneticButton strength={0.1}>
              <a href="mailto:majed@majedahmed.com" className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors inline-block">
                majed@majedahmed.com
              </a>
            </MagneticButton>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">WhatsApp</h4>
            <MagneticButton strength={0.1}>
              <a href="https://wa.me/8801754795557" target="_blank" rel="noreferrer" className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors inline-block">
                +880 1754795557
              </a>
            </MagneticButton>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Socials</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <MagneticButton key={link.name} strength={0.2}>
                  <a href={link.href} className="text-lg font-medium text-muted-foreground hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all after:duration-300">
                    {link.name}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Available for new projects
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Majed Ahmed.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-bold flex items-center hover:text-primary transition-colors">
            BACK TO TOP <ArrowUpRight className="ml-1 w-4 h-4" />
          </button>
        </div>

      </motion.div>
    </footer>
  );
};
