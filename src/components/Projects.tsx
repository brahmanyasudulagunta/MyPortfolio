import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { ExternalLink, Cloud, Server, Database, Container, Activity, GitBranch, Code2, Text, Building, Shield } from "lucide-react";

const projects = [
  // 2026 Projects
  {
    title: "DevPlatform — K8s Infrastructure Provisioning",
    description: "Self-service infrastructure platform that provisions secure Kubernetes namespaces via Git. Automated isolation with resource quotas, RBAC, and Terraform-driven pipeline.",
    tags: ["Terraform", "Jenkins", "Ansible", "Kubernetes", "RBAC"],
    year: "2026",
    degree: "Masters",
    icon: Building,
    highlights: [
      "Multi-environment (dev/prod) isolation with NetworkPolicies",
      "CI guardrails blocking destructive commands via OPA",
      "Self-service namespace provisioning via PR workflow"
    ],
    github: "https://github.com/brahmanyasudulagunta/DevPlatform"
  },
  {
    title: "gitops — Platform Control Plane & IDP",
    description: "Internal Developer Platform (IDP) serving as the platform control plane. Replaces auto-push with an approval-based workflow for infrastructure and application governance.",
    tags: ["FastAPI", "React", "Jenkins", "PostgreSQL", "Docker"],
    year: "2026",
    degree: "Masters",
    icon: GitBranch,
    highlights: [
      "Full-stack IDP for tracking infra requests and statuses",
      "Approval-based GitOps matching enterprise standards",
      "Admin dashboard for reviewing namespace/app requests"
    ],
    github: "https://github.com/brahmanyasudulagunta/gitops"
  },
  {
    title: "gitops-prod — GitOps Deployment Manifests",
    description: "The single source of truth for K8s deployments. Used by ArgoCD to watch and automatically synchronize manifests to ensure the cluster matches Git definitions.",
    tags: ["ArgoCD", "Kubernetes", "GitOps", "Canary", "YAML"],
    year: "2026",
    degree: "Masters",
    icon: Container,
    highlights: [
      "ArgoCD bridge for automated sync & self-healing",
      "Automated develop syncs & manual production gates",
      "Environment-specific resource optimization & tracking"
    ],
    github: "https://github.com/brahmanyasudulagunta/gitops-prod"
  },
  // 2025 Projects
  {
    title: "Metrics-Dashboard — DevOps Monitoring",
    description: "Full-stack observability platform enabling real-time metric tracking of systems and containers using Prometheus, cAdvisor, Node Exporter, and a custom PromQL UI.",
    tags: ["React", "FastAPI", "Prometheus", "cAdvisor", "TypeScript"],
    year: "2025",
    degree: "Masters",
    icon: Activity,
    highlights: [
      "Real-time system & container stats and logs",
      "Custom integrated PromQL query explorer",
      "JWT-secured API backed by PostgreSQL"
    ],
    github: "https://github.com/brahmanyasudulagunta/Metrics-Dashboard"
  },
  {
    title: "Autonomous LLM DevOps Agent",
    description: "A multi-agent autonomous CI pipeline utilizing LLMs. The suite contains specialized Planner, Tester, Executor, and Healer agents to auto-generate and repair application tests.",
    tags: ["Python", "LLM", "Agentic AI", "Pytest", "SSE"],
    year: "2025",
    degree: "Masters",
    icon: Code2,
    highlights: [
      "5 specialized LLM agents for CI automation capabilities",
      "SSE-based real-time UI for viewing pipeline execution",
      "Coverage-driven test generation and failure healing"
    ],
    github: "https://github.com/brahmanyasudulagunta/autonomous-llm-devops-agent"
  },
  {
    title: "Nginx-Application — High-Availability Stack",
    description: "Multi-container application with Nginx load balancing across multiple Flask instances, backed by a resilient triple database architecture (PostgreSQL, MySQL, Redis).",
    tags: ["Nginx", "Docker Compose", "PostgreSQL", "MySQL", "Redis"],
    year: "2025",
    degree: "Masters",
    icon: Database,
    highlights: [
      "Load-balanced multi-replica Flask container cluster",
      "Automated hourly DB backup and restore pipelines",
      "Kubernetes deployment manifests included"
    ],
    github: "https://github.com/brahmanyasudulagunta/Nginx-Application"
  },
  {
    title: "Automated Infrastructure — IaC VM Prov.",
    description: "Complete infrastructure automation framework to provision Linux virtual machines hosted under KVM with libvirt using Terraform and Ansible.",
    tags: ["Terraform", "Ansible", "KVM", "libvirt", "Linux", "IaC"],
    year: "2025",
    degree: "Masters",
    icon: Server,
    highlights: [
      "Infrastructure as Code VM provisioning with libvirt",
      "Ansible-driven OS hardening and package installations",
      "Automated Node Exporter configuration for monitoring"
    ],
    github: "https://github.com/brahmanyasudulagunta/automated_infra"
  },
  {
    title: "Gemini GenAI Chatbot",
    description: "Frontend responsive chatbot interface utilizing React and Vite, directly integrated with the Google Gemini Flash API for rapid, real-time generative responses.",
    tags: ["React", "Vite", "Docker", "Jenkins", "CI/CD", "Gemini API"],
    year: "2025",
    degree: "Masters",
    icon: Shield,
    highlights: [
      "Real-time conversational handling with Gemini API",
      "Jenkins CI/CD for automated image builds & pushes",
      "Optimized Docker container deployment architecture"
    ],
    github: "https://github.com/brahmanyasudulagunta/gemini-gen-ai-chatbot"
  },
  // 2024 Projects
  {
    title: "OpenStack Cloud Infrastructure",
    description: "Architected and deployed a production-grade virtualized cloud on CentOS 8 Stream supporting 100+ concurrent VMs with 256GB RAM, 80 CPU cores, and 2.4TB storage.",
    tags: ["OpenStack", "CentOS", "Nova", "Neutron", "Keystone"],
    year: "2024",
    degree: "BTech",
    icon: Cloud,
    highlights: [
      "70% reduction in VM provisioning time via Horizon",
      "Isolated multi-tier network topologies with Neutron",
      "Integrated 8+ core OpenStack cloud services"
    ],
    github: "https://github.com/brahmanyasudulagunta/OpenstackProject"
  },
  {
    title: "Interactive Text Summarization",
    description: "AI-powered text summarization platform built dynamically using NLP techniques to provide state-of-the-art extractive and abstractive summarization of complex documents.",
    tags: ["Python", "NLP", "AI/ML", "Text Processing", "Flask"],
    year: "2024",
    degree: "BTech",
    icon: Text,
    highlights: [
      "Hybrid extractive and abstractive summarization logic",
      "Processing support for diverse text file formats",
      "Interactive web interface for end-user text processing"
    ],
    github: "https://github.com/brahmanyasudulagunta/Interactive-Text-Summarization"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">PORTFOLIO</p>
          <h2 className="text-4xl font-bold mb-3 text-foreground">Featured Projects</h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group p-6 flex flex-col rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300"
            >
              {/* Header: Dots and Github Link */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5b52c0]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9c5188]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d45]" />
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Body: Title and Description */}
              <div className="mb-6 flex-1">
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 bg-secondary border border-border/80 text-muted-foreground rounded-full font-medium"
                  >
                    {tag}
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

export default Projects;
