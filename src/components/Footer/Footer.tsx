import React from "react";
import Image from "next/image";
import { footer } from "@/data/globalData";
import { AnimatedTooltip } from "../ui/animated-tooltip";

function Footer() {
  return (
    <footer className="flex flex-col w-full px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="flex flex-col items-center">
        <p className="text-3xl mb-5">Socials</p>
        <div className="flex flex-row gap-1 items-center justify-center mb-2 w-full">
          <AnimatedTooltip items={footer} />
        </div>
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <p className="flex flex-col items-center justify-center ">
          <span className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <span className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                />
                <span className="sr-only">React</span>
              </span>
              <span>
                <img
                  src="/next.svg"
                  width="40"
                  className="dark:invert"
                  title="NextJS"
                />
                <span className="sr-only">NextJS</span>
              </span>
              <span>
                <img src="/tailwind.svg" width="26" title="TailwindCSS" />
                <span className="sr-only">TailwindCSS</span>
              </span>
            </span>
          </span>
          <span className="mt-2 text-xs ">
            Made by{" "}
            <a
              href="mailto:contact@braydentw.io"
              className="text-fun-gray-light font-medium"
            >
              Yash Raj
            </a>
            . All rights reserved.
          </span>
        </p>
      </div>
      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/yashraj970"
          target="_blank"
          rel="nooreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code </span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
