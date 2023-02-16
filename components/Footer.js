import React from "react";
import Link from "next/link";
import Section from "./Section";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

function scrollToTop() {
  if (!isBrowser()) return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <Section className="text-white flex flex-col w-full items-center pt-[80px] pb-[50px]">
      <h1 className="" id="contact">
        Get In Touch.
      </h1>
      <p className="max-w-[600px] text-center pt-[20px] opacity-60">
        I am always open to exploring new collaborations and projects. If you
        have a potential opportunity, a question, or just want to say hello,
        please don&lsquo;t hesitate to get in touch. I&lsquo;ll do my best to
        get back to you as soon as possible.
      </p>
      <ul className="flex gap-x-[15px] lg:gap-x-[35px] pt-[45px]">
        <li
          className={`hover:text-highlight hover:border-highlight text-accent/80 border border-accent/80 py-[4px] px-[10px] rounded-md w-[80px] lg:w-[100px] flex items-center justify-center`}
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
          className={`hover:text-highlight hover:border-highlight text-accent/80 border border-accent/80 py-[4px] px-[10px] rounded-md w-[80px] lg:w-[100px] flex items-center justify-center`}
        >
          <Link
            href="https://wa.me/085156989761"
            target="_blank"
            rel="noreferrer"
          >
            Whatsapp
          </Link>
        </li>
        <li
          className={`hover:text-highlight hover:border-highlight text-accent/80 border border-accent/80 py-[4px] px-[10px] rounded-md w-[80px] lg:w-[100px] flex items-center justify-center`}
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

      <p
        className="border-b cursor-pointer pt-[50px] text-[14px]"
        onClick={scrollToTop}
      >
        BACK TO TOP
      </p>
    </Section>
  );
}

export default Footer;
