import React from "react";
import DraggableIcon from "./DraggableIcon";

const Card = ({ title, status, ...dragHandleProps }) => {
  return (
    <div
      className={`bg-[#242730] rounded-md px-[10px] py-[16px] flex justify-between items-center gap-2 mb-2`}
      {...dragHandleProps}
    >
      <p className="break-all">{title}</p>
      <div>
        <DraggableIcon />
      </div>
    </div>
  );
};

export default Card;
