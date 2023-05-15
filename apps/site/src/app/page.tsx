import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "ui";

export const metadata: Metadata = {
  title: "Web",
};

export default function Web() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-gray-50">
      <Image
        priority
        src="/beams.jpeg"
        alt="background light beams"
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
        height="900"
      />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative">
        <h1 className="bg-gradient-to-r from-pink-300 to-blue-400 bg-clip-text text-6xl font-extrabold leading-[1.1] tracking-tighter text-white text-transparent sm:text-7xl lg:text-8xl xl:text-8xl">
          Toolbelt Site
        </h1>
        <Button />
      </div>
    </main>
  );
}

/* <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:rounded-xl sm:px-10"> */
/* </div> */
