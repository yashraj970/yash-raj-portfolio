import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center">
      <div
        className="relative heroElem w-full h-[60rem] sm:h-full pt-24 pb-40 m-auto flex flex-col-reverse sm:flex-row justify-between text-center items-center z-1"
        style={{ maxWidth: "1200px" }}
      >
        <div className="w-11/12 sm:w-[60%]">
          <p className="text-xl mb-5 sm:block">Hey, I&apos;m Yash.</p>
          <h1 className="heroTitle inline-block max-w-2xl lg:max-w-3xl  w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold heroShinyBg">
            I enjoy <span className="heroShiny1 text-fun">building</span> and{" "}
            <span className="heroShiny2 text-fun">designing</span> for the web.
            <img
              className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
              style={{ animationDelay: "0.1s" }}
              src="/static/doodles/hero/html.svg"
            />
            <img
              className="sqD right-[0px] lg:right-[60px] bottom-[-107px]"
              style={{ animationDelay: "0.5s" }}
              src="/static/doodles/hero/js.svg"
            />
            <img
              className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
              src="/static/doodles/hero/pop1.svg"
            />
            <img
              className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
              style={{ animationDelay: "0.9s" }}
              src="/static/doodles/hero/code.svg"
            />
          </h1>
        </div>
        <div className="w-10/12 sm:w-[40%]">
          <HeroBanner />
        </div>
      </div>
    </main>
  );
}
