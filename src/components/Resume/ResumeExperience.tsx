"use client";

import { motion } from "framer-motion";
import { CalendarRange, Building2 } from "lucide-react";

// Define the experience type
type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export default function ResumeExperience() {
  // Sample experience data - replace with your own
  const experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      description: [
        "Led the development of a React-based dashboard that increased user engagement by 40%",
        "Implemented responsive designs and optimized performance, improving load times by 30%",
        "Mentored junior developers and conducted code reviews to ensure high code quality",
        "Collaborated with UX designers to implement intuitive user interfaces and experiences",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained multiple web applications using React, Node.js, and MongoDB",
        "Implemented RESTful APIs and GraphQL endpoints for client-side consumption",
        "Reduced server response time by 25% through database optimization and caching strategies",
        "Participated in agile development processes, including daily stand-ups and sprint planning",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Solutions",
      location: "Seattle, WA",
      period: "Jun 2016 - Feb 2018",
      description: [
        "Built responsive websites for clients using HTML, CSS, JavaScript, and jQuery",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Maintained and updated existing client websites and applications",
        "Assisted in troubleshooting and resolving bugs and technical issues",
      ],
    },
  ];

  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${
            index !== experiences.length - 1 ? "border-b pb-8" : ""
          }`}
        >
          <div className="flex flex-col sm:flex-row justify-between mb-2">
            <h4 className="text-lg font-semibold">{exp.title}</h4>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarRange className="h-4 w-4 mr-1" />
              {exp.period}
            </div>
          </div>

          <div className="flex items-center text-muted-foreground mb-3">
            <Building2 className="h-4 w-4 mr-1" />
            <span>
              {exp.company} • {exp.location}
            </span>
          </div>

          <ul className="space-y-2 text-muted-foreground">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
