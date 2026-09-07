import { assets } from "../shared/assets";

export function FeatureSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full flex-col items-center justify-center px-4 pb-4 pt-[6%]">
      <div className="grid h-full w-full grid-cols-1 gap-5 md:grid-cols-3">
        <div
          className="flex h-full w-full flex-col items-start justify-between rounded-[14px] bg-[#181818] bg-cover bg-no-repeat p-6"
          style={{ backgroundImage: `url(${assets.featureIllos})` }}
        >
          <h3 className="w-full text-left text-sm font-light uppercase text-white">
            A NG.CASH NO SEU WHATSAPP
          </h3>
          <p className="text-left text-[1.2rem] font-extralight text-white">
            Pix por mensagens,
            <br />
            áudios e imagens.
          </p>
        </div>

        <div
          className="flex h-full w-full flex-col items-start justify-between rounded-[14px] bg-[#181818] bg-contain bg-right-bottom bg-no-repeat p-6"
          style={{ backgroundImage: `url(${assets.featureIllosSkins})` }}
        >
          <h3 className="w-full text-left text-sm font-light uppercase text-white">APP COM A SUA SKIN</h3>
          <p className="text-left text-[1.2rem] font-extralight text-white">
            Sua conta,
            <br />
            do seu jeito!
          </p>
        </div>

        <div
          className="flex h-full w-full flex-col items-start justify-between rounded-[14px] bg-[#181818] bg-[length:auto,640px] bg-[position:0_0,100%_100%] bg-no-repeat p-6"
          style={{
            backgroundImage: `linear-gradient(132deg, rgba(0,0,0,0.66), rgba(0,0,0,0.01) 59%, rgba(0,0,0,0)), url(${assets.mockupFeature})`,
          }}
        >
          <h3 className="w-full text-left text-sm font-light uppercase text-white">COFRINHO</h3>
          <p className="text-left text-[1.2rem] font-extralight text-white">
            Seu dinheiro guardado e
            <br />
            rendendo todos os meses
          </p>
        </div>
      </div>
    </section>
  );
}
