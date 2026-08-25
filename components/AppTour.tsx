import Image, { type StaticImageData } from "next/image";

import print1 from "@/assets/imagens_app/1.png";
import print2 from "@/assets/imagens_app/2.png";
import print3 from "@/assets/imagens_app/3.png";
import print4 from "@/assets/imagens_app/4.png";
import print5 from "@/assets/imagens_app/5.png";

const features: { title: string; text: string; src: StaticImageData }[] = [
  {
    title: "Treino em casa, todos os dias",
    text: "Sem precisar de nenhum equipamento, direto no seu celular.",
    src: print1,
  },
  {
    title: "Treino guiado de academia",
    text: "Vídeo explicando cada exercício, série por série, pra você nunca mais ficar perdida.",
    src: print2,
  },
  {
    title: "Diário alimentar simples",
    text: "Registre o que você come, sem culpa, só pra enxergar seus padrões.",
    src: print3,
  },
  {
    title: "Cardápio sugerido",
    text: "Pensado pro seu momento hormonal, pra você nunca ficar se perguntando o que preparar.",
    src: print4,
  },
  {
    title: "Comunidade exclusiva",
    text: "Outras mulheres na mesma jornada, com a Day acompanhando de perto.",
    src: print5,
  },
];

function PhoneMockup({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className="mx-auto w-full max-w-[220px] rounded-[2rem] border-8 border-gray-900 bg-gray-900 shadow-xl">
      <div className="overflow-hidden rounded-[1.5rem] bg-black">
        <Image
          src={src}
          alt={alt}
          sizes="220px"
          placeholder="blur"
          className="h-auto w-full"
        />
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
                <PhoneMockup
                  src={feature.src}
                  alt={`Tela do app PNM: ${feature.title}`}
                />
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
