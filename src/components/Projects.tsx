import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { ExternalLink, Cloud, Server, Database, Container, Activity, GitBranch, Code2, Text, Building, Shield } from "lucide-react";

const projects = [
  {
    title: "OpenStack Cloud Infrastructure",
    description: "Architected and deployed a production-grade virtualized cloud on CentOS 8 Stream supporting 100+ concurrent VMs with 256GB RAM, 80 CPU cores, and 2.4TB storage.",
    tags: ["OpenStack", "CentOS", "Nova", "Neutron", "Keystone"],
    year: "2024",
    degree: "BTech",
    icon: Cloud,
    highlights: [
      "70% reduction in VM provisioning time",
      "50% reduction in infrastructure downtime",
      "Integrated 8+ OpenStack core services"
    ],
    github: "https://github.com/brahmanyasudulagunta/OpenstackProject"
  },
  {
    title: "Interactive Text Summarization",
    description: "AI-powered text summarization tool using NLP techniques for extractive and abstractive summarization of complex documents and articles.",
    tags: ["Python", "NLP", "AI/ML", "Text Processing", "Flask"],
    year: "2024",
    degree: "BTech",
    icon: Text,
    highlights: [
      "Extractive & abstractive summarization",
      "Support for multiple document formats",
      "Interactive web interface for analysis"
    ],
    github: "https://github.com/brahmanyasudulagunta/Interactive-Text-Summarization"
  },
  {
    title: "DevPlatform — K8s Infrastructure Provisioning",
    description: "CI-driven platform provisioning secure Kubernetes namespaces via Git self-service with Terraform and Jenkins. Automated environment isolation with resource quotas and policy guardrails.",
    tags: ["Terraform", "Jenkins", "Ansible", "Kubernetes", "RBAC"],
    year: "2026",
    degree: "Masters",
    icon: Building,
    highlights: [
      "Multi-environment (dev/staging/prod) automation",
      "12-stage Jenkins pipeline with policy enforcement",
      "Self-service namespace provisioning workflow"
    ],
    github: "https://github.com/brahmanyasudulagunta/DevPlatform"
  },
  {
    title: "gitops — CI Pipeline & IDP Application",
    description: "Integrated CI/CD pipeline with security scanning and an Internal Developer Platform (IDP) featuring a FastAPI backend and React frontend for managing Kubernetes infrastructure.",
    tags: ["FastAPI", "React", "Jenkins", "Trivy", "Docker"],
    year: "2026",
    degree: "Masters",
    icon: GitBranch,
    highlights: [
      "Automated Trivy security scans in CI",
      "Full-stack IDP for platform management",
      "Secure production promotion workflow"
    ],
    github: "https://github.com/brahmanyasudulagunta/gitops"
  },
  {
    title: "gitops-prod — GitOps Deployment Manifests",
    description: "Single source of truth for K8s deployments using ArgoCD and a canary promotion strategy across development, staging, and production environments for automated synchronization.",
    tags: ["ArgoCD", "Kubernetes", "GitOps", "Canary", "YAML"],
    year: "2026",
    degree: "Masters",
    icon: Container,
    highlights: [
      "ArgoCD bridge for automated sync & self-healing",
      "Canary deployment strategy in develop",
      "Environment-specific resource optimization"
    ],
    github: "https://github.com/brahmanyasudulagunta/gitops-prod"
  },
  {
    title: "Metrics-Dashboard — DevOps Monitoring Dashboard",
    description: "Real-time observability platform with PromQL explorer, container stats, and system metrics visualization.",
    tags: ["React", "FastAPI", "Prometheus", "cAdvisor", "TypeScript"],
    year: "2025",
    degree: "Masters",
    icon: Activity,
    highlights: [
      "Real-time system & container monitoring",
      "Custom PromQL query explorer",
      "JWT-secured API with rate limiting"
    ],
    github: "https://github.com/brahmanyasudulagunta/Metrics-Dashboard"
  },
  {
    title: "Autonomous LLM DevOps Agent",
    description: "Multi-agent autonomous CI pipeline including Planner, Tester, Executor, Failure Analyzer, and Healer agents that collaborate to auto-generate and fix tests using LLMs.",
    tags: ["Python", "LLM", "Agentic AI", "Pytest", "SSE"],
    year: "2025",
    degree: "Masters",
    icon: Code2,
    highlights: [
      "5 specialized LLM agents for CI automation",
      "SSE-based real-time UI for pipeline monitoring",
      "Automated test generation and gap healing"
    ],
    github: "https://github.com/brahmanyasudulagunta/autonomous-llm-devops-agent"
  },
  {
    title: "Nginx-Application — High-Availability Stack",
    description: "Multi-container application with Nginx load balancing across multiple app instances, triple database backend (PostgreSQL, MySQL, Redis), and automated backup pipelines.",
    tags: ["Nginx", "Docker Compose", "PostgreSQL", "MySQL", "Redis"],
    year: "2025",
    degree: "Masters",
    icon: Database,
    highlights: [
      "Load-balanced multi-replica Flask backend",
      "Automated hourly DB backup pipelines",
      "Kubernetes manifests for cloud deployment"
    ],
    github: "https://github.com/brahmanyasudulagunta/Nginx-Application"
  },
  {
    title: "Automated Infrastructure — IaC VM Provisioning",
    description: "End-to-end VM lifecycle automation using Terraform with libvirt provider and Ansible for automated configuration, monitoring, and security hardening.",
    tags: ["Terraform", "Ansible", "KVM", "libvirt", "Linux", "IaC"],
    year: "2025",
    degree: "Masters",
    icon: Server,
    highlights: [
      "Infrastructure as Code for libvirt KVM",
      "Ansible-driven OS and Docker setup",
      "Automated Node Exporter integration"
    ],
    github: "https://github.com/brahmanyasudulagunta/automated_infra"
  },
  {
    title: "Gemini GenAI Chatbot",
    description: "AI chatbot built with React + Vite, integrated with Gemini Flash API for real-time generative responses. Containerized with Docker and automated via Jenkins CI/CD pipeline.",
    tags: ["React", "Vite", "Docker", "Jenkins", "CI/CD", "Gemini API"],
    year: "2025",
    degree: "Masters",
    icon: Shield,
    highlights: [
      "Real-time message handling with Gemini API",
      "Jenkins CI/CD for automated image builds",
      "Optimized Docker container deployment"
    ],
    github: "https://github.com/brahmanyasudulagunta/gemini-gen-ai-chatbot"
  }
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
              className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Top border accent matching skill cards style */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div className="flex items-start gap-4 mb-4 mt-1">
                <motion.div
                  className="p-3 bg-primary/10 rounded-xl shrink-0 border border-primary/20 shadow-sm"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="h-5 w-5 text-primary" />
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-sm font-semibold text-foreground truncate pr-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-sm border border-primary/20">
                        {project.degree}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors ml-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mt-1.5">
                    {project.description}
                  </p>
                </div>
              </div>

              {project.highlights && (
                <ul className="space-y-1.5 mb-5 pl-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 group/item">
                      {/* Fixed blue dot to match dark blue theme */}
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1 shrink-0 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></span>
                      <span className="group-hover/item:text-foreground/90 transition-colors leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2 border-t border-border/50">
                {project.tags.slice(0, 5).map((tag, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="text-[10px] px-2 py-0.5 bg-muted/60 text-muted-foreground border border-border/50 font-normal hover:bg-primary/20 hover:border-primary/30 hover:text-primary transition-colors rounded-md"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 5 && (
                  <span className="text-[10px] text-muted-foreground px-1 py-0.5 mt-0.5">+{project.tags.length - 5}</span>
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
