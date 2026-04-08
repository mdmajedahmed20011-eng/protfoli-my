import { ShieldCheck, Award, Star, Megaphone } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "Shopify Partner",
    description: "25+ Stores Built",
  },
  {
    icon: Megaphone,
    title: "Facebook Ads Expert",
    description: "25+ Campaigns",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Top Reviews",
  },
  {
    icon: Award,
    title: "100% Satisfaction",
    description: "Guaranteed",
  },
];

export const TrustBadges = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container-custom">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
