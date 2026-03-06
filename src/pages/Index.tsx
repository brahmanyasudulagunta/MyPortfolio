import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import SEO from "@/components/SEO";

// Lazy load components below the fold for better initial load performance
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const About = lazy(() => import("@/components/About"));
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
        <Experience />
        <Suspense fallback={<LoadingFallback />}>
          <Projects />
          <Skills />
          <Education />
          <About />
          <Connect />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
