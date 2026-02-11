import { motion } from "framer-motion";

interface TechBadge {
  name: string;
  color: string;
  icon: string;
}

const techStack: TechBadge[] = [
  { name: "AWS", color: "from-orange-500 to-yellow-500", icon: "☁️" },
  { name: "Kubernetes", color: "from-blue-500 to-cyan-500", icon: "⎈" },
  { name: "Docker", color: "from-blue-600 to-blue-400", icon: "🐳" },
  { name: "Terraform", color: "from-purple-600 to-purple-400", icon: "🔧" },
  { name: "Jenkins", color: "from-red-500 to-orange-500", icon: "🔨" },
  { name: "ArgoCD", color: "from-orange-600 to-red-500", icon: "🚀" },
  { name: "Python", color: "from-yellow-500 to-blue-500", icon: "🐍" },
  { name: "Linux", color: "from-yellow-600 to-yellow-400", icon: "🐧" },
];

const TechStackBadges = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          whileHover={{ 
            scale: 1.15, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className={`
            relative px-4 py-2 rounded-full 
            bg-gradient-to-r ${tech.color} 
            text-white font-medium text-sm
            shadow-lg cursor-pointer
            flex items-center gap-2
          `}
        >
          <span className="text-base">{tech.icon}</span>
          <span>{tech.name}</span>
          <motion.div
            className="absolute inset-0 rounded-full bg-white/20"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackBadges;