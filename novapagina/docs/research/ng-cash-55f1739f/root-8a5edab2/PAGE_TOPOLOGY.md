# Page topology — https://www.ng.cash/ (root `/`)

Source is a Webflow static export. The whole page lives inside a single
scroll container (`.scroll-wrap`) with `scroll-snap-type: y mandatory`; each
section below is `height: 100vh` and `scroll-snap-align: start`. A fixed nav
(`.menu_principal`) and a fixed floating CTA (`.download-absolute`) sit
outside that scroll container, so they stay pinned on screen while the
sections snap-scroll underneath them.

## Overlays (not part of the scroll flow)

1. **Navbar** (`menu_principal`, `position: fixed`, `inset: 0 0 auto`) — logo
   mark, centered uppercase tag "A CONTA digital feita para a nova geração"
   (hidden < 768px), and an "Explorar" pill that toggles a full mega-menu
   (page links + a 2x3 grid of illustrated tiles: Pix, Cofrinho, NG.CARD,
   NG.ZAP, Mesada + a "Baixe o app" QR block).
2. **Floating download CTA** (`download-absolute`, `position: absolute`,
   `inset: auto 0 4%`, not inside the scroll container so it never scrolls
   away) — green pill "Baixar o app!".

## Snap sections, in order

1. `hero_section` — black, full-bleed illustrated background
   (`boy.svg` + `hero-illos-v3-camada-3.svg`), animated NG.CASH wordmark
   (Lottie `logo-animada.json` over `nave.svg`), scroll-cue arrow linking to
   `#video`.
2. `video-wrap` (`id="video"`) — full-bleed autoplay/loop/muted background
   video (`video-capcut-1-transcode.mp4`).
3. `about_section` — dark illustrated card, "Convidou, ganhou" + gradient
   headline "Chama geral que o Pix vem logo depois!".
4. `skin_section` — full-bleed `skin-section-illos-bg01.svg`, a large Lottie
   card animation (`cartao-slide.json`), and an infinite horizontal marquee
   of "a CONTA com a sua cara - / com sua skin - / da sua maneira -".
5. `section-about-1` — white/grey gradient card, gradient headline "Abra sua
   conta em minutos" + animated phone-screen GIF mockup.
6. `section-about-2` — full-bleed autoplay/loop background video with a
   ~72%-black overlay, "Feito para todas as idades!" + gradient headline
   "Uma conta digital com tudo no seu nome".
7. `section-about-3` — light 3-column grid: gradient headline "Pix no seu
   nome", a large illustration (`pix-section-v1.svg`), supporting copy.
8. `ngcard_section` — near-black radial-gradient card: "Cartão mastercard
   personalizado" copy + Google Pay/Apple Pay marks on the left, an animated
   card GIF (`cartao-personalizado.gif`, `mix-blend-mode: lighten`) on the
   right.
9. `feature_section` — 3 equal illustrated cards (WhatsApp / App skins /
   Cofrinho), each with an uppercase eyebrow + two-line copy pinned to the
   bottom.
10. `footer_section` — black footer: QR "Baixe o app" block, link list +
    store badges + social icons, and the full legal/compliance copy block.

## Interaction model

- **Scroll-driven**, not click-driven: sections snap on scroll
  (`scroll-snap-type: y mandatory`); there is no tab/accordion click
  interaction between sections.
- **Click-driven**: the navbar's "Explorar" button toggles the mega-menu
  (this is the one click-to-reveal interaction on the page).
- Two background videos and two Lottie animations autoplay/loop
  continuously (time-driven), independent of scroll position.
- The skin-section text marquee scrolls continuously (time-driven CSS
  animation), not tied to scroll position.

## Responsive

- ≥1440px: nav tag row un-hidden, mega-menu tiles switch to a wider layout,
  several illustration `background-size`s step up (see the site's own
  `min-width: 1440px` / `1920px` media queries).
- ≤767px: nav collapses to a hamburger-style toggle, the "wrap-central-about
  right" 3-column grid (Pix section) and `ngcard_wrap` stack to a single
  column, footer link grid re-flows to 2 columns.
