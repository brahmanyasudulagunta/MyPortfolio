import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OpenStack Cloud Infrastructure @ NRSC, ISRO",
    description: "Architected and deployed a production-grade virtualized cloud on CentOS 8 Stream supporting 100+ concurrent VMs with 256GB RAM, 80 CPU cores, and 2.4TB storage.",
    tags: ["OpenStack", "CentOS", "Nova", "Neutron", "Keystone", "Heat"],
    year: "2024",
    highlights: [
      "70% reduction in VM provisioning time",
      "50% reduction in infrastructure downtime",
      "Integrated 8+ OpenStack core services"
    ],
    github: "https://github.com/brahmanyasudulagunta/OpenstackProject"
  },
  {
    title: "DevPlatform - GitOps Infrastructure",
    description: "Full GitOps developer platform with Terraform, Jenkins CI, Argo CD, and Kubernetes. Features Git-as-source-of-truth architecture with environment separation and RBAC security.",
    tags: ["Terraform", "Jenkins", "Argo CD", "Kubernetes", "GitOps", "HCL"],
    year: "2026",
    highlights: [
      "Terraform infrastructure provisioning",
      "Argo CD continuous deployment",
      "Multi-environment (dev/staging/prod)"
    ],
    github: "https://github.com/brahmanyasudulagunta/DevPlatform"
  },
  {
    title: "DevOps Metrics Dashboard",
    description: "Built a multi-container monitoring system using Docker Compose with Prometheus, Node Exporter, FastAPI, and a custom UI for real-time metric visualization.",
    tags: ["Docker Compose", "Prometheus", "FastAPI", "Node Exporter", "PromQL"],
    year: "2025",
    highlights: [
      "Custom FastAPI metric endpoints",
      "CPU, memory, disk, network monitoring",
      "Fully reproducible observability platform"
    ],
    github: "https://github.com/brahmanyasudulagunta/Metrics-Dashboard"
  },
  {
    title: "Linux Malware Analysis using KVM Hypervisor",
    description: "Analyzed 500+ MB of network traffic using Wireshark and tcpdump to identify malware behavior and C2 communications. Deployed isolated VMs with KVM for 100% safe malware execution.",
    tags: ["KVM", "Wireshark", "Linux", "iptables", "Snort IDS", "Shell Scripting"],
    year: "2025",
    highlights: [
      "Configured Linux firewall rules and Snort IDS",
      "Reduced false positives by 30%",
      "40% improvement in analysis efficiency"
    ]
  },
  {
    title: "Gemini GenAI Chatbot",
    description: "Built a responsive AI chatbot using React + Vite, integrated with Gemini Flash API for real-time generative responses. Containerized with Docker and automated via Jenkins CI/CD pipeline.",
    tags: ["React", "Vite", "Docker", "Jenkins", "CI/CD", "Gemini API"],
    year: "2025",
    highlights: [
      "Containerized app with optimized Dockerfile",
      "Jenkins CI/CD for automated builds and deployments",
      "Automated Docker image push to container registry"
    ],
    github: "https://github.com/brahmanyasudulagunta/gemini-gen-ai-chatbot"
  },
  {
    title: "RAG-Powered Knowledge Assistant",
    description: "Built a complete Retrieval-Augmented Generation chatbot that ingests PDFs, system log files, and local documents to generate accurate, context-aware responses.",
    tags: ["RAG", "ChromaDB", "Gemini API", "DuckDuckGo API", "Vector Search"],
    year: "2025",
    highlights: [
      "ChromaDB vector store for similarity search",
      "Hybrid retrieval: local docs + web search + LLM",
      "Modular pipeline with automated PDF parsing"
    ],
    github: "https://github.com/brahmanyasudulagunta/RAG_Chatbot"
  },
  {
    title: "Interactive Text Summarization",
    description: "AI-powered text summarization tool using NLP techniques for extractive and abstractive summarization of documents and articles.",
    tags: ["Python", "NLP", "AI/ML", "Text Processing"],
    year: "2026",
    highlights: [
      "Extractive & abstractive summarization",
      "Support for multiple document formats",
      "Interactive web interface"
    ],
    github: "https://github.com/brahmanyasudulagunta/Interactive-Text-Summarization"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <AnimatedTitle className="text-3xl md:text-4xl font-bold mb-4 text-center text-foreground">
          Featured Projects
        </AnimatedTitle>

        <motion.p
          className="text-center text-muted-foreground mb-14 max-w-xl mx-auto text-sm"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Cloud infrastructure, DevOps, and AI/ML
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group p-5 rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground leading-snug flex-1 pr-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {project.highlights && (
                <ul className="space-y-1 mb-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                      <span className="text-primary mt-0.5">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-[10px] px-2 py-0 bg-secondary text-muted-foreground border-0 font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[10px] text-muted-foreground px-1">+{project.tags.length - 4}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
