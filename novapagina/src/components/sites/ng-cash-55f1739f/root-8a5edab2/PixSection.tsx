import Image from "next/image";
import { assets } from "../shared/assets";

export function PixSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full items-center justify-center px-4 pb-4 pt-[6%]">
      <div className="grid h-full w-full grid-cols-1 items-center justify-between gap-8 rounded-2xl bg-[#fdfdfd] p-8 md:grid-cols-[0.75fr_1fr_1fr]">
        <div className="flex h-full flex-col items-center justify-center gap-2.5">
          <h2 className="text-left text-[2.5rem] font-light leading-none md:text-[3rem]">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(319deg, #7dff01 15%, #000 70%)" }}
            >
              Pix no
              <br />
              seu nome
            </span>
          </h2>
        </div>

        <div className="mx-auto w-[80%] max-w-[400px]">
          <Image src={assets.pixSectionV1} alt="" width={400} height={400} className="h-auto w-full" />
        </div>

        <div className="flex h-full flex-col items-center justify-center gap-2.5">
          <h3 className="text-center text-[1.3rem] font-light leading-[130%] text-black md:text-[2rem]">
            Com o Pix na mão, você já envia e recebe sua grana sem limites!
          </h3>
        </div>
      </div>
    </section>
  );
}
