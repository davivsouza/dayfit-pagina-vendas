import { ImageIcon } from "lucide-react";

const cases = [
  { name: "Fabiana R.", caption: "3 meses de PNM" },
  { name: "Juliana M.", caption: "4 meses de PNM" },
  { name: "Patrícia S.", caption: "2 meses de PNM" },
  { name: "Renata C.", caption: "6 meses de PNM" },
  { name: "Adriana L.", caption: "3 meses de PNM" },
  { name: "Cristiane F.", caption: "5 meses de PNM" },
];

function PlaceholderHalf({ label }: { label: string }) {
  return (
    <div className="flex aspect-[3/4] flex-1 flex-col items-center justify-center gap-2 bg-gradient-to-b from-gray-100 to-gray-200">
      <ImageIcon className="size-6 text-gray-400" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  );
}

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

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {cases.map((item) => (
            <figure
              key={item.name}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md"
            >
              <div className="flex gap-px bg-gray-300">
                <PlaceholderHalf label="Antes" />
                <PlaceholderHalf label="Depois" />
              </div>
              <figcaption className="px-3 py-3">
                <p className="text-sm font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500">{item.caption}</p>
              </figcaption>
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
