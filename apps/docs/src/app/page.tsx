import type { Metadata } from "next";
import { Button } from "ui";

export const metadata: Metadata = {
  title: "Docs",
};

export default function Docs() {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="relative">
        <h1 className="bg-gradient-to-r from-pink-300 to-blue-400 bg-clip-text text-6xl font-extrabold leading-[1.1] tracking-tighter text-white text-transparent sm:text-7xl lg:text-8xl xl:text-8xl">
          Toolbelt Docs
        </h1>
        <Button />
      </div>
    </main>
  );
}
