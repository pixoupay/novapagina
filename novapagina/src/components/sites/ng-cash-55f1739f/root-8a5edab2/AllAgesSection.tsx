import { assets } from "../shared/assets";

export function AllAgesSection() {
  return (
    <section className="ngcash-snap-section relative h-screen w-full overflow-hidden rounded-2xl">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={assets.video0124Poster}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={assets.video0124Mp4} type="video/mp4" />
      </video>

      <div
        className="relative flex h-full w-full flex-col items-center justify-center gap-2 py-8 text-center"
        style={{ backgroundImage: "linear-gradient(54deg, rgba(0,0,0,0.72), rgba(0,0,0,0.72))" }}
      >
        <h3 className="text-white">Feito para todas as idades!</h3>
        <h1 className="mx-auto w-[80%] text-[2.3rem] font-normal leading-tight md:w-auto md:text-[4.2rem]">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(331deg, #31ff00, #fff 32%)" }}
          >
            Uma conta digital com tudo no seu nome
          </span>
        </h1>
      </div>
    </section>
  );
}
