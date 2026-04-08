import { ExternalLink, TrendingUp, Sparkles, Target, Rocket, Globe, MapPin, Code2, FlaskConical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

const allProjects = [
  // 1. Apollica (Top Tier Tech)
  {
    id: "apollica",
    title: "Apollica Shop",
    category: "🚧 In Development",
    type: "Next-Gen eCommerce",
    image: "/assets/projects/mockup-all-framed (1).png",
    description: "Engineering an absolute powerhouse eCommerce platform prioritizing advanced CRO, micro-interactions, and blazing checkout speeds for high-ticket gadgets.",
    tags: ["Next.js", "Headless", "Advanced UI"],
    link: "https://www.apollica.shop/",
    stats: "Upcoming Launch",
    tab: "ongoing"
  },

  // 2. Andromeda Inani (Luxury Hospitality)
  {
    id: "andromedainani",
    title: "Andromeda Inani",
    category: "🇧🇩 Local Giant",
    type: "Hospitality / Booking",
    image: "/assets/projects/mockup-all-framed.png",
    description: "A luxury digital booking experience for a premium destination. Implemented persuasion design to increase direct bookings and lower bounce rates.",
    tags: ["Booking Engine", "Luxury UI", "Persuasion Design"],
    link: "https://andromedainani.com/",
    stats: "Increased Direct Booking",
    tab: "bangladeshi"
  },

  // 3. Rodala Eco Resort (Hospitality)
  {
    id: "rodala",
    title: "Rodala Eco Resort",
    category: "🚧 Running Project",
    type: "Hospitality",
    image: "/assets/projects/mockup-all-framed (2).png",
    description: "Building an immersive digital eco-resort experience that reflects nature-centric luxury and encourages high-ticket direct bookings seamlessly.",
    tags: ["Eco Resort", "Booking System", "Running"],
    link: "https://majedahmed.com/",
    stats: "In Progress",
    tab: "ongoing"
  },

  // 4. Saima Fashion (Fashion eCommerce)
  {
    id: "saimafashion",
    title: "Saima Fashion",
    category: "🇧🇩 Local Giant",
    type: "Fashion eCommerce",
    image: "/assets/projects/all-devices-blackr.png",
    description: "Scalable retail architecture built to handle massive local traffic spikes during festive seasons. Emphasized visual hierarchy and fast load speeds.",
    tags: ["High Traffic", "Visual Hierarchy", "Fast Load"],
    link: "https://saimafashion.com/",
    stats: "99.9% Uptime",
    tab: "bangladeshi"
  },

  // 5. Annabella Pump (Health / Care Products)
  {
    id: "annabella",
    title: "Annabella Pump",
    category: "Global Brand",
    type: "Health Tech",
    image: "/assets/projects/new.png",
    description: "Sleek, medical-grade brand representation with an intuitive buying journey. Designed to convert highly analytical and emotionally invested buyers.",
    tags: ["Health Tech", "High-Ticket CRO", "Responsive"],
    link: "https://www.annabella-pump.com/",
    stats: "Industry Leading UX",
    tab: "international"
  },

  // 6. Her Fantasy Box (Subscription/Jewelry)
  {
    id: "herfantasybox",
    title: "Her Fantasy Box",
    category: "Global Brand",
    type: "Feminine Care",
    image: "/assets/projects/wow.png",
    description: "A premium subscription-based eCommerce experience designed with human psychology to maximize trust, retention, and average order value (AOV).",
    tags: ["Subscriptions", "Trust Engineering", "Premium UI"],
    link: "https://herfantasybox.com/",
    stats: "2.5x Customer LTV",
    tab: "international"
  },

  // 7. Premium Salon Demo
  {
    id: "salon",
    title: "Premium Salon Demo",
    category: "🧪 Concept UI",
    type: "Service Business",
    image: "/assets/projects/mockup-all-framed (3).png",
    description: "An experimental playground showcasing booking architectures, fluid transitions, and a modern aesthetic designed entirely to evoke a sense of grooming luxury.",
    tags: ["Fluid UI", "Booking Flow", "Demo"],
    link: "https://salon-sfh1.vercel.app/",
    stats: "Pushing Boundaries",
    tab: "demo"
  },

  // 8. Surreal Cereal (Playful brand)
  {
    id: "eatsurreal",
    title: "Surreal Cereal",
    category: "Global Brand",
    type: "eCommerce",
    image: "/assets/projects/all-devices-black.png",
    description: "High-energy, conversion-optimized storefront. Focus on playful UI, vibrant branding, and frictionless checkout to capture impulse buyers.",
    tags: ["CRO Optimized", "Custom Design", "Shopify Plus"],
    link: "https://try.eatsurreal.co.uk/",
    stats: "+45% Conversion Rate",
    tab: "international"
  }
];

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? allProjects 
    : allProjects.filter(p => p.tab === activeTab);

  return (
    <section id="portfolio" className="relative pb-32 pt-20 overflow-hidden bg-background">
      {/* Background Psychological Triggers (Subtle Gradients) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Proven Track Record</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6 leading-tight">
            Engineering Systems That <span className="gradient-text">Dominate Markets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I don't just build websites. I engineer conversion engines using human psychology, elite design paradigms, and advanced frontend architectures to make your competitors irrelevant.
          </p>
        </AnimatedSection>

        <Tabs defaultValue="all" className="w-full flex flex-col items-center mb-12" onValueChange={setActiveTab}>
          <TabsList className="bg-secondary/50 backdrop-blur-md border border-border/50 p-1.5 h-auto rounded-full flex-wrap justify-center max-w-full overflow-x-auto gap-1">
            <TabsTrigger value="all" className="rounded-full px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all">All Works</TabsTrigger>
            <TabsTrigger value="international" className="rounded-full px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"><Globe className="w-4 h-4"/> Global</TabsTrigger>
            <TabsTrigger value="bangladeshi" className="rounded-full px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"><MapPin className="w-4 h-4"/> Bangladesh</TabsTrigger>
            <TabsTrigger value="ongoing" className="rounded-full px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"><Rocket className="w-4 h-4"/> Ongoing</TabsTrigger>
            <TabsTrigger value="demo" className="rounded-full px-5 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all flex items-center gap-2"><FlaskConical className="w-4 h-4"/> Demos</TabsTrigger>
          </TabsList>
        </Tabs>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                key={project.id}
                className="group relative bg-card/80 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-border/60 hover:border-primary/50 transition-colors duration-500 premium-card flex flex-col shadow-lg hover:shadow-primary/10"
              >
                {/* Visual Header / Image Box */}
                <div className="relative h-64 overflow-hidden p-2 rounded-t-[2rem]">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  
                  {/* Floating Stats Badge - Psychological Trigger (Social Proof) */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-background/90 backdrop-blur-md px-4 py-2 rounded-full border border-border/50 shadow-sm"
                  >
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold">{project.stats}</span>
                  </motion.div>

                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-3 py-1.5 bg-primary/90 backdrop-blur-md rounded-full text-xs font-bold text-primary-foreground shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>

                {/* Cognitive Box (Content) */}
                <div className="p-8 flex-1 flex flex-col relative z-20 -mt-6 bg-card rounded-[2rem] shadow-[0_-10px_30px_rgba(0,0,0,0.1)] border-t border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold text-foreground/80 bg-secondary/80 border border-border/50 px-3 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button 
                      className="w-full rounded-2xl group flex justify-between items-center py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" 
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="font-semibold text-primary-foreground text-sm flex items-center gap-2">
                          <Code2 className="w-4 h-4" /> 
                          Inspect Architecture
                        </span>
                        <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                          <ExternalLink className="w-4 h-4 text-primary-foreground group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                      </a>
                    </Button>
                  </div>
                </div>
                
                {/* Ethereal Glow on Hover */}
                <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-primary/20 rounded-[2rem] pointer-events-none transition-colors duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
