import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-white flex flex-col w-full items-center py-[80px] bg-black">
      <h1>Reach me.</h1>
      <ul className="flex gap-x-[35px] pt-[5px]">
        <li className={`hover:opacity-100 opacity-60`}>
          <Link href="https://www.behance.net/sylvesterglen" target="_blank">
            Behance
          </Link>
        </li>
        <li className={`hover:opacity-100 opacity-60`}>
          <Link
            href="https://www.linkedin.com/in/glenmarvinprayogo/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li className={`hover:opacity-100 opacity-60`}>
          <Link href="mailto:sylvesterglenm@gmail.com" target="_blank">
            Email
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
