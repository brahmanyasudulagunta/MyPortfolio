import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © 2025 Brahmanya Asrit Sudulagunta. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/Ashrith2727" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/brahmanyasudulagunta" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:bsudulag@ttu.edu" 
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
