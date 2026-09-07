import Image from "next/image";
import { assets } from "../shared/assets";
import { LottiePlayer } from "../shared/LottiePlayer";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="ngcash-snap-section relative flex h-screen w-full flex-col items-center justify-center overflow-visible bg-black px-4 pb-4 pt-[6%] text-white"
    >
      <div
        className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-[position:0_100%,50%] bg-no-repeat"
        style={{
          backgroundImage: `url(${assets.boy}), url(${assets.heroIllos})`,
          backgroundSize: "490px, cover",
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-between pb-0 pt-8">
          <span className="sr-only">NG CASH INSTITUICAO DE PAGAMENTO LTDA.</span>

          <div className="flex w-auto items-end justify-end pr-2.5">
            <Image
              src={assets.nave}
              alt=""
              width={288}
              height={188}
              className="pointer-events-none w-[70vw] max-w-[600px]"
              priority
            />
            <LottiePlayer
              src={assets.logoAnimada}
              className="pointer-events-none absolute inset-0 m-auto h-full w-full max-w-[900px]"
            />
          </div>

          <a
            href="#video"
            aria-label="Rolar para o vídeo"
            className="mb-[5%] h-[90px] w-[90px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assets.gifScrollSeta})` }}
          />
        </div>
      </div>
    </section>
  );
}
