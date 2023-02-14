import React from "react";

function Section({ children, ...props }) {
  return (
    <div
      className={`flex justify-between items-center w-full max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] pt-2 ${props.className}`}
    >
      {children}
    </div>
  );
}

export default Section;
