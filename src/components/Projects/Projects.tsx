import React from "react";
import { ThreeDCardDemo } from "./3D-Card";

const Projects = () => {
  return (
    <div>
      <h1 className="max-w-7xl mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans pt-20">
        Few of my favorite projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ThreeDCardDemo
          title={"YesMart Ecommerce WebApp"}
          src="/images/projects/YesMart_Ecommerce.png"
          description={
            "Comprehensive ecommerce platform featuring all the essential ecommerce features."
          }
          liveLink={"https://ecommerce-web-three-nu.vercel.app/"}
          github={"https://github.com/yashraj970/YesMart-Ecommerce"}
        />
        {/* <ThreeDCardDemo
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
        /> */}
      </div>
    </div>
  );
};

export default Projects;
