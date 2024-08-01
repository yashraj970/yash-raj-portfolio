import React from "react";
import { ThreeDCardDemo } from "./3D-Card";
import { projects } from "@/data/globalData";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <ThreeDCardDemo
            key={index}
            title={project?.title}
            src={project?.src}
            description={project?.description}
            liveLink={project?.liveLink}
            github={project?.github}
            content={project?.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
