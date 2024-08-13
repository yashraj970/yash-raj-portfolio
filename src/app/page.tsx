import HeroBanner from "@/components/HeroBanner/HeroBanner";
import HeroText from "@/components/HeroBanner/HeroText";
import { MacbookScrollDemo } from "@/components/MacbookScroll/MacbookScrollDemo";
import { HireMeModal } from "@/components/Navbar/HireMe";
import Projects from "@/components/Projects/Projects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/moving-border";
import { projects } from "@/data/globalData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative heroElem w-full min-h-[30rem] h-[40rem] sm:h-full pt-2 m-auto flex flex-col-reverse sm:flex-row justify-start text-center items-center">
          <div className="w-11/12 sm:w-[60%]">
            <HeroText />
            <div className="sm:hidden mt-3">
              <HireMeModal />
            </div>
            <div className="mt-3 sm:mt-6">
              <Link href={"/about"}>
                <Button>Tell Me More</Button>
              </Link>
            </div>
          </div>
          <div className="w-10/12 sm:w-[40%] lg:w-[30%]">
            <HeroBanner />
          </div>
        </div>
      </main>
      <div>
        <MacbookScrollDemo />
      </div>
      <div className="text-center sm:text-start">
        <h1 className="w-11/12 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-8">
          Few of my favorite projects
        </h1>
        <Projects projects={projects.slice(0, 3)} />
      </div>
      <div className="m-2 mb-10 flex justify-center text-center">
        <Link href={"/projects"}>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>View All</span>
          </HoverBorderGradient>
        </Link>
      </div>
    </>
  );
}
