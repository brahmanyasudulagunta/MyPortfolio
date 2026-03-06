import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, Mail } from "lucide-react";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { useToast } from "@/components/ui/use-toast"; // Assuming Shadcn Toast is setup

const Connect = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const email = "sudulaguntabrahmanyaasrit@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast({
      title: "Email copied!",
      description: "Looking forward to connecting with you.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="connect" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedTitle className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </AnimatedTitle>

          <motion.p
            className="text-muted-foreground text-lg mb-10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm currently exploring new grad and entry-level opportunities in Cloud, DevOps, and Platform Engineering. Whether you have a question or just want to say hi, my inbox is always open!
          </motion.p>

          <motion.div
            className="inline-flex items-center justify-center p-1 rounded-2xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center bg-card rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center gap-3 px-6 py-4 border-r border-border bg-muted/30">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium sm:text-lg text-sm">{email}</span>
              </div>
              <button
                onClick={handleCopy}
                className="px-6 py-4 flex items-center justify-center bg-primary/10 hover:bg-primary/20 transition-colors text-primary min-w-[100px]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-medium">Copied!</span>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Copy className="h-5 w-5" />
                    <span className="text-sm font-medium">Copy</span>
                  </motion.div>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
