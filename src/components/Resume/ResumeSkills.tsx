"use client";

import { motion } from "framer-motion";

// Define skill categories
type SkillCategory = {
  name: string;
  skills: string[];
};

export default function ResumeSkills() {
  // Sample skills data - replace with your own
  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML/CSS",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      name: "Backend",
      skills: [
        "Node.js",
        "Express",
        "REST APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      name: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Responsive Design",
        "Performance Optimization",
        "SEO",
      ],
    },
  ];

  return (
    <div className="space-y-4">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <h4 className="font-medium text-sm">{category.name}</h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
