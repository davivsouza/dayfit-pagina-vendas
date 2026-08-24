"use client";

import ReactDOM from "react-dom";

import { VSL } from "@/lib/vsl";

// Aquece o player da VSL: os hints são emitidos no <head> do HTML inicial.
export function VslResourceHints() {
  ReactDOM.preload(VSL.playerScript, { as: "script" });
  ReactDOM.preload(VSL.smartplayerScript, { as: "script" });
  ReactDOM.preload(VSL.playlist, { as: "fetch" });
  VSL.origins.forEach((origin) => ReactDOM.prefetchDNS(origin));

  return null;
}
