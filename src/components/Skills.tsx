import { motion } from "motion/react";
import { TiltCard } from "./TiltCard";
import { Code2, Database, Layout, Terminal } from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-8 h-8 text-[#4285F4]" />, // Google Blue
    items: ["React.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "JavaScript"],
  },
  {
    category: "Backend",
    icon: <Database className="w-8 h-8 text-[#34A853]" />, // Google Green
    items: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    category: "Languages",
    icon: <Code2 className="w-8 h-8 text-[#FBBC05]" />, // Google Yellow
    items: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Tools & Others",
    icon: <Terminal className="w-8 h-8 text-[#EA4335]" />, // Google Red
    items: ["Git", "GitHub", "VS Code", "Data Structures", "Algorithms"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A curated stack of tools and technologies I use to build premium digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard animatedGlow className="p-8 h-full flex flex-col">
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block w-fit">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">{skill.category}</h3>
                <ul className="space-y-3 mt-auto">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-400 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
