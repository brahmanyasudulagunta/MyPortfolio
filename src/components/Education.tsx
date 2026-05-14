import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, StaggerContainer, StaggerItem } from "./animations/AnimatedSection";

const education = [
  {
    school: "Texas Tech University",
    degree: "Master of Science in Computer Science",
    location: "TX, USA",
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
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">BACKGROUND</p>
          <h2 className="text-4xl font-bold mb-3">Education</h2>
          <div className="w-12 h-px bg-primary/50 mt-6" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 w-full">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors flex flex-col h-full"
            >
              {/* Header: School and Date */}
              <div className="flex justify-between items-start mb-1.5">
                <h3 className="text-lg font-bold text-foreground">{edu.school}</h3>
                <span className="text-[11px] text-muted-foreground shrink-0 mt-1">{edu.period}</span>
              </div>
              
              {/* Degree */}
              <p className="text-sm font-medium text-primary mb-6">{edu.degree}</p>

              {/* Location */}
              <p className="text-xs text-muted-foreground mb-4">{edu.location}</p>

              {/* GPA */}
              <p className="text-xs mb-8">
                <span className="text-muted-foreground mr-1.5">GPA</span>
                <span className="font-semibold text-foreground/90">{edu.gpa}</span>
              </p>

              {/* Coursework */}
              <div className="mt-auto">
                <p className="text-[11px] text-muted-foreground mb-3">Relevant Courses</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-secondary/60 border border-border/80 rounded-md text-[11px] text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {course}
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

export default Education;
