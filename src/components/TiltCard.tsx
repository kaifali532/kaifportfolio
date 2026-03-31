import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  animatedGlow?: boolean;
}

export function TiltCard({ children, className, glow = false, animatedGlow = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    setRotateX(yPct * -15);
    setRotateY(xPct * 15);
    
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        scale: glare.opacity > 0 ? 1.02 : 1,
        transformPerspective: 1000,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "relative rounded-2xl transition-all duration-300 group",
        glow && !animatedGlow && "hover:shadow-[0_0_40px_rgba(66,133,244,0.4)]",
        animatedGlow ? "p-[1px]" : "glass-panel border border-white/10",
        className
      )}
    >
      {animatedGlow && (
        <>
          {/* Blurred outer glow halo - Google Colors */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500">
            <div className="absolute inset-[-100%] animate-spin-gradient bg-[conic-gradient(from_0deg,#4285F4_0%,#EA4335_25%,#FBBC05_50%,#34A853_75%,#4285F4_100%)]" />
          </div>
          {/* Sharp inner border - Google Colors */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-[-100%] animate-spin-gradient bg-[conic-gradient(from_0deg,#4285F4_0%,#EA4335_25%,#FBBC05_50%,#34A853_75%,#4285F4_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Main background */}
          <div className="absolute inset-[1px] rounded-2xl bg-[#050505]/95 backdrop-blur-3xl z-0" />
        </>
      )}
      
      <div className={cn("relative z-10 h-full", animatedGlow && "rounded-2xl overflow-hidden")}>
        {children}
        
        {/* Light Reflection Glare Effect */}
        <div 
          className="pointer-events-none absolute inset-0 z-50 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, transparent 50%)`,
            mixBlendMode: 'overlay'
          }}
        />
      </div>
    </motion.div>
  );
}
