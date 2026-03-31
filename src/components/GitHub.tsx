import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { Github as GithubIcon, GitBranch, Star, Users } from "lucide-react";

export function GitHub() {
  return (
    <section id="github" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Open Source</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contributions and repositories on GitHub.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard animatedGlow className="p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#4285F4]/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#34A853]/20 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/10 text-white mb-6">
                  <GithubIcon size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">GitHub Profile</h3>
                <p className="text-gray-400 mb-8">@kaifali532</p>
                
                <a
                  href="https://github.com/kaifali532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 font-medium text-black bg-white rounded-full transition-all hover:scale-105"
                >
                  View Repositories
                </a>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
                  <GitBranch className="w-8 h-8 text-[#4285F4] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Repositories</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5">
                  <Star className="w-8 h-8 text-[#FBBC05] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">100+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Stars Earned</div>
                </div>
                <div className="glass-panel p-6 rounded-2xl text-center border border-white/5 col-span-2 flex items-center justify-center gap-4">
                  <Users className="w-8 h-8 text-[#EA4335]" />
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">Active</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Contributions</div>
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
