import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedTitle } from "./animations/AnimatedSection";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Copy, MapPin, Send, Github, Linkedin, Mail } from "lucide-react";

const Connect = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sudulaguntabrahmanyaasrit@gmail.com");
    toast({
      title: "Email copied!",
      description: "My email address has been copied to your clipboard.",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "5360a754-5560-468b-b39d-2fd74d6708bc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Something went wrong.",
          description: data.message || "Failed to send the message. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="py-24 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column: Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col flex-1"
          >
            <p className="text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              SAY HELLO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-md mb-12">
              Actively seeking full-time Cloud, DevOps, and Platform Engineering roles. Open to industry and applied infrastructure positions.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {/* Email Box */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-border/60 bg-secondary/20">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <a href="mailto:sudulaguntabrahmanyaasrit@gmail.com" className="text-primary hover:underline font-medium">
                    sudulaguntabrahmanyaasrit@gmail.com
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-secondary rounded-md"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>

              {/* Location Box */}
              <div className="flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-secondary/20">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">Lubbock, TX — open to relocation & remote</span>
              </div>
            </div>



            {/* Availability Box */}
            <div className="p-5 rounded-2xl border border-[#1a2e22] bg-[#0c1813] max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.6)] animate-pulse" />
                <span className="font-semibold text-green-500/90 text-sm tracking-wide">Available May 2026</span>
              </div>
              <p className="text-sm text-green-500/70 leading-relaxed">
                Available for full-time roles. Authorized to work in the US on OPT (STEM OPT eligible).
              </p>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center lg:pl-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md ml-auto">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-muted-foreground pl-1">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="bg-card border-transparent focus-visible:ring-1 focus-visible:border-border focus-visible:ring-primary/30 h-12 px-4 shadow-sm rounded-xl text-sm"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-muted-foreground pl-1">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-card border-transparent focus-visible:ring-1 focus-visible:border-border focus-visible:ring-primary/30 h-12 px-4 shadow-sm rounded-xl text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-muted-foreground pl-1">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role or opportunity..."
                  className="min-h-[160px] resize-none bg-card border-transparent focus-visible:ring-1 focus-visible:border-border focus-visible:ring-primary/30 p-4 shadow-sm rounded-xl text-sm"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-sm font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-sm flex gap-2 items-center justify-center transition-colors"
                disabled={isSubmitting}
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Connect;
