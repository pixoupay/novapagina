import { assets } from "../shared/assets";
import { LottiePlayer } from "../shared/LottiePlayer";

const LINE_ITEMS = ["a CONTA com a sua cara -", "com sua skin -", "da sua maneira -"];

export function SkinSection() {
  return (
    <section
      className="ngcash-snap-section relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black bg-cover bg-top bg-no-repeat py-0 pb-4"
      style={{ backgroundImage: `url(${assets.skinSectionBg})` }}
    >
      <div className="flex h-[80%] w-full flex-1 items-center justify-center">
        <LottiePlayer src={assets.cartaoSlide} className="h-[97vh] w-1/2 max-w-[560px]" />
      </div>

      <div className="w-full overflow-hidden">
        <div className="ngcash-marquee-track flex w-max flex-row items-center">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex min-w-[1200px] flex-row items-center py-[30px]">
              {LINE_ITEMS.map((line, i) => (
                <p
                  key={i}
                  className="block flex-none whitespace-nowrap pr-[10px] text-[4rem] font-light uppercase tracking-[4px] text-[#616161]"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
