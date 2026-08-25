"use client";

import { useEffect, useState } from "react";

const MIN = 550;
const MAX = 800;

export function ViewerCounter() {
  const [count, setCount] = useState(638);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((current) => {
        const delta = Math.floor(Math.random() * 13) - 6;
        return Math.min(MAX, Math.max(MIN, current + delta));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex items-center justify-center gap-2 text-sm font-medium text-white/80">
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-red-600" />
      </span>
      {count} mulheres assistindo agora...
    </p>
  );
}
