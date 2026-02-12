import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { Card3D } from "./animations/Card3D";

const experience = [
  {
    title: "Cloud Intern",
    company: "National Remote Sensing Centre (NRSC), ISRO",
    location: "Hyderabad, India",
    period: "Jan 2024 - May 2024",
    achievements: [
      "Architected and deployed a production-grade virtualized cloud using OpenStack Yoga on CentOS 8 Stream, hosted on a high-performance server (256 GB RAM, 80 CPU cores, 2.4 TB storage), enabling support for 100+ concurrent virtual machines",
      "Configured and integrated 8+ OpenStack core services (Nova, Neutron, Cinder, Glance, Keystone, Horizon, Heat, Swift), demonstrating full-stack proficiency in cloud infrastructure management",
      "Achieved 70% reduction in manual VM provisioning time by implementing self-service provisioning via Horizon dashboard and automated stack templates using OpenStack Heat",
      "Designed multi-tier network topologies using Neutron with VXLAN encapsulation and Open vSwitch, enabling isolated tenant networks with secure routing",
      "Secured platform access with RBAC via Keystone, SSH key pair authentication, and custom security groups, cutting unauthorized access attempts by 40%",
      "Created and managed a pool of custom VM images and snapshots for Windows, CentOS, and Ubuntu, improving environment provisioning repeatability",
      "Deployed monitoring and logging mechanisms for real-time visibility, reducing infrastructure downtime by over 50% during testing"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </AnimatedTitle>

        <StaggerContainer className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <StaggerItem key={index}>
              <Card3D>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 bg-primary/10 rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 hsl(var(--primary) / 0)",
                            "0 0 0 8px hsl(var(--primary) / 0.1)",
                            "0 0 0 0 hsl(var(--primary) / 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Briefcase className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-2xl mb-1">{exp.title}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                              {exp.company}
                            </CardDescription>
                          </div>
                          <motion.span
                            className="text-sm text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full bg-primary/10 text-primary"
                            whileHover={{ scale: 1.05 }}
                          >
                            {exp.period}
                          </motion.span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 ml-4 md:ml-16">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-muted-foreground group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.span
                            className="mr-3 mt-1 flex-shrink-0"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                          </motion.span>
                          <span className="text-sm leading-relaxed group-hover:text-foreground transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Card3D>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Experience;
