import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  { prompt: "$ kubectl get pods -n production", output: "NAME                    READY   STATUS    RESTARTS   AGE\napi-server-7b4f8d9     1/1     Running   0          2d\nfrontend-app-5c8d2     1/1     Running   0          1d" },
  { prompt: "$ terraform apply -auto-approve", output: "Apply complete! Resources: 12 added, 0 changed, 0 destroyed." },
  { prompt: "$ docker ps --format 'table {{.Names}}'", output: "NAMES\nprometheus\ngrafana\nnode-exporter" },
  { prompt: "$ git push origin main && argocd sync", output: "✓ Synced successfully to production cluster" },
  { prompt: "$ helm upgrade --install monitoring", output: "Release 'monitoring' has been upgraded. Happy Helming!" },
];

const TerminalTyping = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedPrompt, setDisplayedPrompt] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const command = commands[currentIndex];
    let charIndex = 0;
    setDisplayedPrompt("");
    setShowOutput(false);
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (charIndex < command.prompt.length) {
        setDisplayedPrompt(command.prompt.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTimeout(() => setShowOutput(true), 300);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % commands.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card/90 backdrop-blur-md border border-primary/20 rounded-xl p-6 font-mono text-sm w-full shadow-2xl shadow-primary/10"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        <div className="w-3.5 h-3.5 rounded-full bg-red-500/90" />
        <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/90" />
        <div className="w-3.5 h-3.5 rounded-full bg-green-500/90" />
        <span className="ml-3 text-muted-foreground text-xs font-medium tracking-wide">brahmanya@cloud:~</span>
      </div>
      
      <div className="space-y-2 min-h-[120px]">
        <div className="flex items-start">
          <span className="text-primary font-medium">{displayedPrompt}</span>
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="w-2.5 h-5 bg-primary ml-0.5 rounded-sm"
            />
          )}
        </div>
        
        <AnimatePresence>
          {showOutput && (
            <motion.pre
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-green-400/80 text-xs whitespace-pre-wrap leading-relaxed pl-2 border-l-2 border-green-500/30"
            >
              {commands[currentIndex].output}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TerminalTyping;