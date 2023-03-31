import React from "react";
import Section from "./Section";
import { workTitle } from "./Work";
import { motion, AnimatePresence } from "framer-motion";

function HomeWork() {
  const [selectedWork, setSelectedWork] = React.useState(workTitle[0]);

  return (
    <Section>
      <div className="flex flex-col w-full min-h-[450px]" id="work">
        <h2>Work Experience</h2>
        <div className="flex flex-col lg:flex-row pt-[20px] lg:pt-[40px]">
          <ul className="w-full cursor-pointer lg:w-[220px] flex flex-row lg:flex-col justify-around lg:justify-start border-b lg:border-0 border-white/40">
            {workTitle.map((work) => (
              <li
                key={work.title}
                onClick={() => setSelectedWork(work)}
                className={`relative flex py-[8px] px-[15px] w-full ${
                  work.title === selectedWork.title ? "bg-accent/40" : ""
                }`}
              >
                {work === selectedWork ? (
                  <motion.div
                    className="highlight absolute bottom-0 lg:top-0 left-0 bg-highlight w-full h-[2px] lg:w-[4px] lg:h-full rounded-sm"
                    layoutId="highlight"
                  />
                ) : null}
                {work.title}
              </li>
            ))}
          </ul>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={selectedWork ? selectedWork.title : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full pt-[20px] lg:pt-0 lg:pl-[40px] 2xl:h-[400px]"
            >
              <h3>
                {selectedWork.description}{" "}
                <a
                  href={selectedWork.linkTo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-highlight"
                >
                  @{selectedWork.title}
                </a>
              </h3>
              <p className="text-[12px] md:text-[14px]">
                {selectedWork.period}
              </p>
              <ul className="pt-[10px] list-disc flex flex-col gap-[5px] pl-[16px] opacity-70">
                {selectedWork
                  ? selectedWork.details.map((item) => (
                      <li key={item}>{item}</li>
                    ))
                  : null}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

export default HomeWork;
