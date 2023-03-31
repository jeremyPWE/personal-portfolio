import Link from "next/link";
import Section from "../Section";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MenuToggle } from "./MenuToggle";

const links = [
  { name: "About", to: "/#about", id: "ABOUT US" },
  { name: "Work", to: "/#work", id: "OUR WORKS" },
  { name: "Contact", to: "/#contact", id: "CONTACT" },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navbar = ({ isOpen, toggle, route, router, ...props }) => {
  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
      setShowNav(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`flex fixed top-0 z-40 py-2 justify-center w-full ${
        showNav
          ? "transform translate-y-0 bg-[#0F1012]"
          : "transform -translate-y-full "
      }`}
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
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className={`md:hidden`}
        >
          <MenuToggle toggle={toggle} isOpen={isOpen} />
        </motion.div>
      </Section>
    </nav>
  );
};

const Sidebar = ({ isOpen, toggle }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <nav
      className="fixed top-0 z-30 py-2 justify-between md:hidden flex w-full"
      role="navigation"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{
              height: 0,
            }}
            animate={{
              height: "100vh",
              transition: { duration: 0.3 },
            }}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className="bg-[#0F1012] w-full"
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full mt-[-30px]"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  onClick={toggle}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                  className="text-[#f9fafb] text-[1.75rem] px-[40px] py-[10px] m-[10px]"
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Navigation = ({ t, ...props }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useCycle(false, true);
  return (
    <div className="overflow-hidden w-full">
      <Navbar
        isOpen={isOpen}
        toggle={() => setIsOpen()}
        route={router.pathname}
        router={router}
        t={t}
        {...props}
      />
      <Sidebar
        isOpen={isOpen}
        toggle={() => setIsOpen()}
        route={router.pathname}
        t={t}
        {...props}
      />
    </div>
  );
};

export default Navigation;
