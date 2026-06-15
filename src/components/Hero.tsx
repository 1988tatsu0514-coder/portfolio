"use client";

import { useEffect, useRef } from "react";
import Player from "@vimeo/player";

const VIMEO_ID = "1201101227";
const RESTART_BEFORE_END = 6;

export default function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);

    let duration = 0;
    let restarting = false;

    player.ready().then(async () => {
      try { duration = await player.getDuration(); } catch { /* ignore */ }
    });

    player.on("timeupdate", async ({ seconds }: { seconds: number }) => {
      if (!duration || restarting) return;
      if (duration - seconds <= RESTART_BEFORE_END) {
        restarting = true;
        try {
          await player.setCurrentTime(0);
        } catch { /* ignore */ }
        restarting = false;
      }
    });

    return () => { player.destroy(); };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&muted=1&loop=1&background=1&playsinline=1`}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw",
            minWidth: "177.78vh",
            minHeight: "100vh",
            transform: "translate(-50%, -50%)",
            border: "none",
          }}
          allow="autoplay; fullscreen"
          title="Showreel"
        />
      </div>

      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between z-10">
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          Showreel 2024
        </p>
        <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">
          ↓ Scroll
        </p>
      </div>
    </section>
  );
}
