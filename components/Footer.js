import React from "react";
import Link from "next/link";
import Section from "./Section";

function Footer() {
  return (
    <Section className="text-white flex flex-col w-full items-center pt-[80px] pb-[100px]">
      <h1 className="">Get In Touch.</h1>
      <p className="max-w-[600px] text-center pt-[20px] opacity-60">
        I am always open to exploring new collaborations and projects. If you
        have a potential opportunity, a question, or just want to say hello,
        please don&lsquo;t hesitate to get in touch. I&lsquo;ll do my best to
        get back to you as soon as possible.
      </p>
      <ul className="flex gap-x-[35px] pt-[45px]">
        <li
          className={`hover:text-highlight hover:border-highlight text-accent/80 border border-accent/80 py-[4px] px-[10px] rounded-md w-[100px] flex items-center justify-center`}
        >
          <Link
            href="mailto:jpwijanto@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </Link>
        </li>
        <li
          className={`hover:text-highlight hover:border-highlight text-accent/80 border border-accent/80 py-[4px] px-[10px] rounded-md w-[100px] flex items-center justify-center`}
        >
          <Link
            href="https://www.linkedin.com/in/jeremy-wijanto-05642a109/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </Section>
  );
}

export default Footer;
