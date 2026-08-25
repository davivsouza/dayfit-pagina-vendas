import { Smartphone } from "lucide-react";

const features = [
  {
    title: "Treino em casa, todos os dias",
    text: "Sem precisar de nenhum equipamento, direto no seu celular.",
  },
  {
    title: "Treino guiado de academia",
    text: "Vídeo explicando cada exercício, série por série, pra você nunca mais ficar perdida.",
  },
  {
    title: "Diário alimentar simples",
    text: "Registre o que você come, sem culpa, só pra enxergar seus padrões.",
  },
  {
    title: "Cardápio sugerido",
    text: "Pensado pro seu momento hormonal, pra você nunca ficar se perguntando o que preparar.",
  },
  {
    title: "Comunidade exclusiva",
    text: "Outras mulheres na mesma jornada, com a Day acompanhando de perto.",
  },
];

function PhoneMockup({ label }: { label: string }) {
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border-8 border-gray-900 bg-gray-900 shadow-xl">
      <div className="flex aspect-[9/19] flex-col items-center justify-center gap-3 rounded-[1.5rem] bg-gradient-to-b from-gray-100 to-gray-200 px-4 text-center">
        <Smartphone className="size-7 text-gray-400" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Print real do app
        </span>
        <span className="text-xs font-semibold text-gray-500">{label}</span>
      </div>
    </div>
  );
}

export function AppTour() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-xl font-extrabold text-gray-900 sm:text-2xl">
          Tudo isso, na palma da sua mão
        </h2>
        <p className="mt-3 text-center text-sm text-gray-600 sm:text-base">
          O aplicativo exclusivo do PNM, o seu parceiro de todo dia nessa
          jornada.
        </p>

        <div className="mt-14 space-y-14">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col items-center gap-8 md:gap-14 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <PhoneMockup label={feature.title} />
              </div>
              <div className="w-full text-center md:w-1/2 md:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-display text-lg font-extrabold text-gray-900 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
