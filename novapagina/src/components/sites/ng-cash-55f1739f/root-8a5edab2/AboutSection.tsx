import { A } from "../shared/assets";

const bgLayers = [
  `${A}/chama-geral-fundo-02-fixed.svg`,
  `${A}/chama-geral-fundo-3.svg`,
  `${A}/chama-geral-fundo-02.svg`,
  `${A}/chama-geral-fundo-01.svg`,
  `${A}/chama-geral-fundo-01-fixed.svg`,
];

export function AboutSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full items-center justify-center px-4 pb-4 pt-[6%]">
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-2xl bg-[#181818] px-8 pb-[70px] pt-8 text-black"
        style={{
          backgroundImage: bgLayers.map((u) => `url(${u})`).join(", "),
          backgroundPosition: "100% 0, 100% 0, 100% 0, 0 100%, 0 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <p className="text-white">
          Convidou, ganhou
          <br />
        </p>
        <h2 className="mx-auto w-[60%] text-center text-[3rem] font-normal uppercase leading-none md:text-[4.2rem]">
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(286deg, #3d3d3d, #fff 32%)" }}
          >
            Chama geral que o Pix vem logo depois!
          </span>
        </h2>
      </div>
    </section>
  );
}
