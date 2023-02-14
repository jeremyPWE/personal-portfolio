import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Section from "./Section";

const hOne = "Hi, I'm Jeremy";
const hTwo = "I'm a Frontend Developer";
const hThree =
  "ReactJs / NextJs / HTML / CSS / JavaScript / TailwindCSS / ChakraUI / FramerMotion / REST API / AJAX / Recoil / SWR";
const hFour = `I'm a Frontend Developer specializing in  (and sometimes designing) exceptional and accessible digital experiences.`;
const hFive = "Hi, my name is";
const hSix = "Jeremy Wijanto";
function words(children) {
  return children.split(" ");
}

const parent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 1.45, delayChildren: 0.04 },
  },
  exit: {
    opacity: 0,
    y: -80,
    x: -400,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const scaling = {
  hidden: { scale: 1.3, x: 200 },
  visible: {
    scale: 1,
    x: 0,
    transition: { delay: 1.15, ease: "linear" },
  },
};
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,

    transition: { staggerChildren: 0.18, delayChildren: 0.04 },
  },
};
const child = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const fadeIn = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.7,
      ease: "easeInOut",
      staggerChildren: 0.6,
      delayChildren: 0.6,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const slideUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    y: 200,
  },
};

function Loader({ setLoading }) {
  return (
    <div className="py-[100px] h-[75vh] w-full items-center justify-center flex flex-col gap-[240px]">
      <motion.div
        variants={parent}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <motion.div variants={scaling}>
          <motion.h1 className="overflow-hidden flex" variants={container}>
            {words(hOne).map((word, index) => (
              <motion.span className="mr-[10px]" key={index} variants={child}>
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <motion.h1
          className="overflow-hidden flex justify-center"
          variants={container}
        >
          {words(hTwo).map((word, index) => (
            <motion.span className="mr-[10px]" key={index} variants={child}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    </div>
  );
}

function Banner() {
  const typeWriter = " hello world";
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCurrentText((value) => value + typeWriter.charAt(index));
      setIndex(index + 1);
    }, 300);
  }, [currentText]);
  return (
    <div className="py-[100px] h-[75vh] w-full items-center flex relative">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute left-0 top-[20vh] flex flex-col"
      >
        <p>{hFive}</p>
        <h2>{hSix}</h2>
        <h3 className="w-[700px] pb-[20px] ">{hFour}</h3>
        <div className="w-[400px] text-gray-600">
          <motion.p
            className="flex flex-wrap overflow-hidden"
            variants={container}
          >
            {words(hThree).map((word, index) => (
              <motion.span className="mr-[10px]" key={index} variants={child}>
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="absolute right-0 top-[17vh] overflow-hidden"
      >
        <motion.div
          variants={slideUp}
          className="relative w-[500px] box-shadow-sm"
        >
          <div className="text-[#CACACA] bg-[#3C3C3C] flex justify-center py-[2px] rounded-t-md">
            <p>JW Studio Code</p>
          </div>
          <div className="text-[#CACACA] bg-[#252526] flex items-center py-[2px]">
            <div className="pl-[20px] w-[140px] bg-[#2D2D2D] h-full flex relative">
              <span className="font-bold pr-[5px] text-yellow-200 opacity-60">
                JS
              </span>
              <p>Hello.js</p>
              <span className="flex items-center pl-[25px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[16px] h-[16px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className="bg-[#1E1E1E] h-[260px] rounded-b-md z-[-10]">
            <div className="py-[10px] px-[15px]">
              <span className="text-[#A06DA0]">import </span>
              <span className="text-[#88DCFE]">React </span>
              <span className="text-[#A06DA0]">from </span>
              <span className="text-[#B0643C]">&lsquo;react&lsquo; </span>
              <span className="text-white">;</span>
              <br />
              <br />
              <span className="text-[#3784C3]">function </span>
              <span className="text-[#DEE078]">Hello</span>
              <span className="text-[#E7C448]">{`( )`}</span>
              <span className="text-[#E7C448]">&nbsp;&nbsp;&nbsp;{`{`}</span>
              <br />
              <span className="text-[#A06DA0] pl-[20px]"> return</span>
              <span className="text-[#E7C448]">&nbsp;&nbsp;{`(`}</span> <br />
              <div className="flex items-center">
                <span className="text-[#3784C3] pl-[35px]">{`<p>`}</span>
                <span className="text-white">{currentText}</span>
                <div className="bg-white h-[16px] w-[2px] animate-blinking " />
                <span className="text-[#3784C3]">{`</p>`}</span>
              </div>
              <span className="text-[#E7C448] pl-[20px]">{`)`}</span>
              <br />
              <span className="text-[#E7C448]">{`}`}</span>
              <br />
              <br />
              <span className="text-[#A06DA0]">export default </span>
              <span className="text-[#DEE078]">Hello</span>
              <span className="text-white">;</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function Hero() {
  const [loading, setLoading] = useState(true);
  return (
    <AnimateSharedLayout type="crossfade">
      <Section>
        <motion.div className="relative h-[70vh] w-full">
          <AnimatePresence>
            {loading ? (
              <motion.div key="loader" className="w-full absolute left-0 top-0">
                <Loader setLoading={setLoading} />
              </motion.div>
            ) : (
              <motion.div className="w-full absolute left-0 top-0">
                <Banner />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Section>
    </AnimateSharedLayout>
  );
}

export default Hero;
