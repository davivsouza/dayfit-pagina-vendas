import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Script from "next/script";

import { VslResourceHints } from "@/components/VslResourceHints";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Projeto Nova Mulher (PNM) — Destrave seu metabolismo",
  description:
    "Conheça o Projeto Nova Mulher (PNM): treino, alimentação e acompanhamento pensados exclusivamente pra essa fase do corpo da mulher depois dos 35.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <VslResourceHints />
        {children}
        {/* Marca o início do carregamento pro player da VTurb. */}
        <Script
          id="vturb-plt"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`,
          }}
        />
      </body>
    </html>
  );
}
