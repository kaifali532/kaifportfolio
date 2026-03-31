import { motion } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* Background Image with Heavy Blur */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        {/* Animated Gradient Overlay - Google Colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/10 via-[#EA4335]/5 to-[#FBBC05]/10 animate-gradient-shift mix-blend-overlay" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-300 tracking-wide"
        >
          CSE Student | DSA Enthusiast | Web Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8"
        >
          Md Kaif
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#34A853] font-medium">high-performance</span> web applications and solving <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EA4335] to-[#FBBC05] font-medium">complex algorithmic challenges</span>. 
          Passionate about clean code and premium user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(66,133,244,0.4)]"
          >
            {/* Animated border for button - Google Colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 font-medium text-black bg-white rounded-full transition-all hover:scale-105 hover:bg-gray-200"
          >
            <span className="flex items-center gap-2">
              <Mail size={18} />
              Contact Me
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
