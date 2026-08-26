# PV — Projeto Nova Mulher (PNM)

Página de vendas do Projeto Nova Mulher, implementada conforme o documento de handoff (`PV-PNM.html`). Referência estrutural: amandabiuger.com.br.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- lucide-react (ícones)

```bash
npm install
npm run dev
```

## Estrutura (ordem das dobras, conforme handoff)

| # | Dobra | Componente |
|---|-------|------------|
| 1 | Hero + VSL | `components/Hero.tsx` (+ `ScarcityBar`, `ViewerCounter`, `VslPlayer`) |
| 2 | Antes e Depois | `components/BeforeAfter.tsx` |
| 3 | Depoimentos em Texto | `components/Testimonials.tsx` |
| 4 | Metodologia (4 pilares) | `components/Methodology.tsx` |
| 5 | Autoridade (quem é a Day) | `components/Authority.tsx` |
| 6 | O Aplicativo | `components/AppTour.tsx` |
| 7 | Oferta e Planos | `components/Offer.tsx` |
| 8 | Garantia | `components/Guarantee.tsx` |
| 9 | FAQ | `components/Faq.tsx` |
| 10 | CTA Final | `components/FinalCta.tsx` |
| 11 | Rodapé | `components/Footer.tsx` |

## Pendências do handoff (bloqueiam a publicação)

- **VSL**: o player em `components/VslPlayer.tsx` é um placeholder visual. Inserir o embed do vídeo quando o corte final da VSL estiver pronto.
- **Antes/Depois**: os cards em `components/BeforeAfter.tsx` usam imagens e nomes placeholder. Substituir pelas imagens reais já existentes e **confirmar autorização de uso de cada uma**.
- **Depoimentos**: os textos em `components/Testimonials.tsx` são ilustrativos (apenas o da Fabiana R. veio do handoff). Substituir pelos relatos reais já coletados e intercalar com imagens da Dobra 2 quando possível.
- **Foto da Day**: substituir o placeholder em `components/Authority.tsx` por foto real (formato retrato).
- **Prints do app** (crítico): substituir os mockups em `components/AppTour.tsx` por prints reais da interface.
- **Claim "3x mais rápido"**: validar internamente a base que sustenta o claim antes de publicar (página recebe tráfego pago).
- **Jurídico**: CNPJ/Razão Social no rodapé, páginas de Termos de Uso, Política de Privacidade e Contato/Suporte, e disclaimer padrão exigido pela Cakto.

## Checkout (Cakto)

O pagamento é processado pela **Cakto**, na **mesma conta** que alimenta a plataforma
de aulas do DayFit (`dayfit` + `dayfit-back`). Esta página só leva a compradora ao
checkout hospedado; quem libera o acesso é o webhook do backend.

```
Aluna clica no plano em daymormano.online
   └─→ checkout da Cakto      https://pay.cakto.com.br/{oferta}
        └─→ pagamento aprovado
             ├─→ Cakto redireciona para a página de obrigado da plataforma
             └─→ POST .../payments/webhooks/cakto  (backend do DayFit)
                  ├─ resolve o plano pelo id da oferta
                  ├─ cria a aluna e ativa a assinatura
                  └─→ e-mail com link para criar a senha e assistir
```

### De onde vêm os planos

`lib/plans.ts` busca `GET {DAYFIT_API_URL}/payments/plans` no build/revalidação (ISR de
5 min) — a **mesma** rota que a plataforma consome. Preço, nome e link de checkout saem
do banco, então não existe divergência entre os dois sites. Se a API estiver fora do ar,
entra o fallback estático do próprio arquivo, com os links da Cakto de `lib/checkout.ts`.

Para mudar preço ou oferta, ajuste no painel da Cakto e rode o seed do `dayfit-back`
(`CAKTO_OFFER_*` + `pnpm db:seed`). Esta página acompanha sozinha — sem deploy.

### Tags de campanha

`components/CheckoutButton.tsx` repassa `utm_source`, `utm_medium`, `utm_campaign`,
`utm_content`, `utm_term`, `src` e `sck` da URL da landing para o checkout, para a venda
chegar identificada no painel da Cakto. Sem tag na URL, o link vai com `src=pv-pnm`.

### Variáveis de ambiente

Ver `.env.example`. Todas têm padrão de produção no código — a página funciona sem
configurar nada na Vercel. Os `NEXT_PUBLIC_CAKTO_OFFER_*` só entram no fallback e
precisam ser os **mesmos ids** das envs `CAKTO_OFFER_*` do `dayfit-back`.

## Comportamentos implementados

- Barra de escassez fixa no topo (gradiente vermelho/rosa, full-width).
- Contador "mulheres assistindo agora" dinâmico: inicia em 638 e oscila na faixa 550–800 a cada 4s.
- FAQ em acordeão com uma pergunta aberta por vez.
- CTAs do hero e do CTA final rolam até a seção de oferta (`#oferta`); os botões dos planos vão direto para o checkout da Cakto.
- Ano do copyright gerado dinamicamente.
