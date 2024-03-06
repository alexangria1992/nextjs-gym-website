import React from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto h-full  border-green-300 border-2">
        {/* Slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
