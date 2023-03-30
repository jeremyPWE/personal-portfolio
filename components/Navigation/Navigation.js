import Link from "next/link";
import Section from "../Section";
import { useState } from "react";
import { useRouter } from "next/router";

const links = [
  { name: "About", to: "/#about", id: "ABOUT US" },
  { name: "Work", to: "/#work", id: "OUR WORKS" },
  { name: "Contact", to: "/#contact", id: "CONTACT" },
];

const Navbar = ({ toggle, route, router, ...props }) => {
  return (
    <nav
      className="flex relative top-0 z-30 py-2 justify-center"
      role="navigation"
    >
      <Section>
        <div className="flex space-x-10 items-center justify-center">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px]">
            <Link href="/" passHref className="font-extrabold text-[24px]">
              <div className={props.className}>jw</div>
            </Link>
          </div>
        </div>
        <div className="flex">
          {links.map(({ name, to, id }) => (
            <Link
              key={id}
              href={to}
              passHref
              className={`p-4 hover:opacity-100 opacity-60 items-center gap-2 hidden md:flex text-[16px]`}
            >
              <div className={props.className}>{name}</div>
            </Link>
          ))}
        </div>
        <div className="cursor-pointer md:hidden" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            fill="main"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </Section>
    </nav>
  );
};

const Sidebar = ({ isOpen, toggle, route, ...props }) => {
  return (
    <div
      className={
        isOpen
          ? "fixed z-30 bg-black top-0 w-full h-full lg:hidden translate-y-0 duration-700 transform ease-out"
          : "translate-y-[-100%]"
      }
    >
      <div
        className={`absolute  top-0 right-0 z-30 w-full bg-bgCol h-full text-main overflow-hidden flex flex-col items-center justify-center`}
      >
        <div className="flex py-2 items-center w-full justify-between px-4 sm:px-0 z-10 max-w-[500px]">
          <div className="flex items-center relative w-[125px] h-[45px] md:w-[170px] md:h-[65px] xl:w-[224px] xl:h-[82px]">
            <Link href="/" passHref className="font-extrabold text-[24px]">
              <div className="text-white">jw</div>
            </Link>
          </div>

          <div className="cursor-pointer z-10 " onClick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="w-full flex flex-col h-full justify-center items-center z-40">
          <ul
            className="px-4 pt-3 -mt-40 text-white w-full z-10 text-center flex flex-col gap-y-[50px]"
            onClick={toggle}
          >
            <li className="w-full">
              <Link
                href="/#about"
                passHref
                className={`block px-5 text-[22px]`}
              >
                <div>About</div>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/#work" passHref className={`block px-5 text-[22px]`}>
                <div>Work</div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/#contact"
                passHref
                className={`block px-5 text-[22px]`}
              >
                <div>Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ t, ...props }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="overflow-hidden w-full">
      <Navbar
        toggle={toggle}
        route={router.pathname}
        router={router}
        t={t}
        {...props}
      />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        route={router.pathname}
        t={t}
        {...props}
      />
    </div>
  );
};

export default Navigation;
