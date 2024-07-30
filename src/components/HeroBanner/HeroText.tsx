import React from "react";
import { FlipWords } from "../ui/flip-words";

const HeroText = () => {
  const words = ["interactive", "dynamic", "modern", "beautiful"];

  return (
    <div className="flex flex-col justify-center items-center px-0 sm:px-2">
      <p className="text-2xl my-5">Hey, I&apos;m Yash.</p>
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mx-auto text-neutral-800 dark:text-neutral-300">
        I enjoy <span className="text-fun">building</span>
        <br />
        <FlipWords words={words} /> web applications.
      </div>
    </div>
  );
};

export default HeroText;
