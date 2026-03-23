import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const education = [
  {
    school: "Texas Tech University",
    degree: "Master of Science in Computer Science",
    location: "Lubbock, TX, USA",
    period: "Aug 2024 - Present",
    gpa: "3.5/4.0",
    coursework: ["Advanced Operating Systems", "Information and Computer Security", "Cloud Infrastructure Management"],
  },
  {
    school: "Vellore Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    location: "Vellore, India",
    period: "Sep 2020 - Jun 2024",
    gpa: "8.35/10",
    coursework: ["Cloud Computing", "Networking", "Data Warehouse and Data Mining"],
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">ACADEMICS</p>
          <h2 className="text-4xl font-bold mb-3">Education</h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </div>
        
        <StaggerContainer className="w-full space-y-6">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <div className="mb-6">
                <Card className="bg-card border-border hover:border-primary/30 transition-colors shadow-none rounded-xl">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary rounded-lg">
                        <GraduationCap className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-2xl mb-1">{edu.school}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                              {edu.degree}
                            </CardDescription>
                          </div>
                          <span 
                            className="text-sm text-foreground whitespace-nowrap px-3 py-1 bg-secondary rounded-full border border-border"
                          >
                            {edu.period}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 ml-16">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">{edu.location}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="font-medium text-foreground">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <motion.span 
                              key={i} 
                              className="px-3 py-1 bg-secondary border border-border rounded-full text-xs text-foreground"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Education;
