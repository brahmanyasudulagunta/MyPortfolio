import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";
import { Card3D } from "./animations/Card3D";

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
    <section id="education" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
        </AnimatedTitle>
        
        <StaggerContainer className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <StaggerItem key={index}>
              <Card3D>
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow/20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="p-3 bg-primary/10 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-2xl mb-1">{edu.school}</CardTitle>
                            <CardDescription className="text-base font-medium text-foreground">
                              {edu.degree}
                            </CardDescription>
                          </div>
                          <motion.span 
                            className="text-sm text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full bg-muted"
                            whileHover={{ scale: 1.05 }}
                          >
                            {edu.period}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 ml-16">
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">{edu.location}</span>
                        <span className="text-muted-foreground">•</span>
                        <motion.span 
                          className="font-medium text-primary"
                          whileHover={{ scale: 1.1 }}
                        >
                          GPA: {edu.gpa}
                        </motion.span>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-2">Relevant Coursework:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <motion.span 
                              key={i} 
                              className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * i }}
                              whileHover={{ y: -2 }}
                            >
                              {course}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
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

export default Education;
