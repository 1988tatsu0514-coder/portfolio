"use client";

import { useState } from "react";
import Image from "next/image";

interface WorkCardProps {
  vimeoId: string;
  title: string;
  role: string;
  year: string;
  thumbnail: string;
}

export function WorkCard({ vimeoId, title, role, year, thumbnail }: WorkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={`https://vimeo.com/${vimeoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-950">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            fill
            className={`object-cover transition-opacity duration-700 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
        {isHovered && (
          <iframe
            src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1&loop=1&background=1`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "calc(100% + 2px)",
              height: "calc(100% + 2px)",
              transform: "translate(-50%, -50%)",
              border: "none",
            }}
            allow="autoplay"
            title={title}
          />
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-sm md:text-base tracking-[0.15em] uppercase font-light text-white group-hover:text-white transition-colors duration-300 mb-2">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.15em] uppercase text-white">
            {role}
          </p>
          <p className="text-xs tracking-[0.1em] text-white/60">{year}</p>
        </div>
      </div>
    </a>
  );
}
