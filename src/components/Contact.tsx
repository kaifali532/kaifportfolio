import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { Mail, Phone, Linkedin, Github as GithubIcon, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's build something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <a href="mailto:kaifali532@gmail.com" className="group flex items-center gap-6 p-6 rounded-2xl glass-panel hover:shadow-[0_0_30px_rgba(234,67,53,0.3)] transition-all">
                <div className="p-4 rounded-full bg-white/5 text-[#EA4335] group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Email</div>
                  <div className="text-lg font-medium text-white">kaifali532@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919369721926" className="group flex items-center gap-6 p-6 rounded-2xl glass-panel hover:shadow-[0_0_30px_rgba(52,168,83,0.3)] transition-all">
                <div className="p-4 rounded-full bg-white/5 text-[#34A853] group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1 uppercase tracking-wider">Phone</div>
                  <div className="text-lg font-medium text-white">+91 9369721926</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/md-kaif-8ab734264"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-panel text-gray-400 hover:text-[#4285F4] hover:shadow-[0_0_20px_rgba(66,133,244,0.4)] transition-all"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/kaifali532"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-panel text-gray-400 hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all"
              >
                <GithubIcon size={24} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard animatedGlow className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4285F4]/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#EA4335]/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FBBC05]/50 transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium flex items-center justify-center gap-2 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,168,83,0.4)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#34A853] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
