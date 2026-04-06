import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageLoader } from "@/components/PageLoader";

const Services = lazy(() => import("@/components/Services").then((m) => ({ default: m.Services })));
const WorkProcess = lazy(() => import("@/components/WorkProcess").then((m) => ({ default: m.WorkProcess })));
const Pricing = lazy(() => import("@/components/Pricing").then((m) => ({ default: m.Pricing })));
const About = lazy(() => import("@/components/About").then((m) => ({ default: m.About })));
const Projects = lazy(() => import("@/components/Projects").then((m) => ({ default: m.Projects })));
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <TrustBadges />

      {/* Lazy-load below-the-fold sections for faster first paint */}
      <Suspense fallback={<SectionFallback />}>
        <Services />
        <WorkProcess />
        <Projects />
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