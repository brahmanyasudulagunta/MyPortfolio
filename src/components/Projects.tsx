import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { ExternalLink, Cloud, Server, Database, Container, Activity, GitBranch, Building } from "lucide-react";
import { useState } from "react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  degree: string;
  icon: any;
  highlights: string[];
  github?: string;
  image?: string;
  video?: string;
  featured?: boolean;
};

const projects: Project[] = [
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
    description: "An enterprise-grade observability platform designed for real-time system and container orchestration monitoring. Built to visualize complex PromQL queries and health metrics across multi-node clusters.",
    tags: ["React", "FastAPI", "Prometheus", "cAdvisor", "TypeScript", "PostgreSQL"],
    year: "2025",
    degree: "Masters",
    icon: Activity,
    video: "/projects/metrics.mp4",
    highlights: [
      "Real-time resource utilization tracking for Kubernetes pods and nodes",
      "Integrated custom PromQL explorer with dynamic visualization components",
      "Secure RBAC-enabled API architecture with persistent metric logging"
    ],
    github: "https://github.com/brahmanyasudulagunta/Metrics-Dashboard"
  },
  {
    title: "ListenIn — GCP Cloud Deployment",
    description: "Production deployment of a web article-to-audio platform on Google Cloud Platform. Engineered the full infrastructure stack with Docker Compose, Nginx reverse proxy with TLS termination, and automated server provisioning.",
    tags: ["GCP", "Docker Compose", "Nginx", "Let's Encrypt", "SSL/TLS", "Linux"],
    year: "2025",
    degree: "Masters",
    icon: Cloud,
    highlights: [
      "Multi-service Docker Compose orchestration with Nginx reverse proxy",
      "Automated SSL/TLS via Let's Encrypt Certbot for HTTPS endpoints",
      "Full server bootstrap script for reproducible GCP VM provisioning"
    ],
    github: "https://listenin.phanendraguptha.com/"
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

];

const Projects = () => {
  const [filter, setFilter] = useState<"All" | "Featured">("Featured");
  // Default to treating projects with media as featured
  const featuredProjects = projects.filter(p => p.video || p.image || p.featured);

  return (
    <section id="projects" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header & Filters */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">PORTFOLIO</p>
            <h2 className="text-4xl font-bold mb-3 text-foreground">Projects</h2>
            <div className="w-12 h-px bg-primary/50 mt-6" />
          </div>

          <div className="flex gap-3 bg-card border border-border/50 p-1.5 rounded-full shadow-sm">
            <button
              onClick={() => setFilter("All")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === "All" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter("Featured")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === "Featured" 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              Featured ({featuredProjects.length})
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            {filter === "All" ? (
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="group p-6 flex flex-col rounded-2xl bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 h-full"
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
                          className="text-muted-foreground hover:text-foreground transition-colors z-10 relative"
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
              </motion.div>
            ) : (
              <motion.div
                key="featured"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-20 w-full"
              >
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-14 items-center group`}
                  >
                    {/* Media Side */}
                    <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-border/30 bg-card/30 relative aspect-video shadow-2xl">
                      {project.video ? (
                        <video
                          src={project.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                         <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 border border-dashed border-border/50 rounded-2xl">No Media Highlighted</div>
                      )}
                    </div>

                    {/* Text Side */}
                    <div className="w-full lg:w-2/5 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary w-fit mb-6 text-xs font-bold tracking-wider uppercase border border-primary/20">
                        <project.icon className="w-4 h-4" />
                        Featured Demo
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-4 mb-10">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex gap-4 items-start">
                             <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0 opacity-80" />
                             <span className="text-base text-foreground/90">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs px-3.5 py-1.5 bg-secondary border border-border/80 text-muted-foreground rounded-full font-medium shadow-sm hover:bg-secondary/80 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 w-fit"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Source Code
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
