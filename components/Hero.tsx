import { ViewerCounter } from "./ViewerCounter";
import { VslPlayer } from "./VslPlayer";

export function Hero() {
  return (
    <section className="bg-dark px-4 pb-16 pt-28 text-center sm:pt-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
        <p className="text-sm text-gray-400 sm:text-base">
          Por que você treina, se alimenta certo, e seu corpo{" "}
          <strong className="font-semibold text-accent">não responde</strong>?
        </p>

        <h1 className="font-display text-2xl font-black uppercase leading-tight text-white sm:text-3xl md:text-4xl">
          Descubra o método que{" "}
          <span className="text-accent">destrava o metabolismo</span> e faz seu
          corpo emagrecer <span className="text-accent">3x mais rápido</span>,
          mesmo depois dos 35!
        </h1>

        <p className="max-w-2xl text-sm text-gray-300 sm:text-base">
          Assista ao vídeo e conheça o{" "}
          <strong className="text-white">Projeto Nova Mulher (PNM)</strong>, com
          treino, alimentação e acompanhamento pensados exclusivamente pra essa
          fase do corpo da mulher.
        </p>

        <ViewerCounter />

        <VslPlayer />

        <a
          href="#oferta"
          className="mt-2 w-full max-w-xl rounded-xl bg-cta px-8 py-5 text-center font-display text-base font-extrabold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(22,163,74,0.4)] transition-colors hover:bg-cta-dark sm:text-lg"
        >
          Quero destravar meu resultado
        </a>
      </div>
    </section>
  );
}
