import React, { Children } from "react";

function FlexCenter({ children, ...props }) {
  return <div className={`flex justify-center ${props}`}>{children}</div>;
}

export default FlexCenter;
