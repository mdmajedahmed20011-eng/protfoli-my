import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck, Trophy, TrendingUp } from "lucide-react";
import { AnimatedSection } from "./animations/AnimatedSection";

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
    position: "apollica",
    avatar: "/assets/logo/reviwe by ceo.webp",
    content: "Phenomenal attention to detail. Instead of just delivering code, they delivered a business solution designed to grow our revenue. I highly recommend them to anyone scaling their brand.",
    rating: 5,
  }
];

// Duplicate for infinite scroll effect
const scrollItems = [...reviews, ...reviews];

export const Reviews = () => {
  return (
    <section id="reviews" className="relative py-32 overflow-hidden bg-[#050505]">
      {/* Immersive 3D Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        
        {/* CRO Optimized Header Section */}
        <AnimatedSection className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
              <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-sm font-bold tracking-widest text-white/80 uppercase">Verified Client Success</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-display font-black text-white mb-6 leading-tight">
              Don't just take <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">my word for it.</span>
            </h2>
            <p className="text-xl text-white/50 font-light max-w-lg">
              I build converting machines, not just websites. Hear directly from the brands and founders whose revenue scaled after working with me.
            </p>
          </div>

          {/* 3D Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-6 lg:justify-end">
            <motion.div 
               whileHover={{ y: -10, scale: 1.05 }}
               className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
               <motion.div animate={{ left: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
               <ShieldCheck className="w-12 h-12 text-blue-400 mb-4 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" />
               <div className="text-4xl font-black text-white mb-1">100%</div>
               <div className="text-sm text-white/60 font-bold uppercase tracking-wider">Job Success Score</div>
            </motion.div>
            
            <motion.div 
               whileHover={{ y: -10, scale: 1.05 }}
               className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
               <motion.div animate={{ left: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
               <TrendingUp className="w-12 h-12 text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
               <div className="text-4xl font-black text-white mb-1">25+</div>
               <div className="text-sm text-white/60 font-bold uppercase tracking-wider">Businesses Scaled</div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Infinite Scrolling Marquee Container */}
        <div 
          className="relative -mx-[50vw] left-[50%] right-[50%] w-[100vw] overflow-hidden flex flex-col gap-8 py-10"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        >
           
           {/* Top Row - Scrolling Left */}
           <div className="flex w-max">
              <motion.div 
                animate={{ x: [0, -1035] }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 px-4"
              >
                 {scrollItems.map((review, idx) => (
                    <ReviewCard key={`row1-${idx}`} review={review} />
                 ))}
              </motion.div>
           </div>

           {/* Bottom Row - Scrolling Right */}
           <div className="flex w-max ml-[-1000px]">
              <motion.div 
                animate={{ x: [0, 1035] }} 
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 px-4"
              >
                 {[...scrollItems].reverse().map((review, idx) => (
                    <ReviewCard key={`row2-${idx}`} review={review} />
                 ))}
              </motion.div>
           </div>
           
        </div>
      </div>
    </section>
  );
};

// Extracted 3D Card Component
const ReviewCard = ({ review }: { review: any }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateZ: 1 }}
      className="w-[450px] shrink-0 bg-gradient-to-br from-[#1a1a24] to-[#111118] rounded-3xl p-8 
      border border-white/5 hover:border-white/20 transition-all duration-300 relative group
      shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
    >
      {/* Enormous Decorative Quote Mark */}
      <div className="absolute -top-6 -right-2 text-9xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 font-serif leading-none select-none">
        "
      </div>
      
      {/* Animated Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500" />

      {/* 5-Star CRO Highlight */}
      <div className="flex gap-1.5 mb-8 relative z-10">
        {[...Array(review.rating)].map((_, i) => (
          <motion.div key={i} animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: i * 0.2 }}>
             <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
          </motion.div>
        ))}
      </div>

      <p className="text-xl text-white/80 font-light leading-relaxed mb-10 relative z-10 italic">
        "{review.content}"
      </p>

      <div className="flex items-center gap-5 mt-auto relative z-10">
        <div className="relative">
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
           <img
             src={review.avatar}
             alt={review.name}
             className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:border-white/50 transition-colors"
           />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white tracking-wide">{review.name}</h4>
          <p className="text-blue-400 font-medium tracking-wider text-sm uppercase mt-1">{review.position}</p>
        </div>
      </div>
    </motion.div>
  );
};
