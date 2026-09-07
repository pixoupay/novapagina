import { assets } from "../shared/assets";

export function VideoSection() {
  return (
    <section id="video" className="ngcash-snap-section h-screen w-full">
      <div className="h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={assets.videoCapcutPoster}
          className="h-full w-full object-cover"
        >
          <source src={assets.videoCapcutMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
