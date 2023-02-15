import React from "react";
import Section from "./Section";

function HomeWork() {
  const [work, setWork] = React.useState("merokket");
  return (
    <Section>
      <div className="flex flex-col w-full">
        <h2>Work Experience</h2>
        <div className="flex flex-col lg:flex-row pt-[20px] lg:pt-[40px]">
          <div className="w-full lg:w-[200px] flex flex-row lg:flex-col justify-around lg:justify-start gap-y-[15px] border-b lg:border-0 border-white/40">
            <div
              className={`cursor-pointer flex items-center p-[4px] justify-center w-1/2 lg:justify-start lg:w-full ${
                work === "merokket"
                  ? "bg-accent/40 border-b-[3px] border-highlight"
                  : ""
              }`}
              onClick={() => setWork("merokket")}
            >
              <p className="lg:ml-[20px]">Merokket.id</p>
            </div>
            <div
              className={`cursor-pointer flex items-center p-[4px] justify-center w-1/2 lg:justify-start lg:w-full ${
                work === "saweria"
                  ? "bg-accent/40 border-b-[3px] border-highlight"
                  : ""
              }`}
              onClick={() => setWork("saweria")}
            >
              <p className="lg:ml-[20px]">Saweria</p>
            </div>
          </div>
          <div className="w-full pt-[10px] lg:pt-0 lg:pl-[40px] 2xl:h-[400px]">
            <div
              className={`px-[4px] ${
                work === "merokket" ? "flex flex-col" : "hidden"
              }`}
            >
              <h3 className="font-medium">
                Web Developer Freelance{" "}
                <a
                  href="https://merokket.id"
                  target="_blank"
                  rel="noreferrer"
                  className="text-highlight"
                >
                  @Merokket.id
                </a>
              </h3>
              <p className="text-[12px] md:text-[14px]">March 2021 - Present</p>
              <ul className="pt-[10px] list-disc flex flex-col gap-[5px] pl-[16px] opacity-70">
                <li>
                  Develop modern, high-performance, and maintainable code for
                  both in-house and client websites, using a variety of
                  languages, platforms, frameworks, and content management
                  systems such as JavaScript, React, Next, WordPress, and
                  Shopify.
                </li>
                <li>
                  Ensure cross-browser compatibility and responsiveness of sites
                  by conducting manual testing on various browsers and mobile
                  devices.
                </li>
                <li>
                  Serve as the primary point of contact between hosting
                  companies, clients, and vendors, handling all verbal and
                  written communications to ensure a smooth and efficient
                  project process.
                </li>
                <li>
                  Meet with prospective clients to review existing websites or
                  gather specifications for new websites, ensuring that their
                  needs and goals are understood and incorporated into the
                  design and development process.
                </li>
                <li>
                  Prepare multiple designs and wireframes for client approval
                  before proceeding with development, ensuring that the end
                  product aligns with their vision and requirements.
                </li>
              </ul>
            </div>
            <div
              className={`px-[4px] ${
                work === "saweria" ? "flex flex-col" : "hidden"
              }`}
            >
              <h3 className="font-medium">
                Frontend Developer Internship{" "}
                <a
                  href="https://saweria.co"
                  target="_blank"
                  rel="noreferrer"
                  className="text-highlight"
                >
                  @Saweria
                </a>
              </h3>
              <p className="text-[12px] md:text-[14px]">
                June 2022 - August 2022
              </p>
              <ul className="pt-[10px] list-disc flex flex-col gap-[5px] pl-[16px] opacity-70">
                <li>
                  Co-developed new streaming overlay feature that allows users
                  to spin a wheel of prizes after reaching a certain donation
                  amount. Increasing streamer-viewer engagement and donation
                  tendencies.
                </li>
                <li>
                  Created a table feature for transaction tracking, improving
                  usability and functionality.
                </li>
                <li>
                  Updated cash out page to offer eWallet or bank transfer
                  options for greater flexibility.
                </li>
                <li>
                  Streamlined the donation process by limiting maximum character
                  count for notifications.
                </li>
                <li>
                  Enhanced the FAQ section with accordion-style navigation for
                  easier use.
                </li>
                <li>Improved UI validations for minimum donation page.</li>
                <li>
                  Added bank name information to transaction list for improved
                  tracking and organization.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HomeWork;
