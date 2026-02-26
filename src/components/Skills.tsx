import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Server, Network, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { Card3D } from "./animations/Card3D";

const skills = [
  {
    icon: Cloud,
    title: "Containerization & GitOps",
    skills: [
      { name: "Kubernetes", level: 90 },
      { name: "Docker", level: 95 },
      { name: "ArgoCD", level: 85 },
      { name: "kind", level: 85 },
      { name: "Docker Compose", level: 90 },
      { name: "Helm / YAML", level: 85 },
    ],
    color: "from-primary/80 to-primary",
  },
  {
    icon: Server,
    title: "Infrastructure & Cloud",
    skills: [
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 85 },
      { name: "OpenStack", level: 95 },
      { name: "Linux / CentOS", level: 90 },
      { name: "KVM / libvirt", level: 85 },
      { name: "Google Cloud", level: 80 },
    ],
    color: "from-primary/80 to-primary",
  },
  {
    icon: Network,
    title: "CI/CD & Automation",
    skills: [
      { name: "Jenkins", level: 90 },
      { name: "Bash/Shell", level: 95 },
      { name: "GitHub Actions", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Git", level: 95 },
      { name: "Infrastructure as Code", level: 90 },
    ],
    color: "from-primary/80 to-primary",
  },
  {
    icon: Activity,
    title: "Observability & Security",
    skills: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 85 },
      { name: "Nginx", level: 85 },
      { name: "RBAC", level: 90 },
      { name: "NetworkPolicies", level: 80 },
      { name: "OPA Guardrails", level: 75 },
    ],
    color: "from-primary/80 to-primary",
  },
];

const additionalSkills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React & Vite",
  "FastAPI",
  "Flask",
  "PostgreSQL",
  "MySQL",
  "Redis",
  "AI/ML",
  "LLM Integration",
  "Gemini API",
  "Pytest",
  "SSE streaming",
  "ChromaDB",
  "Vector Databases",
  "Wireshark",
  "Network Topologies (VXLAN)",
  "VS Code & PyCharm",
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
