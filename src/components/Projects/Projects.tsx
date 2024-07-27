import React from "react";
import { ThreeDCardDemo } from "./3D-Card";
import { projects } from "@/data/globalData";

const Projects = () => {
  return (
    <div>
      <h1 className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pt-20">
        Few of my favorite projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ThreeDCardDemo
            key={index}
            title={project?.title}
            src={project?.src}
            description={project?.description}
            liveLink={project?.liveLink}
            github={project?.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
