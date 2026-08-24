import Script from "next/script";

import { VSL } from "@/lib/vsl";

export function VslPlayer() {
  return (
    <div className="mx-auto w-full max-w-100 overflow-hidden rounded-xl shadow-2xl">
      <vturb-smartplayer
        id={VSL.elementId}
        style={{ display: "block", margin: "0 auto", width: "100%" }}
      >
        {/* Reserva o espaço do vídeo (9:16) até o player montar. */}
        <div
          className="vturb-player-placeholder"
          style={{
            position: "relative",
            width: "100%",
            padding: "177.77777777777777% 0 0",
            zIndex: 0,
            backgroundColor: "black",
          }}
        />
      </vturb-smartplayer>
      <Script src={VSL.playerScript} strategy="afterInteractive" />
    </div>
  );
}
