import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footer } from "@/data/globalData";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const socialLinks = [
  {
    id: 1,
    icon: <LanguageIcon />,
    url: "https://yash-raj-portfolio.vercel.app/",
  },
  {
    id: 2,
    icon: <GitHubIcon />,
    url: "https://github.com/yashraj970",
  },
  {
    id: 4,
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/yash-raj-a9037b242/",
  },
  {
    id: 5,
    icon: <EmailIcon />,
    url: "mailto:itsyashraj970@gmail.com",
  },
];

const data = [
  {
    id: 1,
    name: "Portfolio",
    designation: "Yash Raj",
    image: "/images/footerIcons/portfolio.jpg",
    url: "https://yash-raj-portfolio.vercel.app/",
  },
  {
    id: 2,
    name: "Github",
    designation: "yashraj970",
    image: "/images/footerIcons/github.png",
    url: "https://github.com/yashraj970",
  },
  {
    id: 3,
    name: "LinkedIn",
    // designation: "Data Scientist",
    image: "/images/footerIcons/linekdin.jpeg",
    url: "https://www.linkedin.com/in/yash-raj-a9037b242/",
  },
  {
    id: 4,
    name: "Email",
    designation: "itsyashraj970@gmail.com",
    image: "/images/footerIcons/gmail.jpeg",
    url: "mailto:itsyashraj970@gmail.com",
  },
];

function Footer() {
  return (
    <footer className="flex flex-col w-full px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="flex flex-col items-center">
        <p className="text-3xl mb-5">Socials</p>
        <div className="flex flex-row gap-1 items-center justify-center mb-2 w-full">
          <AnimatedTooltip items={data} />
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
