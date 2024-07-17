import React from "react";

const HeroBanner = () => {
  return (
    <div>
      {/* <img
        src={activeTheme === "dark" ? developerLight : developerDark}
        alt="Developer"
      /> */}
      <img
        src={"/images/developer.svg"}
        alt="Developer"
        className="sqD squiggle-hero-pop1"
      />
    </div>
  );
};

export default HeroBanner;
