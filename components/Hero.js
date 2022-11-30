import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Section from "./Section";

const hOne = "Hi, I'm Jeremy";
const hTwo = "Frontend Developer";

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
    x: -400,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const scaling = {
  hidden: { scale: 1.3, x: 100 },
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
  return (
    <>
      <p>helloworld</p>
    </>
  );
}

function Hero() {
  const [loading, setLoading] = useState(true);
  return (
    <AnimateSharedLayout type="crossfade">
      <Section>
        <motion.div className="relative h-[90vh] w-full">
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
