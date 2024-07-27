import React from "react";
import { ThreeDCardDemo } from "./3D-Card";

const Projects = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ThreeDCardDemo
          title={"Make things float in air"}
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description={
            "Hover over this card to unleash the power of CSS perspective"
          }
        />
        <ThreeDCardDemo
          title={"Make things float in air"}
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description={
            "Hover over this card to unleash the power of CSS perspective"
          }
        />
        <ThreeDCardDemo
          title={"Make things float in air"}
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description={
            "Hover over this card to unleash the power of CSS perspective"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
