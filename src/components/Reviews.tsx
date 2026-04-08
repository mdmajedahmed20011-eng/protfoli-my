import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const reviews = [
  {
    id: 1,
    name: "Sojib Ahmed",
    position: "Marketing Manager",
    avatar: "/assets/logo/reviwe marketing manager sojib ahmed.png",
    content: "Working with this team has completely changed our conversion metrics. Not only did they build something beautiful, they actually understood marketing psychology. A total game changer for our ad campaigns.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kanchan",
    position: "Project Manager",
    avatar: "/assets/logo/manager Kanchan.jpg",
    content: "We had very complex requirements and a tight deadline. They managed the entire process flawlessly, communicating every step of the way. The end result was lightning fast and pixel perfect.",
    rating: 5,
  },
  {
    id: 3,
    name: "Raihan Sabuj",
    position: "CEO, Rodala Eco Resort",
    avatar: "/assets/logo/reviwe by ceo.jpg",
    content: "Our online presence finally mirrors the quality of our brand. The custom integrations and seamless aesthetic have directly resulted in higher average order values and customer loyalty.",
    rating: 5,
  },
  {
    id: 4,
    name: "Founder",
    position: "25 Business",
    avatar: "/assets/logo/reviwe by ceo.webp",
    content: "Phenomenal attention to detail. Instead of just delivering code, they delivered a business solution designed to grow our revenue. I highly recommend them to anyone scaling their brand.",
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
