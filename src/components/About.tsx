import { motion } from "framer-motion";
import { AnimatedSection, AnimatedTitle } from "./animations/AnimatedSection";
import { Code2, Cloud, Shield, Cpu } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "Cloud Enthusiast", value: "Always Exploring" },
  { icon: Shield, label: "Security Mindset", value: "Building Secure Systems" },
  { icon: Cpu, label: "Automation First", value: "Efficiency Driven" },
  { icon: Code2, label: "Continuous Learner", value: "Growing Every Day" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </AnimatedTitle>
          
          {/* Highlight Cards */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {highlights.map((item, index) => (
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
                <div className="p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 text-center h-full">
                  <motion.div 
                    className="inline-flex p-3 rounded-lg bg-primary/10 mb-3 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <item.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <p className="text-sm font-medium text-foreground mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

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
      </div>
    </section>
  );
};

export default About;
