import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span
            className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase rounded-full border border-border text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Open to Work
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Brahmanya Asrit
            <br />
            Sudulagunta
          </motion.h1>

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
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-muted-foreground"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-5 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { href: "https://github.com/Ashrith2727", icon: Github, label: "GitHub" },
              { href: "https://linkedin.com/in/brahmanyasudulagunta", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:bsudulag@ttu.edu", icon: Mail, label: "Email" },
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
