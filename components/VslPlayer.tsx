import { Maximize, Play } from "lucide-react";

export function VslPlayer() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-dark-soft via-[#1d1218] to-dark shadow-2xl">
      <button
        type="button"
        aria-label="Assistir ao vídeo"
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex size-20 items-center justify-center rounded-full bg-accent/90 shadow-[0_0_40px_rgba(255,61,110,0.5)] transition-transform hover:scale-105 sm:size-24">
          <Play className="ml-1 size-9 fill-white text-white sm:size-11" />
        </span>
      </button>
      <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
        <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-[3%] rounded-full bg-accent" />
        </div>
        <Maximize className="size-4 text-white/80" />
      </div>
    </div>
  );
}
