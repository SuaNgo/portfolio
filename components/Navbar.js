import {
  faBriefcase,
  faHome,
  faListCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed h-[40%] max-[600px]:h-[40%] w-10 rounded-xl bg-slate-900 top-1/2 -translate-y-1/2 right-[1%] flex flex-col justify-between py-5 items-center min-[1000px] z-40">
      <Link href="#intro">
        <FontAwesomeIcon icon={faHome} className="text-cyan-50" />
      </Link>
      <Link href="#about">
        <FontAwesomeIcon icon={faUser} className="text-cyan-50" />
      </Link>
      <Link href="#description">
        <FontAwesomeIcon icon={faListCheck} className="text-cyan-50" />
      </Link>
      <Link href="#project">
        <FontAwesomeIcon icon={faBriefcase} className="text-cyan-50" />
      </Link>
    </div>
  );
};

export default Navbar;
