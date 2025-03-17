"use client";

import { motion } from "framer-motion";
import { CalendarRange, GraduationCap } from "lucide-react";

// Define the education type
type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
};

export default function ResumeEducation() {
  // Sample education data - replace with your own
  const education: Education[] = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2014 - 2016",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies",
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Washington",
      location: "Seattle, WA",
      period: "2010 - 2014",
      description:
        "Minor in User Experience Design. Dean's List all semesters.",
    },
  ];

  return (
    <div className="space-y-4">
      {education.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${index !== education.length - 1 ? "border-b pb-4" : ""}`}
        >
          <div className="flex items-center mb-1">
            <GraduationCap className="h-4 w-4 mr-1 text-primary" />
            <h4 className="font-semibold">{edu.degree}</h4>
          </div>

          <div className="text-sm text-muted-foreground mb-1">
            {edu.institution} • {edu.location}
          </div>

          <div className="flex items-center text-xs text-muted-foreground mb-1">
            <CalendarRange className="h-3 w-3 mr-1" />
            {edu.period}
          </div>

          {edu.description && (
            <p className="text-sm text-muted-foreground mt-1">
              {edu.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
