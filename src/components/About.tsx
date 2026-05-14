import { motion } from "framer-motion";
import { AnimatedSection, AnimatedTitle } from "./animations/AnimatedSection";

const highlights = [
  { value: "10+", label: "Projects Built" },
  { value: "May 2026", label: "Graduating (MS)" },
  { value: "SRE / DevOps", label: "Focus Area" },
  { value: "OPT / STEM", label: "Work Auth" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">INTRO</p>
          <h2 className="text-4xl font-bold mb-3 text-foreground">About Me</h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            
            {/* Left Side: Text */}
            <div className="w-full lg:w-1/2">
              <AnimatedSection className="space-y-6 text-lg text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative pl-4 border-l-2 border-primary/50"
                >
                  I'm deeply passionate about the ever-evolving world of Cloud Computing and DevOps. There's something 
                  incredibly satisfying about automating complex workflows, optimizing infrastructure, and watching 
                  systems scale seamlessly. For me, it's not just about the technology—it's about solving real problems 
                  and making things work better.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative pl-4 border-l-2 border-transparent hover:border-primary/30 transition-colors"
                >
                  My curiosity drives me to constantly explore new tools, frameworks, and best practices. Whether it's 
                  diving into Kubernetes orchestration, experimenting with Terraform configurations, or understanding 
                  the intricacies of CI/CD pipelines—I find joy in the learning process itself. Every challenge is an 
                  opportunity to grow, and every failure is a lesson that makes me stronger.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative pl-4 border-l-2 border-transparent hover:border-primary/30 transition-colors"
                >
                  I believe in building systems that are not just functional, but resilient, secure, and maintainable. 
                  The DevOps philosophy of continuous improvement resonates deeply with me—both in code and in life. 
                  I'm always eager to collaborate, share knowledge, and contribute to communities that push the 
                  boundaries of what's possible in cloud infrastructure.
                </motion.p>
              </AnimatedSection>
            </div>
            
            {/* Right Side: Stats Grid */}
            <div className="w-full lg:w-1/2">
              <motion.div 
                className="grid grid-cols-2 gap-4 lg:gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {highlights.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      hidden: { opacity: 0, y: 30, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative group"
                  >
                    <div className="p-8 rounded-xl bg-card border border-border/80 transition-all shadow-sm hover:shadow-md text-center h-full flex flex-col items-center justify-center min-h-[160px]">
                      <h3 className="text-3xl lg:text-4xl font-extrabold text-primary mb-3 tracking-tight">{item.value}</h3>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.1em]">{item.label}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
