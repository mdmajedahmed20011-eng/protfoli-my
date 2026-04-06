import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    position: "Founder, Her Fantasy Box",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "The level of engineering and psychological detail put into our store is unmatched. Our customer retention skyrocketed, and the sleek design immediately boosted our brand's perceived value.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    position: "CEO, Surreal Cereal",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    content: "We needed a website that matched our energetic brand voice but also converted flawlessly. The team delivered a masterpiece. The checkout flow alone increased our sales by 45%.",
    rating: 5,
  },
  {
    id: 3,
    name: "Saima Rahman",
    position: "Director, Saima Fashion BD",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    content: "During the Eid rush, our previous website used to crash. After the rebuild, we handled 10x the traffic smoothly. Best investment we've ever made for our business.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    position: "VP Product, Annabella Pump",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "Our product requires trust and premium positioning. The UX is so intuitive, and the aesthetics perfectly capture the medical-grade yet approachable feel we were looking for.",
    rating: 5,
  },
  {
    id: 5,
    name: "Dr. Inani",
    position: "Founder, Andromeda Inani",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    content: "The booking experience is so fluid and luxurious. Bounce rates dropped significantly, and direct bookings are higher than ever. Phenomenal UI/UX work.",
    rating: 5,
  },
  {
    id: 6,
    name: "Elena Rodriguez",
    position: "Operations, Apollica Shop",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    content: "Seeing the development unfold has been amazing. The micro-interactions and blazing fast speeds are going to set a new standard in our industry.",
    rating: 5,
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="relative py-24 overflow-hidden bg-secondary/20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-6">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6">
            Trusted By <span className="gradient-text">Global Brands</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take my word for it. Here is what my clients have to say about the results I've delivered.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {reviews.map((review) => (
            <StaggerItem key={review.id}>
              <motion.div
                className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/30 transition-all duration-300 h-full flex flex-col relative group"
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 group-hover:text-primary transition-all duration-300">
                  <Quote className="w-12 h-12" />
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic mb-8 flex-1 relative z-10">
                  "{review.content}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-colors"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.position}</p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
