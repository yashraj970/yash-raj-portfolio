"use client";
import Link from "next/link";
import React from "react";
import ToggleMode from "../Theme/ToggleMode";
import { usePathname, useRouter } from "next/navigation";
export const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Designs",
    path: "/designs",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center py-7">
      <div className="flex justify-between max-w-6xl w-full">
        <div className="flex gap-[1px]">
          {"Yash Raj".split("").map((letter, index) => {
            return (
              <span key={index} className="logo-letter">
                {letter}
              </span>
            );
          })}
        </div>
        <ul className="flex items-center space-x-10">
          {routes.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none  ${
                  pathname === item.path
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-100 transition-opacity"
                }`}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-5">
          <ToggleMode />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
