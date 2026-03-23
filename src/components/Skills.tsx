import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Container & GitOps",
    skills: ["Kubernetes", "Docker", "ArgoCD", "kind", "Docker Compose", "Helm", "YAML"],
  },
  {
    title: "Infra & Cloud",
    skills: ["Terraform", "Ansible", "OpenStack", "Linux / CentOS", "KVM / libvirt", "Google Cloud", "AWS (Basic)"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "Bash / Shell", "GitHub Actions", "Git", "Infrastructure as Code"],
  },
  {
    title: "Observability & Sec",
    skills: ["Prometheus", "Grafana", "Nginx", "RBAC", "NetworkPolicies", "OPA Guardrails"],
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "React & Vite", "FastAPI", "Flask", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "AI & Specialized",
    skills: ["AI/ML", "LLM Integration", "Gemini API", "Pytest", "Vector Databases (ChromaDB)", "Wireshark", "Network Topologies"],
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
            TOOLKIT
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Skills
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Technologies, frameworks, and tools I use to build cloud infrastructure, DevOps pipelines, and intelligent systems.
          </p>
          <div className="w-16 h-0.5 bg-primary/40 mt-10" />
        </motion.div>

        {/* Skills List */}
        <div className="flex flex-col gap-10">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-4 md:gap-16 items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Left Column: Category Label */}
              <div className="md:w-56 shrink-0 mt-1.5">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Right Column: Pill Tags */}
              <div className="flex flex-wrap gap-2.5 flex-1">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3.5 py-1.5 bg-secondary border border-border/80 text-muted-foreground rounded-full text-sm font-medium hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
