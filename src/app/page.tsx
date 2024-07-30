import HeroBanner from "@/components/HeroBanner/HeroBanner";
import HeroText from "@/components/HeroBanner/HeroText";
import { MacbookScrollDemo } from "@/components/MacbookScroll/MacbookScrollDemo";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative heroElem w-full min-h-[30rem] h-[37rem] sm:h-full pt-2 m-auto flex flex-col-reverse sm:flex-row justify-start text-center items-center ">
          <div className="w-11/12 sm:w-[60%]">
            <HeroText />
          </div>
          <div className="w-10/12 sm:w-[30%]">
            <HeroBanner />
          </div>
        </div>
      </main>
      <div>
        <MacbookScrollDemo />
      </div>
      <div className="text-center sm:text-start">
        <h1 className="w-11/12 mx-auto text-xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mt-12">
          Few of my favorite projects
        </h1>
        <Projects />
      </div>
    </>
  );
}
