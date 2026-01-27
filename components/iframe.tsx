"use client";

import { useState } from "react";

export function Iframe({ src }: { src: string }) {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className="relative w-full h-125 rounded-lg overflow-hidden border border-base-300 bg-base-200">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 animate-pulse bg-base-200">
          <div className="h-6 w-40 rounded bg-base-300" />
          <div className="h-4 w-60 rounded bg-base-300" />
          <div className="h-4 w-52 rounded bg-base-300" />
          <span className="loading loading-spinner loading-md text-base-content mt-2" />
        </div>
      )}

      <iframe
        data-testid="embed-iframe"
        src={src}
        onLoad={() => setLoaded(true)}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className={`w-full h-full transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ border: "none" }}
      />
    </div>
  );
}
