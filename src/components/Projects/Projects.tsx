import React from "react";
import { ThreeDCardDemo } from "./3D-Card";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ThreeDCardDemo />
        <ThreeDCardDemo />
        <ThreeDCardDemo />
      </div>
    </div>
  );
};

export default Projects;
