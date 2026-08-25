export function FinalCta() {
  return (
    <section className="bg-dark px-4 py-16 text-center sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
        <h2 className="font-display text-xl font-extrabold text-white sm:text-3xl">
          Chegou a hora de destravar seu resultado
        </h2>
        <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
          Se você quer voltar a se olhar no espelho e gostar do que vê, sem
          precisar contratar personal e nutricionista separado, sem seguir mais
          um treino genérico que não foi pensado pro seu corpo, eu te espero
          dentro do PNM.
        </p>
        <a
          href="#oferta"
          className="mt-2 w-full max-w-xl rounded-xl bg-cta px-8 py-5 text-center font-display text-base font-extrabold uppercase tracking-wide text-white shadow-[0_8px_30px_rgba(22,163,74,0.4)] transition-colors hover:bg-cta-dark sm:text-lg"
        >
          Quero começar agora
        </a>
      </div>
    </section>
  );
}
