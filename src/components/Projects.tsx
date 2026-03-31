import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Health Checker",
    description: "A system that analyzes user health inputs and provides insights or suggestions for better well-being.",
    tech: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/kaifali532/Health-Checker",
    demo: "#",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Expense Tracker",
    description: "A comprehensive web app to track daily expenses, manage personal finances, and visualize spending habits.",
    tech: ["React", "Tailwind CSS", "Chart.js", "Firebase"],
    github: "https://github.com/kaifali532/expense-tracker",
    demo: "#",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "AI Powered Trip Planner",
    description: "An AI-based application that generates optimized travel plans, itineraries, and recommendations.",
    tech: ["React", "OpenAI API", "Next.js", "Tailwind CSS"],
    github: "https://github.com/kaifali532/AI-Powered-Trip-Planner",
    demo: "#",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent projects, blending clean design with robust engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TiltCard animatedGlow className="h-full flex flex-col group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                    >
                      <Github size={18} />
                      Source
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4285F4] hover:text-[#34A853] transition-colors flex items-center gap-2 text-sm font-medium ml-auto"
                    >
                      Live Demo
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
