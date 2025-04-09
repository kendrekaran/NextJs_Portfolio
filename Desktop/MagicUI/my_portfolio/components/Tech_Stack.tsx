"use client"

import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, 
  SiTypescript, SiReact, SiNodedotjs, SiExpress,
  SiMongodb, SiNextdotjs
} from "react-icons/si";

interface Skill {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "React", icon: SiReact, color: "text-blue-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className="relative py-16 md:py-24 text-white w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block">
            Tech <span className="text-blue-500">Stack</span>
            <motion.div 
              className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Technologies I use to build modern web applications
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Define types for SkillCard component props
interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={item}
      whileHover={{ y: -5, scale: 1.03 }}
      className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl overflow-hidden group"
    >
      <div className="p-4 md:p-6 flex flex-col items-center justify-center h-full">
        <div 
          className={`text-4xl md:text-5xl lg:text-6xl ${skill.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
        >
          <skill.icon />
        </div>
        
        <h3 className="text-sm md:text-base font-medium text-center">{skill.name}</h3>
      </div>
    </motion.div>
  );
};

export default Skills;