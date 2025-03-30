import Image from "next/image";
import { Card } from "@repo/ui/card";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`absolute mix-blend-normal will-change-[filter] rounded-[100%] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className ?? ""}`}
    />
  );
}

const LINKS = [
  {
    title: "seeds",
    href: "/",
    description: "A microblog.",
  },
  {
    title: "changelog",
    href: "/",
    description: "things are happening.",
  },
  {
    title: "DnD",
    href: "/",
    description: "WIP",
  },
  {
    title: "blogs",
    href: "/",
    description:
      "A blog.",
  },
];

export default function Page() {
  return (
    <main className="flex flex-row items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <div className="bg-cosmic-latte text-china-rose grid mb-32 text-center lg:mb-0 lg:grid-rows-4 lg:text-left">
          {LINKS.map(({ title, href, description }) => (
            <Card href={href} key={title} title={title}>
              {description}
            </Card>
          ))}
        </div>

        <div className="fixed bottom-0 left-0 flex items-end justify-center w-full h-48 bg-linear-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="flex gap-2 p-8 pointer-events-none place-items-center lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <h1 className="text-3xl">TEST A jar of melon and code.</h1>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center ">
        <div className="font-sans w-auto pb-16 pt-[48px] md:pb-24 lg:pb-32 md:pt-16 lg:pt-20 flex justify-between gap-8 items-center flex-col relative z-0">
          <div className="z-50 flex items-center justify-center w-full">
            <div className="absolute z-50 flex items-center justify-center w-64 h-64">
              <Gradient
                className="opacity-90 w-[120px] h-[120px]"
                conic
                small
              />
            </div>

            <div className="w-[120px] h-[120px] z-50">
            test 1
            </div>
          </div>
          {/* <Gradient
            className="top-[-500px] opacity-[0.15] w-[1000px] h-[1000px]"
            conic
          /> */}
          <div className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
            test

          </div>
        </div>
      </div>


    </main>
  );
}
