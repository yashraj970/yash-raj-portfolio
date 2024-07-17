"use client";
import { useTheme } from "next-themes";
import React from "react";

const HeroBanner = () => {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <div>
      <img
        src={dark ? "/images/developer-dark.svg" : "/images/developer.svg"}
        alt="Developer"
        className="sqD squiggle-hero-pop1"
      />
    </div>
  );
};

export default HeroBanner;
