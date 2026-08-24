import { Award, Heart, Medal, Megaphone } from "lucide-react";
import Image from "next/image";

import dayMormano from "@/assets/foto_day/day-mormano.jpg";

const credentials = [
  { icon: Medal, value: "20+", label: "anos de experiência" },
  { icon: Award, value: "6x", label: "Ex-atleta de fisiculturismo, campeã" },
  { icon: Heart, value: "+2.500", label: "mulheres ajudadas" },
  { icon: Megaphone, value: "704 mil", label: "pessoas nas redes sociais" },
];

export function Authority() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Quem te ensina isso, já viveu isso
        </h2>

        <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
          <Image
            src={dayMormano}
            alt="Day Mormano"
            sizes="280px"
            placeholder="blur"
            className="w-full max-w-70 shrink-0 rounded-xl shadow-md"
          />

          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
            <p>
              Eu sou a Day Mormano. Trabalho há mais de 20 anos com treino e
              emagrecimento, fui atleta de fisiculturismo, campeã por seis anos
              consecutivos, e já ajudei mais de 2.500 mulheres a conquistarem
              esse resultado.
            </p>
            <p>
              Mas antes de qualquer credencial, preciso te contar uma coisa:
              depois da minha segunda gestação, engordei mais de 30 quilos.
              Treinei, me alimentei certo, e mesmo assim meu corpo não
              respondia. Foi vivendo esse travamento na pele que entendi o que
              realmente precisava mudar, não era esforço, era método.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {credentials.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm"
            >
              <item.icon className="size-6 text-brand" />
              <p className="font-display text-2xl font-black text-gray-900">
                {item.value}
              </p>
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
