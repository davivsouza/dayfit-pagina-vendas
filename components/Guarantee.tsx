import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="bg-green-50 px-4 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="flex size-24 flex-col items-center justify-center gap-1 rounded-full border-4 border-cta bg-white shadow-lg">
          <ShieldCheck className="size-9 text-cta" />
          <span className="text-[9px] font-black uppercase leading-none tracking-wide text-cta">
            7 dias
          </span>
        </span>

        <h2 className="mt-6 font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Risco zero pra você experimentar
        </h2>

        <div className="mt-5 space-y-4 text-base leading-relaxed text-gray-700 sm:text-lg">
          <p>
            Você tem 7 dias de garantia em qualquer compra online, é seu direito
            por lei. Entra no PNM, testa o treino, a alimentação, o app, o
            suporte. Se por qualquer motivo sentir que não é pra você, é só
            falar com o time que devolvemos o valor investido.
          </p>
          <p>
            Mas a maioria das mulheres que experimentam o programa não voltam
            pra pedir reembolso. Voltam pra agradecer pelo resultado.
          </p>
        </div>
      </div>
    </section>
  );
}
