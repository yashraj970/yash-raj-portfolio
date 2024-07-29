import Projects from "@/components/Projects/Projects";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full py-10">
      <h2 className="w-11/12 mx-auto pb-2 text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Projects portfolio
      </h2>
      <div>
        <Projects />
      </div>
    </div>
  );
};

export default page;
