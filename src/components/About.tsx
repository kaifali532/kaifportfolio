import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { User, BookOpen, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A glimpse into my journey and passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <TiltCard glow className="p-8 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">Who I Am</h3>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                I am a Computer Science Engineering student with a deep passion for web development and problem-solving. 
                My journey in tech is driven by a desire to build seamless, high-performance applications that offer 
                premium user experiences. I thrive on tackling complex algorithmic challenges and continuously expanding my skill set.
              </p>
            </TiltCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard glow className="p-8 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-white font-medium">B.Tech in CSE</div>
                  <div className="text-sm text-gray-500">2021 - 2025</div>
                </div>
                <div>
                  <div className="text-white font-medium">Data Structures</div>
                  <div className="text-sm text-gray-500">Advanced Level</div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
