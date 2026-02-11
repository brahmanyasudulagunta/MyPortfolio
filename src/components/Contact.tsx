import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedTitle, AnimatedSection } from "./animations/AnimatedSection";

const contactInfo = [
  { icon: Mail, label: "Email", value: "bsudulag@ttu.edu", href: "mailto:bsudulag@ttu.edu" },
  { icon: Phone, label: "Phone", value: "+1 (806) 283-1559", href: "tel:+18062831559" },
  { icon: MapPin, label: "Location", value: "Lubbock, TX, USA", href: null },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </AnimatedTitle>
        
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </motion.p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud infrastructure and DevOps.
                </p>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 p-3 rounded-xl hover:bg-card transition-colors">
                        <motion.div 
                          className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <item.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Status indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-emerald-500"
                />
                <span className="text-sm text-muted-foreground">
                  Currently open to new opportunities
                </span>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <Card className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="pt-6">
                <form className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <Input 
                      placeholder="Your Name" 
                      className="bg-background border-border focus:border-primary/50 transition-colors h-12"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-background border-border focus:border-primary/50 transition-colors h-12"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <Textarea 
                      placeholder="Your Message" 
                      rows={5}
                      className="bg-background border-border focus:border-primary/50 transition-colors resize-none"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base group">
                      <span>Send Message</span>
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
