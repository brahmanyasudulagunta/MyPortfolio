import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingGrid, ParticleField } from "./animations/FloatingElements";
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 z-10 pt-20 md:pt-0 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-[60%] text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 text-[11px] font-bold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available May 2026 &nbsp;·&nbsp; Full-time &nbsp;·&nbsp; OPT/STEM Ready
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
              }}
              className="mb-4"
            >
              <motion.p variants={textVariants} className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
                Hi, I'm
              </motion.p>
              <motion.h1 
                variants={textVariants}
                className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-extrabold tracking-tight text-foreground flex flex-wrap justify-center lg:justify-start gap-x-3"
              >
                <span>Brahmanya Asrit</span>
                <span className="text-primary">Sudulagunta</span>
              </motion.h1>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 15 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="mt-6 mb-10"
            >
              <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-tight">
                SRE & DevOps Engineer &nbsp;·&nbsp; TTU '26
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-7 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
                onClick={scrollToProjects}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-5 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                { href: "https://github.com/brahmanyasudulagunta", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/brahmanyasudulagunta", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:sudulaguntabrahmanyaasrit@gmail.com", icon: Mail, label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/50 hover:border-border transition-all hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile Photo Side */}
          <motion.div
            className="w-full lg:w-[45%] flex justify-center lg:justify-end py-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border border-primary/30 p-2 bg-gradient-to-br from-card to-background shadow-2xl z-10">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src="/ProfilePhoto.png" 
                    alt="Brahmanya Asrit"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
