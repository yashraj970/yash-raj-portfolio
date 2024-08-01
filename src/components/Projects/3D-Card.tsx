"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconX } from "@tabler/icons-react";
import { content } from "@/data/globalData";

export function ThreeDCardDemo({
  title,
  description,
  src,
  liveLink,
  github,
  content,
}: {
  title: string;
  description: string;
  src: string;
  liveLink: string;
  github: string;
  content: content[];
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return (
        <span onClick={handleOpen}>
          {text.substring(0, length)}
          <span className="cursor-pointer">
            ...
            <span className="px-1 py-0.5 ml-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              view more
            </span>
          </span>
        </span>
      );
    }
    return text;
  };

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {truncateText(description, 70)}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4 cursor-pointer">
            <Image
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              onClick={handleOpen}
            />
          </CardItem>
          <div className="flex justify-between items-center mt-8">
            <CardItem
              translateZ={20}
              as={Link}
              href={liveLink}
              target="__blank"
              className={`px-4 py-2 rounded-xl text-xs font-normal ${
                !liveLink && "cursor-not-allowed"
              }`}
            >
              Try now →
            </CardItem>
            {github && (
              <CardItem
                translateZ={20}
                as={Link}
                href={github}
                target="__blank"
                className="px-3 py-2 rounded-xl bg-black dark:bg-white text-xs font-bold"
              >
                <Image
                  src="/static/icons/github-f.svg"
                  width={16}
                  height={16}
                  alt="Github Icon"
                />
              </CardItem>
            )}
          </div>
        </CardBody>
      </CardContainer>

      {/* View More Modal */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit  z-[60] my-10 p-4 md:p-10 rounded-3xl font-sans relative"
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>

              <motion.p className="text-2xl md:text-4xl font-semibold text-neutral-700 dark:text-white">
                {title}
              </motion.p>
              <motion.p className="text-base font-medium text-black dark:text-white my-1">
                {description}
              </motion.p>
              <div className="py-5">
                {content?.map((item, index) => (
                  <div
                    key={"content" + index}
                    className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                  >
                    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                      <span className="font-bold text-neutral-700 dark:text-neutral-200">
                        {item?.detailTitle}
                      </span>{" "}
                      {item?.detailDesc}
                    </p>
                    <Image
                      src={item?.image}
                      alt="content image"
                      height="500"
                      width="500"
                      className="md:w-4/5 md:h-/w-4/5 h-full w-full mx-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
