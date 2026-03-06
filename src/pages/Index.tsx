import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

// Lazy load components below the fold for better initial load performance
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Connect = lazy(() => import("@/components/Connect"));
const Footer = lazy(() => import("@/components/Footer"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-24">
    <div className="w-8 h-8 rounded-full border-b-2 border-primary animate-spin"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO />
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
          <Skills />
          <Connect />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
