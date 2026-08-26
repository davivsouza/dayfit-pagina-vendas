import { CHECKOUT_URLS, type PlanId } from "./checkout";

const DAYFIT_API_URL =
  process.env.DAYFIT_API_URL ?? "https://dayfit-back-production.up.railway.app";

const PLANS_REVALIDATE_SECONDS = 300;

export type OfferPlan = {
  id: PlanId;
  name: string;
  monthlyPrice: string;
  fullPrice: string | null;
  renewal: string;
  highlighted: boolean;
  checkoutUrl: string;
};

type ApiPlanInterval = "MONTHLY" | "SEMIANNUAL" | "ANNUAL";

type ApiPlan = {
  name: string;
  interval: ApiPlanInterval;
  monthlyPriceCents: number;
  fullPriceCents: number;
  highlight: boolean;
  note: string | null;
  checkoutUrl: string | null;
};

// SEMIANNUAL é nome histórico do enum do backend: a oferta renova a cada 3 meses.
const planIdByInterval: Record<ApiPlanInterval, PlanId> = {
  ANNUAL: "anual",
  SEMIANNUAL: "trimestral",
  MONTHLY: "mensal",
};

const renewalByPlan: Record<PlanId, string> = {
  anual: "Renovação automática a cada 12 meses",
  trimestral: "Renovação automática a cada 3 meses",
  mensal: "Renovação automática mensal",
};

// Espelha os planos de produção. Só aparece se a API estiver fora do ar na hora
// do build/revalidação — os links de checkout continuam sendo os da Cakto.
const FALLBACK_PLANS: OfferPlan[] = [
  {
    id: "anual",
    name: "Anual",
    monthlyPrice: "R$ 44,90",
    fullPrice: "R$ 538,80 à vista",
    renewal: renewalByPlan.anual,
    highlighted: true,
    checkoutUrl: CHECKOUT_URLS.anual,
  },
  {
    id: "trimestral",
    name: "Trimestral",
    monthlyPrice: "R$ 52,90",
    fullPrice: "R$ 158,70 à vista",
    renewal: renewalByPlan.trimestral,
    highlighted: false,
    checkoutUrl: CHECKOUT_URLS.trimestral,
  },
  {
    id: "mensal",
    name: "Mensal",
    monthlyPrice: "R$ 64,90",
    fullPrice: null,
    renewal: renewalByPlan.mensal,
    highlighted: false,
    checkoutUrl: CHECKOUT_URLS.mensal,
  },
];

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function formatCents(cents: number): string {
  return currency.format(cents / 100);
}

function mapPlan(plan: ApiPlan): OfferPlan {
  const id = planIdByInterval[plan.interval];
  const isSinglePayment = plan.fullPriceCents === plan.monthlyPriceCents;

  return {
    id,
    name: plan.name.replace(/^Plano\s+/i, ""),
    monthlyPrice: formatCents(plan.monthlyPriceCents),
    fullPrice: isSinglePayment
      ? null
      : `${formatCents(plan.fullPriceCents)} à vista`,
    renewal: renewalByPlan[id],
    highlighted: plan.highlight,
    // O checkout vem do banco (mesmo campo que a plataforma usa); a constante
    // local só cobre um plano cadastrado sem link.
    checkoutUrl: plan.checkoutUrl ?? CHECKOUT_URLS[id],
  };
}

/**
 * Planos e checkouts vêm da mesma API que a plataforma de aulas consome, para
 * preço e oferta nunca divergirem entre os dois sites.
 */
export async function getOfferPlans(): Promise<OfferPlan[]> {
  try {
    const response = await fetch(`${DAYFIT_API_URL}/payments/plans`, {
      next: { revalidate: PLANS_REVALIDATE_SECONDS },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const plans = (await response.json()) as ApiPlan[];
    const mapped = plans
      .filter((plan) => plan.interval in planIdByInterval)
      .sort((a, b) => a.monthlyPriceCents - b.monthlyPriceCents)
      .map(mapPlan);

    return mapped.length > 0 ? mapped : FALLBACK_PLANS;
  } catch (error) {
    console.error("Falha ao carregar os planos do DayFit:", error);
    return FALLBACK_PLANS;
  }
}
