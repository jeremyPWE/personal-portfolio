import React from "react";

const size = {
  whGrid: "w-[300px] h-[350px] lg:w-[350px] lg:h-[400px]",
  whBox: "w-[50px] h-[50px] border-[1px] border-[#2B334D]",
};

export const bgGrid = () => {
  const boxes42 = Array.from({ length: 42 }).map((_, index) => (
    <div key={index} className={`${size.whBox}`} />
  ));
  const boxes56 = Array.from({ length: 56 }).map((_, index) => (
    <div key={index} className={`${size.whBox}`} />
  ));
  return (
    <>
      <div className={`${size.whGrid} flex flex-wrap gap-0 lg:hidden`}>
        {boxes42}
      </div>
      <div className={`${size.whGrid} hidden lg:flex flex-wrap gap-0`}>
        {boxes56}
      </div>
    </>
  );
};
