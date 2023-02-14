import React from "react";
import Section from "./Section";

function HomeWork() {
  return (
    <Section>
      <div className="flex flex-col gap-[20px] w-full">
        <h2>Work</h2>
        <div>
          <h3>Merokket.id - Web Developer Freelance</h3>
          <h4>March 2021-present</h4>
          <ul className="pt-[10px] list-disc flex flex-col gap-[5px]">
            <li>
              Write modern, performant, maintainable code for in-house and
              client websites.
            </li>
            <li>
              Manually tested sites in various browsers and mobile devices to
              ensure cross-browser compatibility and responsiveness.
            </li>
            <li>
              Work with a variety of different languages, platforms, frameworks,
              and content management systems such as JavaScript, React, Next,
              WordPress, and Shopify.
            </li>
            <li>
              Handling all verbal and written communications between hosting
              companies, clients, and vendors.
            </li>
            <li>
              Meeting with the prospective clients to review website, and gather
              the client&lsquo;s specifications for new or existing websites.
            </li>
            <li>
              Preparing multiple designs and wireframes for clients approval
              before proceeding with development.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium">
            Saweria.co - Frontend Developer Internship
          </h3>
          <h4 className="">June 2022 - August 2022</h4>
          <ul className="pt-[10px] list-disc flex flex-col gap-[5px]">
            <li>
              Co-develop new streaming overlay, allowing user to spin the wheel
              of prizes after receiving certain amount of donation.
            </li>
            <li>
              Add new feature, allowing user to convert list of transaction into
              table for easier tracking.
            </li>
            <li>
              Make changes in cashing out page, allowing user to select either
              eWallet / Bank transfer to cash out.
            </li>
            <li>Limit maximum character for notification in donation page.</li>
            <li>Adjust UI to make FAQ into accordion for easier navigation.</li>
            <li>Adjust UI validations for minimum donation page.</li>
            <li>Adjust UI to show bank name in list of transaction.</li>
            <li>Other UI changes to improve ease of use or visual.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default HomeWork;
