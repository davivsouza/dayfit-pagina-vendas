// As ofertas vivem numa única conta da Cakto — a mesma que alimenta a plataforma
// de aulas. Quando o pagamento é aprovado, a Cakto chama o webhook do backend do
// DayFit, que cria a conta da aluna, ativa a assinatura e envia o e-mail de
// acesso. Por isso os ids abaixo precisam ser exatamente os mesmos das envs
// CAKTO_OFFER_* do backend: id diferente = venda sem plano correspondente e sem
// liberação de acesso.
export type PlanId = "anual" | "trimestral" | "mensal";

const CAKTO_CHECKOUT_BASE = "https://pay.cakto.com.br";

// SEMIANNUAL é o nome histórico do enum no backend: a oferta correspondente na
// Cakto renova a cada 3 meses, porque a plataforma não tem frequência semestral.
export const CAKTO_OFFER_IDS: Record<PlanId, string> = {
  anual: process.env.NEXT_PUBLIC_CAKTO_OFFER_ANNUAL ?? "32bgr86_1064156",
  trimestral:
    process.env.NEXT_PUBLIC_CAKTO_OFFER_SEMIANNUAL ?? "3a4yozy_1064085",
  mensal: process.env.NEXT_PUBLIC_CAKTO_OFFER_MONTHLY ?? "35nnpk4_1061823",
};

export const CHECKOUT_URLS: Record<PlanId, string> = {
  anual: `${CAKTO_CHECKOUT_BASE}/${CAKTO_OFFER_IDS.anual}`,
  trimestral: `${CAKTO_CHECKOUT_BASE}/${CAKTO_OFFER_IDS.trimestral}`,
  mensal: `${CAKTO_CHECKOUT_BASE}/${CAKTO_OFFER_IDS.mensal}`,
};

// Parâmetros que a Cakto guarda junto da venda e devolve no webhook/relatórios.
const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
];

// Marca as vendas que nasceram nesta página quando o tráfego chega sem tag.
const DEFAULT_SRC = "pv-pnm";

/** Repassa as tags de campanha da landing para o checkout hospedado da Cakto. */
export function withTracking(
  checkoutUrl: string,
  params: URLSearchParams,
): string {
  const url = new URL(checkoutUrl);

  for (const key of TRACKING_PARAMS) {
    const value = params.get(key)?.trim();
    if (value) url.searchParams.set(key, value);
  }

  if (!url.searchParams.has("src")) url.searchParams.set("src", DEFAULT_SRC);

  return url.toString();
}
