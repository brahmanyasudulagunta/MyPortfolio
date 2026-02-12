import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import PortfolioSidebar from "@/components/PortfolioSidebar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <PortfolioSidebar />
      <div className="md:ml-48">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
