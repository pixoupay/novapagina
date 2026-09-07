"use client";

import { useEffect, useRef } from "react";

interface LottiePlayerProps {
  src: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

/**
 * Minimal client-side Lottie player using the `lottie-web` package.
 * Mirrors the Webflow `data-animation-type="lottie"` embeds found on ng.cash
 * (hero logo mark animation, skin-carousel card animation).
 */
export function LottiePlayer({
  src,
  className,
  loop = true,
  autoplay = true,
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anim: { destroy: () => void } | undefined;
    let cancelled = false;

    import("lottie-web").then(({ default: lottie }) => {
      if (cancelled || !containerRef.current) return;
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        path: src,
      });
    });

    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [src, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
}
