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
- **Links de checkout**: definir em `lib/checkout.ts` (hoje apontam para `#oferta`). Plataforma (Hotmart/Cakto) a definir.
- **Claim "3x mais rápido"**: validar internamente a base que sustenta o claim antes de publicar (página recebe tráfego pago).
- **Jurídico**: CNPJ/Razão Social no rodapé, páginas de Termos de Uso, Política de Privacidade e Contato/Suporte, e disclaimer padrão da plataforma de pagamento (se Hotmart/Cakto).

## Comportamentos implementados

- Barra de escassez fixa no topo (gradiente vermelho/rosa, full-width).
- Contador "mulheres assistindo agora" dinâmico: inicia em 638 e oscila na faixa 550–800 a cada 4s.
- FAQ em acordeão com uma pergunta aberta por vez.
- CTAs (hero, planos e CTA final) rolam até a seção de oferta (`#oferta`) enquanto os links de checkout não são definidos.
- Ano do copyright gerado dinamicamente.
