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

const Index = () => {
  return (
    <div className="min-h-screen bg-background cursor-none md:!cursor-auto">
      {/* Native cursor is hidden on desktop because of Custom Cursor, but visible fallback is used */}
      <CustomCursor />
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
        <Comparison />
        <Reviews />
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