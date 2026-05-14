import { GlowingGrid, ParticleField, FloatingOrb } from "./animations/FloatingElements";

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-[-1] overflow-hidden bg-background">
      {/* Background Orbs */}
      <FloatingOrb className="top-[-10%] left-[-10%] bg-primary/20" size="w-[600px] h-[600px]" delay={0} />
      <FloatingOrb className="bottom-[-10%] right-[-10%] bg-primary/10" size="w-[500px] h-[500px]" delay={2} />
      <FloatingOrb className="top-[30%] right-[10%] bg-blue-500/10" size="w-[400px] h-[400px]" delay={4} />
      
      {/* Grid and Particles */}
      <GlowingGrid className="opacity-60" />
      <ParticleField count={40} />
      
      {/* Noise or Grain effect could be added here if needed */}
    </div>
  );
};

export default Background;
