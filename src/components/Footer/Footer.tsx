import Link from "next/link";
import React from "react";
import Image from "next/image";
import { footer } from "@/data/globalData";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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

function Footer() {
  return (
    <footer className="flex flex-col w-full px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      {/* <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h4 className="uppercase text-fun-gray text-sm font-bold">
                {item.title}
              </h4>
              <div>
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 -mb-1">
                              <Image
                                src={item.icon}
                                width={20}
                                height={20}
                                alt="icon"
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link href={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Support My Work
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            {footer.support.buymeacoffee !== "" && (
              <div>
                <a
                  href={`https://buymeacoffee.com/${footer.support.buymeacoffee}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/buy-me-a-coffee.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            {footer.support.paypal !== "" && (
              <div>
                <a
                  href={`https://paypal.me/${footer.support.paypal}`}
                  target="_blank"
                >
                  <img
                    src="/static/misc/paypal.svg"
                    className="h-12 mr-2 hover:opacity-80 opacity-100 transition-opacity"
                  />
                </a>
              </div>
            )}
            <p className="text-fun-gray text-xs pt-1">
              {footer.support.message}
            </p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center">
        <p className="text-3xl mb-5">Follow me</p>
        <ul className="flex gap-4 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              target="__blank"
              key={link.id}
              className="bg-gray-200 dark:bg-gray-700 cursor-pointer rounded-lg shadow-sm p-3 sm:p-3.5 duration-300"
            >
              <i className="text-primary">{link.icon}</i>
            </a>
          ))}
        </ul>
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
