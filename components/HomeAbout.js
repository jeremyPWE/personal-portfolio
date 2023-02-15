import Image from "next/image";
import React from "react";
import Section from "./Section";

function HomeAbout() {
  return (
    <Section className="pb-[150px]">
      <div className="flex flex-col w-full" id="about">
        <h2 className="">About Me</h2>
        <div className="flex flex-col justify-center items-center lg:flex-row lg:pt-[40px]">
          <div className="relative lg:hidden w-[340px] aspect-[1.39]">
            <Image
              src="/about/jeremy-small-white.png"
              alt="image of jeremy"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col w-full gap-[15px] border-white border-2 lg:border-0 lg:mt-0 -mt-[1px] bg-[#242730] text-white lg:bg-inherit lg:text-white/70 p-[20px] lg:p-0 rounded-md">
            <p>
              Hi there, my name is Jeremy Wijanto, I am a self-taught frontend
              developer with a strong passion for creating exceptional
              accessible digital experiences. My journey in coding began in 2019
              when I discovered the endless possibilities of web development.
              Since then, I have dedicated myself to learning everything I can
              about web development, including the latest technologies and
              programming languages.
            </p>
            <p>
              I have 2+ years of experience as a web development freelancer at
              Merokket.id, where I&lsquo;ve built and maintained responsive,
              fast-loading, and user-friendly websites. I also have 3 months of
              internship experience as a frontend developer at Saweria, where I
              co-developed a streaming overlay and learn many other things.
            </p>
            <p>Some technical skills I have been working on:</p>
            <p className="-mt-[10px]">
              ReactJs / NextJs / HTML / CSS / JavaScript / TailwindCSS /
              ChakraUI / FramerMotion / RESTAPI / AJAX / Recoil / SWR
            </p>
          </div>
          <div className="relative lg:w-[500px] lg:aspect-[1.040] xl:mr-[70px] xl:-mt-[80px] group active:animate-tiltShaking hover:animate-tiltShaking">
            <Image
              src="/about/jeremy-bgw.png"
              alt="image of jeremy"
              fill
              className="object-contain"
            />
            <div className="hidden group-hover:flex absolute top-[45px] left-[90px] 2xl:top-[52px] 2xl:left-[100px] rotate-[-3deg] bg-accent text-white px-[30px] lg:py-[2px] 2xl:py-[4px] items-center justify-center font-bold text-[18px]">
              JEREMY
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HomeAbout;
