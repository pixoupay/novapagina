import Image from "next/image";
import { assets } from "../shared/assets";

export function NgCardSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full items-center justify-center px-4 pb-4 pt-[6%]">
      <div
        className="flex h-full w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl py-8 pl-4 md:flex-row md:pl-4"
        style={{ backgroundImage: "radial-gradient(circle at 50% 0, #080c14 29%, #000)" }}
      >
        <div className="flex w-full flex-col items-start justify-center gap-4 text-white md:w-[40%]">
          <h2 className="text-left text-[2.2rem] font-light leading-[1.1] md:text-[3.5rem]">
            Cartão
            <br />
            mastercard
            <br />
            personalizado
          </h2>
          <h4 className="text-left text-base font-extralight text-white/90">
            Cartão internacional pré-pago Mastercard com o seu nome – ou o que você tiver a fim de
            usar. Use em compras físicas, por aproximação ou online.
          </h4>
          <div className="flex flex-row items-center gap-2.5 pt-5">
            <Image src={assets.googlePay} alt="Google Pay" width={140} height={40} className="w-[140px]" />
            <Image src={assets.applePay} alt="Apple Pay" width={140} height={40} className="w-[140px]" />
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center md:w-[60%] md:justify-end">
          <div
            className="h-64 w-full max-w-[520px] bg-contain bg-center bg-no-repeat mix-blend-lighten md:h-full"
            style={{ backgroundImage: `url(${assets.cartaoPersonalizado})` }}
          />
        </div>
      </div>
    </section>
  );
}
