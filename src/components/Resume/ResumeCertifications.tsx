"use client";

import { motion } from "framer-motion";
import { Award, CalendarRange } from "lucide-react";

// Define the certification type
type Certification = {
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

export default function ResumeCertifications() {
  // Sample certification data - replace with your own
  const certifications: Certification[] = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "Dec 2022",
      url: "https://aws.amazon.com/certification/",
    },
    {
      name: "Professional Frontend Developer",
      issuer: "Meta",
      date: "Aug 2021",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    },
    {
      name: "React Certification",
      issuer: "React Training",
      date: "Mar 2020",
      url: "https://reacttraining.com",
    },
  ];

  return (
    <div className="space-y-3">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`${
            index !== certifications.length - 1 ? "border-b pb-3" : ""
          }`}
        >
          <div className="flex items-center mb-1">
            <Award className="h-4 w-4 mr-1 text-primary" />
            <h4 className="font-semibold text-sm">
              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline"
                >
                  {cert.name}
                </a>
              ) : (
                cert.name
              )}
            </h4>
          </div>

          <div className="flex justify-between items-center text-xs text-muted-foreground">
            <span>{cert.issuer}</span>
            <div className="flex items-center">
              <CalendarRange className="h-3 w-3 mr-1" />
              {cert.date}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
