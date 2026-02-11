import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Code2, Network, Server, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { Card3D } from "./animations/Card3D";

const skills = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "Google Cloud Platform", level: 90 },
      { name: "Microsoft Azure", level: 75 },
      { name: "OpenStack", level: 95 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "Terraform", level: 88 },
      { name: "Ansible", level: 80 },
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Bash/Shell", level: 90 },
      { name: "SQL", level: 85 },
      { name: "HCL", level: 88 },
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Server,
    title: "Infrastructure & CI/CD",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "Argo CD", level: 85 },
      { name: "GitOps", level: 88 },
      { name: "Linux", level: 95 },
      { name: "KVM", level: 85 },
      { name: "k3s", level: 80 },
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Network,
    title: "Networking & Security",
    skills: [
      { name: "Wireshark", level: 85 },
      { name: "VPC", level: 88 },
      { name: "Load Balancing", level: 85 },
      { name: "iptables", level: 80 },
      { name: "SSH", level: 95 },
      { name: "RBAC", level: 85 },
      { name: "Snort IDS", level: 75 },
    ],
    color: "from-amber-500 to-orange-500",
  },
];

const additionalSkills = [
  "OpenStack Services (Nova, Neutron, Cinder, Keystone, Glance, Horizon, Heat, Swift)",
  "Prometheus & Grafana",
  "FastAPI",
  "React & Vite",
  "RAG & Vector Databases",
  "ChromaDB",
  "Gemini API",
  "IAM & Security",
  "Compute Engine",
  "Cloud Storage",
  "Cloud SQL",
  "VirtualBox",
  "Network Topologies (VXLAN, NAT)",
  "Ghidra",
  "VS Code & PyCharm",
  "Jupyter Notebook",
  "Git & GitHub",
  "NLP & Text Summarization",
];

const certifications = [
  { name: "Fundamentals of Red Hat Enterprise Linux", year: "2023" },
  { name: "Google Cloud Technical Support Fundamentals", year: "2024" },
  { name: "Google Cloud Skill Boost – Ongoing Learning", year: "2023 - Present" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
        </AnimatedTitle>
        
        {/* Main Skills Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {skills.map((category, index) => (
            <StaggerItem key={index}>
              <Card3D className="h-full">
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full group relative overflow-hidden">
                  {/* Gradient accent */}
                  <motion.div 
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  />
                  
                  <CardContent className="pt-8 pb-6">
                    <div className="flex flex-col items-center text-center">
                      <motion.div 
                        className={`mb-4 p-4 rounded-xl bg-gradient-to-br ${category.color} opacity-80`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <category.icon className="h-7 w-7 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                      <ul className="space-y-2 text-muted-foreground w-full">
                        {category.skills.map((skill, skillIndex) => (
                          <motion.li 
                            key={skillIndex} 
                            className="text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + skillIndex * 0.05 }}
                          >
                            <motion.div 
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors cursor-default"
                              whileHover={{ 
                                x: 5, 
                                scale: 1.02,
                                rotateX: 5,
                                rotateY: -5,
                              }}
                              style={{ transformStyle: "preserve-3d" }}
                            >
                              <motion.span 
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                whileHover={{ scale: 1.5 }}
                              />
                              <span>{skill.name}</span>
                            </motion.div>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications Section */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold text-center">
              Certifications & <span className="text-primary">Learning</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative"
              >
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="pt-6 pb-4 text-center">
                    <motion.div 
                      className="inline-flex p-2 rounded-full bg-primary/10 mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="h-4 w-4 text-primary" />
                    </motion.div>
                    <p className="text-sm font-medium text-foreground mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Additional <span className="text-primary">Technologies</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, index) => (
              <motion.span 
                key={index} 
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -3, scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
