import { Check, Crown, Gift } from "lucide-react";
import { CHECKOUT_URLS } from "@/lib/checkout";

const plans = [
  {
    id: "anual",
    name: "Anual",
    price: "R$ 44,90",
    total: "R$ 538,80 à vista",
    renewal: "Renovação automática a cada 12 meses",
    highlighted: true,
    checkoutUrl: CHECKOUT_URLS.anual,
  },
  {
    id: "semestral",
    name: "Semestral",
    price: "R$ 52,90",
    total: "R$ 317,40 à vista",
    renewal: "Renovação automática a cada 6 meses",
    highlighted: false,
    checkoutUrl: CHECKOUT_URLS.semestral,
  },
  {
    id: "mensal",
    name: "Mensal",
    price: "R$ 64,90",
    total: null,
    renewal: "Renovação automática mensal",
    highlighted: false,
    checkoutUrl: CHECKOUT_URLS.mensal,
  },
];

const bonuses = [
  { name: "Guia Anti-Efeito Sanfona", value: "R$147" },
  { name: "Cardápio Sem Fome", value: "R$127" },
  { name: "Consultoria de bônus com a equipe", value: "R$97" },
];

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-24 bg-gray-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Assine e tenha acesso a todos os conteúdos da plataforma
        </h2>
        <p className="mt-3 text-center text-base text-gray-600 sm:text-lg">
          Sem surpresas, sem cobranças extras.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-7 ${
                plan.highlighted
                  ? "border-2 border-brand bg-white shadow-2xl md:-my-3"
                  : "border border-gray-200 bg-white shadow-md"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
                  Mais vendido
                </span>
              )}
              <div className="flex items-center justify-center gap-2">
                {plan.highlighted && (
                  <Crown className="size-5 fill-amber-400 text-amber-500" />
                )}
                <h3 className="font-display text-lg font-extrabold uppercase text-gray-900">
                  {plan.name}
                </h3>
              </div>
              <div className="mt-5 text-center">
                <p className="font-display text-4xl font-black text-gray-900">
                  {plan.price}
                  <span className="text-base font-semibold text-gray-500">
                    /mês
                  </span>
                </p>
                {plan.total && (
                  <p className="mt-1 text-sm text-gray-500">{plan.total}</p>
                )}
              </div>
              <p className="mt-4 flex-1 text-center text-xs text-gray-500">
                {plan.renewal}
              </p>
              <a
                href={plan.checkoutUrl}
                className={`mt-6 rounded-xl px-6 py-4 text-center font-display text-base font-extrabold uppercase tracking-wide text-white transition-colors ${
                  plan.highlighted
                    ? "bg-cta shadow-[0_8px_30px_rgba(22,163,74,0.35)] hover:bg-cta-dark"
                    : "bg-gray-900 hover:bg-gray-700"
                }`}
              >
                Quero esse
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-400">
          Todos os planos com incidência de juros conforme parcelamento.
        </p>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
          <h3 className="flex items-center justify-center gap-2 font-display text-lg font-extrabold uppercase text-gray-900">
            <Gift className="size-5 text-brand" />
            Bônus exclusivos
          </h3>
          <ul className="mt-5 space-y-3">
            {bonuses.map((bonus) => (
              <li
                key={bonus.name}
                className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-4 py-3 text-sm shadow-sm"
              >
                <span className="flex items-center gap-2 font-medium text-gray-800">
                  <Check className="size-4 shrink-0 text-cta" />
                  {bonus.name}
                </span>
                <span className="text-gray-500">
                  <s>{bonus.value}</s>{" "}
                  <strong className="font-bold text-cta">GRÁTIS</strong>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-center text-sm font-bold text-gray-900">
            Total em bônus: <span className="text-brand">R$371</span>, de
            presente
          </p>
        </div>
      </div>
    </section>
  );
}
