"use client";

import { useState } from "react";
import Image from "next/image";
import { assets } from "../shared/assets";

const PAGES = [
  { label: "A NG.CASH", href: null },
  { label: "Sobre a conta", href: "/conta-digital/conta-digital" },
  { label: "Central de ajuda", href: "https://help.ng.cash/pt-BR/" },
];

const TILES = [
  { label: "Pix", bg: assets.ilustraMenuPix, className: "bg-black" },
  { label: "Cofrinho", bg: assets.ilustraMenuMesada, className: "bg-black" },
  { label: "NG.CARD", bg: assets.ilustraMenuNgcard, className: "bg-black" },
  { label: "NG.ZAP", bg: assets.ilustraMenuNgzap, className: "bg-black" },
  { label: "Mesada", bg: assets.ilustraMenuCofrinho, className: "bg-black" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-[900] px-4 pt-3 md:pt-6">
      <div className="mx-auto flex w-full max-w-[1408px] flex-col">
        <div className="flex w-full items-center justify-between">
          <a href="/" className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-black">
            <Image src={assets.logo} alt="Logo NG.CASH" width={36} height={23} className="h-auto w-6" />
          </a>

          <div className="hidden font-[var(--font-manrope)] text-[0.8rem] font-light uppercase tracking-[2px] text-[#9c9c9c] sm:block">
            A CONTA digital feita para a nova geração
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 items-center justify-center rounded-[14px] bg-[#7dff01] px-5 font-[var(--font-manrope)] text-base font-light text-black"
          >
            {open ? "Fechar" : "Explorar"}
          </button>
        </div>

        {open && (
          <nav className="mt-1 rounded-2xl bg-black/0 px-4 pb-[18px] pt-1">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex w-full flex-col justify-end md:w-[30%]">
                {PAGES.map((p) =>
                  p.href ? (
                    <a
                      key={p.label}
                      href={p.href}
                      target={p.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center justify-between border-b border-[#686868] px-4 py-6 text-white no-underline hover:bg-white/15"
                    >
                      <span className="text-xl font-extralight">{p.label}</span>
                    </a>
                  ) : (
                    <div key={p.label} className="hidden" />
                  )
                )}

                <a
                  href="https://ngcash.sng.link/Andua/yomf?_dl=ngcash%3A%2F%2F&_smtype=3"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 flex items-center justify-between rounded-2xl bg-white/0 px-2 py-2 text-white no-underline"
                >
                  <div>
                    <p className="text-white">Baixe o app</p>
                    <p className="text-[0.7rem] font-light text-white">disponível para Android e IOS</p>
                  </div>
                  <div className="h-[100px] w-[100px]">
                    <Image src={assets.qrcode} alt="" width={100} height={100} />
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-2">
                <a
                  href="/conta-digital/pix"
                  className="col-span-1 flex h-40 items-end rounded-2xl bg-black bg-cover bg-right p-3 no-underline"
                  style={{ backgroundImage: `url(${TILES[0].bg})` }}
                >
                  <p className="text-xl font-extralight text-white">Pix</p>
                </a>
                <a
                  href="/conta-digital/cofrinho"
                  className="col-span-1 flex h-40 items-end rounded-2xl bg-black bg-contain bg-no-repeat bg-right-bottom p-3 no-underline"
                  style={{ backgroundImage: `url(${TILES[1].bg})` }}
                >
                  <p className="text-xl font-extralight text-white">Cofrinho</p>
                </a>
                <a
                  href="/conta-digital/cartao-de-credito-pre-pago"
                  className="col-span-1 flex h-40 items-end rounded-2xl bg-black bg-contain bg-no-repeat bg-right-bottom p-3 no-underline"
                  style={{ backgroundImage: `url(${TILES[2].bg})` }}
                >
                  <p className="text-xl font-extralight text-white">NG.CARD</p>
                </a>
                <div className="col-span-1 grid grid-cols-2 gap-2">
                  <a
                    href="/conta-digital/ng-zap"
                    className="flex h-40 items-end rounded-2xl bg-black bg-contain bg-no-repeat bg-right-top p-3 no-underline"
                    style={{ backgroundImage: `url(${TILES[3].bg})` }}
                  >
                    <p className="text-lg font-extralight text-white">NG.ZAP</p>
                  </a>
                  <a
                    href="/conta-digital/mesada"
                    className="flex h-40 items-end rounded-2xl bg-black bg-contain bg-no-repeat bg-right-top p-3 no-underline"
                    style={{ backgroundImage: `url(${TILES[4].bg})` }}
                  >
                    <p className="text-lg font-extralight text-white">Mesada</p>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
