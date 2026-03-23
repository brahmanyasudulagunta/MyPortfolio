import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase rounded-full bg-primary text-primary-foreground shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Open to Work
          </motion.span>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
            className="mb-4"
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground"
            >
              Brahmanya Asrit
            </motion.h1>
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-primary py-2"
            >
              Sudulagunta
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-muted-foreground mb-10 text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cloud & DevOps Engineer · MS in CS @ Texas Tech University
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3 justify-center mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-5 justify-center"
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
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <social.icon className="h-4 w-4" />
                <span>{social.label}</span>
              </a>
            ))}
          </motion.div>

          <motion.p
            className="mt-8 text-sm text-muted-foreground/80 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Seeking new grad & entry-level full-time roles in SRE, DevOps, Infrastructure, and Platform Engineering.
          </motion.p>
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
