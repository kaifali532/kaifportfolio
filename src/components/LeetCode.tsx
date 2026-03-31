import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { Code, Trophy, Target, Zap } from "lucide-react";

export function LeetCode() {
  return (
    <section id="leetcode" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Problem Solving</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Consistent practice and algorithmic thinking on LeetCode.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard animatedGlow className="p-8 md:p-12 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#EA4335]/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#FBBC05]/20 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-[#EA4335]/10 text-[#EA4335] mb-6">
                  <Code size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">LeetCode Profile</h3>
                <p className="text-gray-400 mb-8">@alikaif4508</p>
                
                <a
                  href="https://leetcode.com/u/alikaif4508/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,67,53,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#EA4335] to-[#FBBC05] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <span className="relative z-10">View Full Profile</span>
                </a>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
                  <Trophy className="w-8 h-8 text-[#FBBC05] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">300+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Problems Solved</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
                  <Target className="w-8 h-8 text-[#34A853] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">Top 15%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Contest Rating</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5 col-span-2 flex items-center justify-center gap-4">
                  <Zap className="w-8 h-8 text-[#4285F4]" />
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">Consistent</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Daily Active</div>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
