import React from "react";

function Section({ children, ...props }) {
  return (
    <div
      className={`flex justify-between items-center w-full px-4 md:px-0 max-w-[500px] md:max-w-[640px] lg:max-w-[840px] xl:max-w-[980px] 2xl:max-w-[1280px] ${props.className}`}
    >
      {children}
    </div>
  );
}

export default Section;
