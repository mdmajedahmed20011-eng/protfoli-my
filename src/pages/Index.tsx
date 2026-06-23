import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageLoader } from "@/components/PageLoader";
import { CustomCursor } from "@/components/CustomCursor";

const Services = lazy(() => import("@/components/Services").then((m) => ({ default: m.Services })));
const WorkProcess = lazy(() => import("@/components/WorkProcess").then((m) => ({ default: m.WorkProcess })));
const Projects = lazy(() => import("@/components/Projects").then((m) => ({ default: m.Projects })));
const Comparison = lazy(() => import("@/components/Comparison").then((m) => ({ default: m.Comparison })));
const Reviews = lazy(() => import("@/components/Reviews").then((m) => ({ default: m.Reviews })));
const Pricing = lazy(() => import("@/components/Pricing").then((m) => ({ default: m.Pricing })));
const About = lazy(() => import("@/components/About").then((m) => ({ default: m.About })));
const FAQ = lazy(() => import("@/components/FAQ").then((m) => ({ default: m.FAQ })));
const Contact = lazy(() => import("@/components/Contact").then((m) => ({ default: m.Contact })));
const Footer = lazy(() => import("@/components/Footer").then((m) => ({ default: m.Footer })));

const SectionFallback = () => (
  <div className="px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <div className="h-6 w-48 rounded-md bg-muted animate-pulse" />
      <div className="mt-6 space-y-3">
        <div className="h-4 w-full rounded-md bg-muted/70 animate-pulse" />
        <div className="h-4 w-5/6 rounded-md bg-muted/70 animate-pulse" />
        <div className="h-4 w-2/3 rounded-md bg-muted/70 animate-pulse" />
      </div>
    </div>
  </div>
);

const seoData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "name": "Majed Ahmed",
      "url": "https://majedahmed.com/",
      "jobTitle": "High-Converting Shopify Developer & FB Ads Expert",
      "image": "https://majedahmed.com/assets/majed-photo.webp",
      "sameAs": [
        "https://www.facebook.com/skdamarbariresort",
        "https://github.com/mdmajedahmed20011-eng"
      ],
      "knowsAbout": ["Shopify Development", "Facebook Ads", "Conversion Rate Optimization", "Web Performance"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to build a Shopify store?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The timeline depends on the package you choose. Basic Starter stores typically take 3-5 days, Growth Plan stores take 7-10 days, and Premium Scale projects can take 10-14 days. Rush delivery is available for an additional fee."
          }
        },
        {
          "@type": "Question",
          "name": "What payment methods can my store accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your Shopify store can accept all major credit cards, PayPal, Apple Pay, Google Pay, and many local payment methods. Shopify Payments is available in most countries with competitive transaction fees."
          }
        }
      ]
    }
  ]
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background md:cursor-none">
      {/* Invisible SEO Layer: Rich Snippets for Google Search */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData) }}
      />
      
      {/* Native cursor is hidden on desktop because of Custom Cursor, but visible fallback is used */}
      <CustomCursor />
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBadges />

      <Suspense fallback={<SectionFallback />}>
        <Projects />
        <WorkProcess />
        <Reviews />
        <Comparison />
        <Services />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;