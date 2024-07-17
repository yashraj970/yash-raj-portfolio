"use client";
import Lottie from "lottie-react";
import developer from "../../../public/animation/Developer.json";

const HeroBanner = () => {
  return (
    <div>
      <Lottie animationData={developer} loop={true} />
    </div>
  );
};

export default HeroBanner;
