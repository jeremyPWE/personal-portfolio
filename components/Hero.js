import React from "react";
import HeroAnimation from "./Animation/HeroAnimation";
import Section from "./Section";

function Hero() {
  return (
    <Section>
      <div className="w-full flex items-center justify-center h-[80vh] lg:h-[75vh] mb-[10vh] lg:mb-[15vh]">
        <HeroAnimation />
      </div>
    </Section>
  );
}

export default Hero;
