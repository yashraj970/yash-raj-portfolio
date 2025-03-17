import { Download, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ResumeExperience from "@/components/Resume/ResumeExperience";
import ResumeEducation from "@/components/Resume/ResumeEducation";
import ResumeSkills from "@/components/Resume/ResumeSkills";
import ResumeCertifications from "@/components/Resume/ResumeCertifications";
import PrintResume from "@/components/Resume/PrintResume";

export default function ResumePage() {
  return (
    <div className="bg-muted/30 min-h-screen pb-20">
      {/* Header with download button */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-12 border-b">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                My Resume
              </h1>
              <p className="text-muted-foreground mt-2">
                Full Stack Developer & UI/UX Enthusiast
              </p>
            </div>
            <div className="flex gap-3">
              <PrintResume />
              <Button variant="default">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main resume content */}
      <div className="container px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Personal info & Skills */}
          <div className="space-y-8">
            {/* Profile card */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-6 flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background mb-4">
                  <Image
                    src="/images/footerIcons/portfolio.jpg"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold">Yash Raj</h2>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Patna, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:john@example.com"
                      className="text-primary hover:underline"
                    >
                      itsyashraj970@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="tel:+919708880486"
                      className="text-primary hover:underline"
                    >
                      +91 970 888 0486
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Skills</h3>
                <ResumeSkills />
              </div>
            </div>

            {/* Education */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ResumeEducation />
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <ResumeCertifications />
              </div>
            </div>
          </div>

          {/* Right column - Experience & Projects */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground">
                  Passionate and innovative Full Stack Developer with 5+ years
                  of experience building scalable web applications and
                  interactive user experiences. Specialized in React, Next.js,
                  and Node.js with a strong foundation in UI/UX principles.
                  Committed to writing clean, maintainable code and staying
                  current with emerging technologies.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-6">Work Experience</h3>
                <ResumeExperience />
              </div>
            </div>

            {/* Projects */}
            <div className="bg-card rounded-xl border shadow-sm overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Featured Projects</h3>

                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">
                        E-commerce Platform
                      </h4>
                      <Link
                        href="https://example.com/project1"
                        target="_blank"
                        className="text-primary text-sm hover:underline"
                      >
                        View Project
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Built a full-featured e-commerce platform with Next.js,
                      Tailwind CSS, and Stripe integration. Implemented cart
                      functionality, user authentication, and product
                      management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Next.js
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Tailwind CSS
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Stripe
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Vercel
                      </span>
                    </div>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">
                        Task Management App
                      </h4>
                      <Link
                        href="https://example.com/project2"
                        target="_blank"
                        className="text-primary text-sm hover:underline"
                      >
                        View Project
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Developed a collaborative task management application with
                      real-time updates using React, Firebase, and Tailwind CSS.
                      Features include task assignment, due dates, and team
                      collaboration.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        React
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Firebase
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold">
                        Portfolio Website
                      </h4>
                      <Link
                        href="/"
                        className="text-primary text-sm hover:underline"
                      >
                        View Project
                      </Link>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Designed and developed a personal portfolio website using
                      Next.js and Tailwind CSS. Implemented animations,
                      responsive design, and optimized performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Next.js
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Tailwind CSS
                      </span>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Framer Motion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
