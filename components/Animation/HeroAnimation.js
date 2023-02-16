import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Image from "next/image";
import { bgGrid } from "./BgGrid";
import useWindowSize from "../../hooks/UseWindowSize";

const size = {
  text: "text-[40px] lg:text-[48px]",
  textBigger: "text-[45px] lg:text-[56px]",
  outline: "text-transparent text-stroke",
};

const nineTopLine = "here to create";
const nineMidLine = "YOUR";
const nineBotLine = "web experience";

function words(children) {
  return children.split(" ");
}

const popIn = {
  start: { opacity: 1 },
  end: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "linear",
      delay: 0.4,
    },
  },
};

const popUpContainerOne = {
  start: { opacity: 0 },
  end: {
    opacity: 1,

    transition: { staggerChildren: 0.15, delayChildren: 0 },
  },
};
const popUpContainerTwo = {
  start: { opacity: 0 },
  end: {
    opacity: 1,

    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};
const popUpContainerThree = {
  start: { opacity: 0 },
  end: {
    opacity: 1,

    transition: { staggerChildren: 0.15, delayChildren: 0.75 },
  },
};
const popUpSpan = {
  start: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const sceneOne = (setScene) => {
  return (
    <motion.h1
      key="one"
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: "linear",
          delay: 0.8,
        },
      }}
      className={`${size["text"]}`}
      onAnimationComplete={() => setScene("two")}
    >
      Hi
    </motion.h1>
  );
};
const sceneTwo = (setScene) => {
  return (
    <motion.h1
      key="two"
      variants={popIn}
      initial="start"
      animate="end"
      className={`${size["text"]}`}
      onAnimationComplete={() => setScene("three")}
    >
      How are you?
    </motion.h1>
  );
};
const sceneThree = (setScene) => {
  return (
    <motion.h1
      key="three"
      variants={popIn}
      initial="start"
      animate="end"
      className={`${size["text"]}`}
      onAnimationComplete={() => setScene("four")}
    >
      Great!
    </motion.h1>
  );
};
const sceneFour = (setScene) => {
  return (
    <motion.h1
      key="four"
      variants={popIn}
      initial="start"
      animate="end"
      className={`${size["text"]}`}
      onAnimationComplete={() => setScene("five")}
    >
      I am
    </motion.h1>
  );
};
const sceneFive = (setScene) => {
  return (
    <motion.h1
      key="five"
      variants={popIn}
      initial="start"
      animate="end"
      className={`${size["text"]}`}
      onAnimationComplete={() => setScene("six")}
    >
      Jeremy Wijanto
    </motion.h1>
  );
};
const sceneSix = (setScene) => {
  return (
    <div>
      <motion.h1
        key="top1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.6 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
        onAnimationComplete={() => setScene("seven")}
      >
        Jeremy Wijanto
      </motion.h1>
      <motion.h1
        key="top2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.4 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
      >
        Jeremy Wijanto
      </motion.h1>
      <motion.h1
        key="top3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.2 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
      >
        Jeremy Wijanto
      </motion.h1>

      <h1 key="mid" className={`${size["text"]}`}>
        Jeremy Wijanto
      </h1>

      <motion.h1
        key="bot1"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.2 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
      >
        Jeremy Wijanto
      </motion.h1>
      <motion.h1
        key="bot2"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.4 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
      >
        Jeremy Wijanto
      </motion.h1>
      <motion.h1
        key="bot3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.6 },
        }}
        className={`${size["text"]} ${size["outline"]}`}
      >
        Jeremy Wijanto
      </motion.h1>
    </div>
  );
};
const sceneSeven = (setScene) => {
  return (
    <div className="relative">
      <div className="">
        <h1 key="top1" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>
        <h1 key="top2" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>
        <h1 key="top3" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>

        <h1 key="mid" className={`${size["text"]}`}>
          Jeremy Wijanto
        </h1>

        <h1 key="bot1" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>
        <h1 key="bot2" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>
        <h1 key="bot3" className={`${size["text"]} ${size["outline"]}`}>
          Jeremy Wijanto
        </h1>
      </div>
      <motion.div
        key="head-topleft"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.2 },
        }}
        className="absolute aspect-[0.8235] w-[60px] top-[10px] rotate-[10deg] z-[-10]"
      >
        <Image
          src="/about/head.png"
          alt="head"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        key="head-topright"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.6 },
        }}
        className="absolute aspect-[0.8235] w-[60px] top-[25px] right-[20px] rotate-[-30deg]"
      >
        <Image
          src="/about/head.png"
          alt="head"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        key="head-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.7 },
        }}
        onAnimationComplete={() => setScene("eight")}
        className="absolute aspect-[0.8235] w-[80px] top-[150px] right-[120px] rotate-[10deg] z-[-10]"
      >
        <Image
          src="/about/head.png"
          alt="head"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        key="head-botleft"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0.4 },
        }}
        className="absolute aspect-[0.8235] w-[60px] top-[280px] left-[20px] rotate-[40deg]"
      >
        <Image
          src="/about/head.png"
          alt="head"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.div
        key="head-botright"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "linear", delay: 0 },
        }}
        className="absolute aspect-[0.8235] w-[60px] top-[330px] right-[40px] rotate-[-10deg] z-[-10]"
      >
        <Image
          src="/about/head.png"
          alt="head"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  );
};
const sceneEight = (setScene) => {
  return (
    <motion.h1
      key="eight"
      variants={popIn}
      initial="start"
      animate="end"
      className={`${size["text"]} flex flex-col`}
      onAnimationComplete={() => setScene("nine")}
    >
      <span className={`${size["textBigger"]}`}>Frontend</span>
      <span className="mt-[-20px]">Developer</span>
    </motion.h1>
  );
};
const sceneNine = (setScene) => {
  return (
    <div className="flex flex-col">
      <motion.h1
        key="nineTop"
        className={`overflow-hidden flex justify-center font-normal ${size["text"]}`}
        variants={popUpContainerOne}
        initial="start"
        animate="end"
      >
        {words(nineTopLine).map((word, index) => (
          <motion.span className="mr-[10px]" key={index} variants={popUpSpan}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        key="nineMid"
        className={`overflow-hidden flex justify-center py-[20px] ${size["textBigger"]}`}
        variants={popUpContainerTwo}
        initial="start"
        animate="end"
      >
        {words(nineMidLine).map((word, index) => (
          <motion.span className="mr-[10px]" key={index} variants={popUpSpan}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
      <motion.h1
        key="nineBot"
        className={`overflow-hidden flex justify-center font-normal ${size["text"]}`}
        variants={popUpContainerThree}
        initial="start"
        animate="end"
        onAnimationComplete={() => setScene("ten")}
      >
        {words(nineBotLine).map((word, index) => (
          <motion.span className="mr-[10px]" key={index} variants={popUpSpan}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};
const sceneTen = (setScene) => {
  return (
    <div className="text-center">
      <motion.h1
        key="top1"
        variants={popIn}
        initial="start"
        animate="end"
        onAnimationComplete={() => setScene("eleven")}
        className={`${size["textBigger"]}`}
      >
        Responsive
      </motion.h1>
      <motion.h1
        key="top2"
        variants={popIn}
        initial="start"
        animate="end"
        className={`${size["textBigger"]} ${size["outline"]} py-[15px]`}
      >
        Exceptional
      </motion.h1>
      <motion.h1
        key="top3"
        variants={popIn}
        initial="start"
        animate="end"
        className={`${size["textBigger"]} ${size["outline"]}`}
      >
        Functional
      </motion.h1>
    </div>
  );
};
const sceneEleven = (setScene) => {
  return (
    <div className="text-center">
      <motion.h1
        key="top4"
        className={`${size["textBigger"]} ${size["outline"]}`}
      >
        Responsive
      </motion.h1>
      <motion.h1
        key="top5"
        variants={popIn}
        initial="start"
        animate="end"
        onAnimationComplete={() => setScene("twelve")}
        className={`${size["textBigger"]} py-[15px]`}
      >
        Exceptional
      </motion.h1>
      <motion.h1
        key="top6"
        className={`${size["textBigger"]} ${size["outline"]}`}
      >
        Functional
      </motion.h1>
    </div>
  );
};
const sceneTwelve = (setScene) => {
  return (
    <div className="text-center">
      <motion.h1
        key="top1"
        className={`${size["textBigger"]} ${size["outline"]}`}
      >
        Responsive
      </motion.h1>
      <motion.h1
        key="top2"
        className={`${size["textBigger"]} py-[15px] ${size["outline"]}`}
      >
        Exceptional
      </motion.h1>
      <motion.h1
        key="top3"
        variants={popIn}
        initial="start"
        animate="end"
        onAnimationComplete={() => setScene("thirteen")}
        className={`${size["textBigger"]}`}
      >
        Functional
      </motion.h1>
    </div>
  );
};
const sceneThirteen = (setScene) => {
  return (
    <div className="text-center">
      <motion.h1
        key="thirteen"
        variants={popIn}
        initial="start"
        animate="end"
        onAnimationComplete={() => setScene("fourteen")}
        className={`${size["text"]}`}
      >
        You name it!
      </motion.h1>
    </div>
  );
};
const sceneFourteen = (setScene, isMobile) => {
  console.log({ isMobile });
  return (
    <motion.div
      key="fourteen"
      initial={{
        x: 0,
        y: 0,
      }}
      animate={{
        y: isMobile ? 140 : 165,
        x: isMobile ? 115 : 140,
        scale: 0.25,
        transition: {
          duration: 0.6,
        },
      }}
      onAnimationComplete={() => setScene("fifteen")}
      className="relative w-[200px] aspect-square"
    >
      <Image src="/jw-icon.png" alt="jw icon" fill className="object-contain" />
    </motion.div>
  );
};
const sceneFifteen = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{
          opacity: 0,
          transform: "scale(0, 0)",
          originX: 1,
          originY: 1,
        }}
        animate={{
          opacity: 1,
          transform: "scale(1, 1)",
          originX: 1,
          originY: 1,
          transition: { duration: 0.3 },
        }}
      >
        {bgGrid()}
      </motion.div>
      <div className="absolute w-[50px] aspect-square bottom-[10px] right-[10px]">
        <Image src="/jw-icon.png" alt="icon" fill className="object-contain" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.5 } }}
        className="absolute top-0 lg:left-[-20px]"
      >
        <h3 className="font-bold">Hi, my name is</h3>
        <h1 className="lg:text-[48px]">Jeremy Wijanto</h1>
        <p className="font-bold pt-[10px] lg:w-[440px]">
          a Frontend Developer specializing in creating responsive, exceptional,
          and functional web experience
        </p>
        <p className="hidden lg:flex flex-wrap w-[400px] pt-[5px] opacity-80">
          ReactJs / NextJs / HTML / CSS / JavaScript / TailwindCSS / ChakraUI /
          FramerMotion / REST API / AJAX / Recoil / SWR
        </p>
      </motion.div>
    </div>
  );
};

function HeroAnimation() {
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 1024;
  const [scene, setScene] = useState("one");
  const renderScene = (scene, isMobile) => {
    switch (scene) {
      case "one":
        return <motion.div>{sceneOne(setScene)}</motion.div>;
      case "two":
        return <motion.div>{sceneTwo(setScene)}</motion.div>;
      case "three":
        return <motion.div>{sceneThree(setScene)}</motion.div>;
      case "four":
        return <motion.div>{sceneFour(setScene)}</motion.div>;
      case "five":
        return <motion.div>{sceneFive(setScene)}</motion.div>;
      case "six":
        return <motion.div>{sceneSix(setScene)}</motion.div>;
      case "seven":
        return <motion.div>{sceneSeven(setScene)}</motion.div>;
      case "eight":
        return <motion.div>{sceneEight(setScene)}</motion.div>;
      case "nine":
        return <motion.div>{sceneNine(setScene)}</motion.div>;
      case "ten":
        return <motion.div>{sceneTen(setScene)}</motion.div>;
      case "eleven":
        return <motion.div>{sceneEleven(setScene)}</motion.div>;
      case "twelve":
        return <motion.div>{sceneTwelve(setScene)}</motion.div>;
      case "thirteen":
        return <motion.div>{sceneThirteen(setScene)}</motion.div>;
      case "fourteen":
        return <motion.div>{sceneFourteen(setScene, isMobile)}</motion.div>;
      case "fifteen":
        return <motion.div>{sceneFifteen(setScene)}</motion.div>;
      default:
        return null;
    }
  };
  return (
    <AnimateSharedLayout>
      <AnimatePresence>{renderScene(scene, isMobile)}</AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default HeroAnimation;
