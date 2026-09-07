import Image from "next/image";
import { assets } from "../shared/assets";

export function AppIntroSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full items-center justify-center px-4 pb-4 pt-[6%]">
      <div
        className="flex h-full w-full flex-col items-center justify-between gap-3 overflow-hidden rounded-2xl pt-[3%]"
        style={{ backgroundImage: "linear-gradient(56deg, #ddd, #fff 34% 73%, #ddd 102%)" }}
      >
        <h2 className="mx-auto w-[60%] text-center text-[3rem] leading-none md:text-[5rem]">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(331deg, #fff, #3d3d3d 32%)" }}
          >
            Abra sua conta
            <br />
            em minutos
          </span>
        </h2>
        <div className="flex w-full flex-1 items-end justify-center overflow-hidden">
          <Image
            src={assets.phoneOverview}
            alt=""
            width={653}
            height={800}
            unoptimized
            className="h-auto w-[70%] max-w-[420px] md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
