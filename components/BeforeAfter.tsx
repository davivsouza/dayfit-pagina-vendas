import Image, { type StaticImageData } from "next/image";

import barriga30Dias from "@/assets/antes_depois/transformacao-barriga-30-dias.png";
import doze from "@/assets/antes_depois/transformacao-12kg.png";
import dezessete from "@/assets/antes_depois/transformacao-17kg.png";
import cinquentaEOito from "@/assets/antes_depois/transformacao-58-anos.png";
import gluteo from "@/assets/antes_depois/transformacao-gluteo-12-semanas.png";
import medidas from "@/assets/antes_depois/transformacao-medidas.png";

const cases: { src: StaticImageData; alt: string }[] = [
  { src: doze, alt: "Antes e depois: menos 12 kg em cerca de 3 meses" },
  { src: medidas, alt: "Antes e depois: menos medidas treinando em casa" },
  { src: barriga30Dias, alt: "Antes e depois: menos barriga em 30 dias" },
  { src: dezessete, alt: "Antes e depois: menos 17 kg em 2 meses" },
  { src: cinquentaEOito, alt: "Antes e depois: cintura mais fina aos 58 anos" },
  { src: gluteo, alt: "Antes e depois: glúteo em 12 semanas" },
];

export function BeforeAfter() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Transformações reais de quem já vive essa virada
        </h2>
        <p className="mt-3 text-base text-gray-600 sm:text-lg">
          Resultado de mulheres que aplicaram o mesmo método que você vai
          conhecer agora.
        </p>

        <div className="mt-10 columns-2 gap-4 md:columns-3 md:gap-6">
          {cases.map((item) => (
            <figure
              key={item.src.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md md:mb-6"
            >
              <Image
                src={item.src}
                alt={item.alt}
                sizes="(min-width: 768px) 320px, 45vw"
                placeholder="blur"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Resultados individuais podem variar. As imagens representam
          experiências pessoais de usuárias do PNM.
        </p>
      </div>
    </section>
  );
}
