import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    animate={props.isOpen ? "open" : "closed"}
    {...props}
  />
);

export const MenuToggle = ({ toggle, isOpen }) => (
  <button
    onClick={toggle}
    className="outline-none border-0 cursor-pointer absolute top-[10px] right-0 w-[60px] h-[60px] rounded-full flex items-center justify-center"
  >
    <svg width="28" height="28" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        isOpen={isOpen}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        isOpen={isOpen}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        isOpen={isOpen}
      />
    </svg>
  </button>
);
