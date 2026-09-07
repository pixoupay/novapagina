import Image from "next/image";
import { assets } from "../shared/assets";

const LINKS = [
  { label: "SNACKS", href: "https://snacks.ng.cash/", external: true },
  { label: "Carreiras", href: "/carreiras" },
  { label: "Termos de uso", href: "/termos-de-uso" },
  { label: "Política de privacidade", href: "/politica-de-privacidade" },
  { label: "Política de Segurança da Informação", href: "/politica-de-seguranca-da-informacao" },
  { label: "Central de ajuda", href: "https://help.ng.cash/pt-BR/", external: true },
  { label: "Segurança", href: "/seguranca" },
  { label: "Imprensa", href: "/mkt/imprensa" },
];

export function FooterSection() {
  return (
    <section className="ngcash-snap-section flex h-screen w-full flex-col justify-between gap-4 bg-black px-4 py-20 text-white">
      <a
        href="https://ngcash.sng.link/Andua/yomf?_dl=ngcash%3A%2F%2F&_smtype=3"
        target="_blank"
        rel="noreferrer"
        className="flex flex-[35%] flex-col items-center justify-center gap-4 no-underline"
      >
        <div className="text-center">
          <p className="text-white">Baixe o app</p>
          <p className="text-[0.7rem] font-light text-white">disponível para Android e IOS</p>
        </div>
        <div className="h-[100px] w-[100px]">
          <Image src={assets.qrcode} alt="qr code para baixar o app NG.CASH" width={100} height={100} />
        </div>
      </a>

      <div className="flex flex-[25%] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="grid grid-cols-2 gap-x-[60px] gap-y-[15px] md:flex md:flex-row md:flex-wrap md:justify-center">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="mr-2.5 text-[0.7rem] font-light text-white no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row">
          <div className="flex flex-row gap-2">
            <a
              href="https://ngcash.sng.link/Andua/yomf?_dl=ngcash%3A%2F%2F&_smtype=3"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={assets.appleStore} alt="Baixar na Apple Store" width={140} height={40} />
            </a>
            <a
              href="https://ngcash.sng.link/Andua/yomf?_dl=ngcash%3A%2F%2F&_smtype=3"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={assets.googleStore} alt="Baixar no Google Play" width={140} height={40} />
            </a>
          </div>
          <div className="flex flex-row items-center justify-end gap-2.5">
            <a href="https://www.instagram.com/ng.cash" target="_blank" rel="noreferrer">
              <Image src={assets.iconInstagram} alt="Instagram NG.CASH" width={40} height={40} />
            </a>
            <a href="https://www.tiktok.com/@ng.cash" target="_blank" rel="noreferrer">
              <Image src={assets.iconTiktok} alt="TIKTOK NG.CASH" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-[3%]" />

      <div className="w-full flex-1 overflow-y-auto text-center">
        <p className="text-[10px] font-light text-[#adadad]">
          © NG CASH INSTITUICAO DE PAGAMENTO LTDA. - CNPJ 40.710.595/0001-93
        </p>
        <p className="mx-auto max-w-[96%] text-[8px] font-thin leading-[150%] text-[#c7c7c7]">
          A NG CASH INSTITUIÇÃO DE PAGAMENTO LTDA. (40.710.595/0001-93) é uma instituição de
          pagamento autorizada a funcionar pelo Banco Central que atua como emissora de moeda
          eletrônica. A NG CASH INSTITUIÇÃO DE PAGAMENTO LTDA também atua como correspondente
          Bancário para o recebimento e pagamento de boletos, contas de consumo e tributos, bem
          como, na oferta de determinados produtos de crédito; e para essas finalidades segue as
          diretrizes da Resolução CMN n° 4.935 de 29/7/2021 do Banco Central do Brasil.
          <br />
          <br />
          Somos correspondentes bancários das seguintes instituições: Banco BTG Pactual SA
          (30.306.294/0001-45) e da QI SOCIEDADE DE CRÉDITO DIRETO S.A. (32.402.502/0001-35). O
          Banco BTG Pactual é uma instituição financeira autorizada pelo Banco Central. Para
          maiores informações sobre seus produtos, acesse o site:{" "}
          <a
            href="https://www.btgpactual.com/institucional"
            target="_blank"
            rel="noreferrer"
            className="text-[#c7c7c7] underline"
          >
            https://www.btgpactual.com/institucional
          </a>
          . A QI Sociedade de Crédito Direto SA é uma sociedade de crédito direto autorizada a
          funcionar pelo Banco Central. Para maiores informações sobre seus produtos, acesso o
          site:{" "}
          <a
            href="https://qitech.com.br/"
            target="_blank"
            rel="noreferrer"
            className="text-[#c7c7c7] underline"
          >
            https://qitech.com.br/
          </a>
          <br />
          <br />
          Para reclamações sobre os serviços e produtos ofertados pela NG.CASH ou pelos nossos
          parceiros, por favor, entre em contato com suporte@ng.cash, com atendimento de segundas
          a sextas, das 9h às 18h (exceto feriados) e/ou com a Ouvidoria, ouvidoria@ng.cash.
          <br />
          <br />
          Para solicitações de imprensa, entre em contato com press@ng.cash.
          <br />
          <br />
          Autoridades policiais e judiciais devem encaminhar ofícios e demais solicitações formais
          exclusivamente para o endereço eletrônico: oficios@ng.cash
        </p>
      </div>
    </section>
  );
}
