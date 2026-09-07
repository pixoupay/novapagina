// Fixed pill CTA pinned near the bottom of the hero, visible above the
// scroll-snap container (mirrors ng.cash's `.download-absolute` / `.download-button`).
export function DownloadFloatingButton() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[4%] z-[9] flex justify-center px-4">
      <a
        href="https://ngcash.sng.link/Andua/yomf?_dl=ngcash%3A%2F%2F&_smtype=3"
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto flex w-[140px] flex-col items-center justify-center rounded-[14px] bg-[#7dff01] px-4 py-2 text-center text-base font-normal text-black no-underline"
      >
        Baixar o app!
      </a>
    </div>
  );
}
