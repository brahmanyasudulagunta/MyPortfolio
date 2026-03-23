import { motion } from "framer-motion";
import { Play } from "lucide-react";

const experience = [
  {
    title: "Cloud Infrastructure Intern",
    company: "National Remote Sensing Centre (NRSC), ISRO",
    location: "Hyderabad, India",
    period: "Jan 2024 - May 2024",
    type: "Internship",
    achievements: [
      "Architected and deployed a production-grade virtualized cloud using OpenStack on CentOS 8 Stream, enabling support for 100+ concurrent virtual machines.",
      "Configured 8+ OpenStack core services (Nova, Neutron, Cinder) demonstrating full-stack proficiency in cloud infrastructure.",
      "Achieved 70% reduction in manual VM provisioning time by implementing self-service automated stack templates using Heat.",
      "Designed multi-tier network topologies using Neutron with VXLAN encapsulation and Open vSwitch for secure routing."
    ],
    skills: ["OpenStack", "CentOS", "Nova", "Neutron", "Heat", "Python"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden text-foreground">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Header matching the screenshot exactly */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">WORK</p>
          <h2 className="text-4xl font-bold mb-3">Experience</h2>
          <p className="text-muted-foreground">Industry internships and research positions.</p>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-primary/20 ml-2 md:ml-4 space-y-12 pb-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              {/* Card matching the screenshot */}
              <div className="p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors">
                
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[11px] font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground font-medium mb-6">{exp.location}</p>

                {/* Achievements */}
                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground/80 leading-relaxed group">
                      <Play className="h-3 w-3 mt-1 shrink-0 text-primary opacity-80" fill="currentColor" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-[11px] px-3 py-1 bg-secondary text-muted-foreground rounded-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
