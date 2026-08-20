import { Flame, Timer, Utensils, Users } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    number: "Pilar 1",
    title: "Ativação",
    text: "O estímulo chega no músculo certo, na intensidade certa pro seu momento hormonal. Não é sobre treinar mais, é sobre ativar o que precisa ser ativado, mesmo depois de anos de metabolismo mais lento.",
  },
  {
    icon: Timer,
    number: "Pilar 2",
    title: "Tempo mínimo eficaz",
    text: "Cada minuto de treino é pensado pra render o máximo, sem desperdício, sem sessão de uma hora que você não tem como encaixar na sua rotina.",
  },
  {
    icon: Utensils,
    number: "Pilar 3",
    title: "Alimentação sem restrição extrema",
    text: "Uma estrutura alimentar pensada pro seu momento hormonal, sem dieta radical que te faz passar fome e desistir na segunda semana.",
  },
  {
    icon: Users,
    number: "Pilar 4",
    title: "Constância guiada",
    text: "Acompanhamento que não deixa você desistir no meio do caminho, porque motivação sozinha nunca foi o suficiente pra ninguém sustentar resultado.",
  },
];

export function Methodology() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
          O método por trás do resultado: conheça o PNM
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed text-gray-600 sm:text-lg">
          <p>
            PNM significa Projeto Nova Mulher. E &ldquo;nova&rdquo; aqui não é
            sobre virar outra pessoa, é sobre voltar a ser a mulher que você já
            foi, com um método construído nos mínimos detalhes pra fisiologia
            feminina depois dos 35.
          </p>
          <p>
            Não é treino genérico adaptado. É um sistema com quatro pilares que
            trabalham juntos pra quebrar o travamento e fazer o resultado
            aparecer de verdade.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-gray-100 bg-gray-50 p-7 shadow-sm"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                <pillar.icon className="size-6 text-accent" />
              </span>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-accent">
                {pillar.number}
              </p>
              <h3 className="mt-1 font-display text-lg font-extrabold uppercase text-gray-900">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {pillar.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium text-gray-800 sm:text-lg">
          Quatro pilares, um método, um nome:{" "}
          <strong className="text-brand">PNM</strong>. Não é sobre se esforçar
          mais, é sobre se esforçar certo, no método certo pra essa fase do seu
          corpo.
        </p>
      </div>
    </section>
  );
}
