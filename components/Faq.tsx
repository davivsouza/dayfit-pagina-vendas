"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Preciso ter equipamento em casa?",
    answer:
      "Não, o PNM tem treinos completos usando só o peso do corpo, além de opção pra quem treina em academia.",
  },
  {
    question: "Funciona pra quem já usa caneta emagrecedora?",
    answer:
      "Sim, o método ajuda a sustentar resultado e preservar massa magra, com ou sem uso de medicação.",
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem garantia de 7 dias pra testar sem risco.",
  },
  {
    question: "Preciso seguir dieta restritiva?",
    answer: "Não, o PNM foi feito pra funcionar sem restrição extrema.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim, conforme as regras de cada plano (renovação automática por período).",
  },
  {
    question: "Como recebo meu acesso depois de pagar?",
    answer:
      "Assim que o pagamento é aprovado, você recebe no e-mail usado no checkout um link para criar sua senha e entrar na plataforma de aulas. Se não achar, procure por DAY FIT na caixa de spam e promoções.",
  },
  {
    question: "É seguro comprar pela internet?",
    answer:
      "Sim, o pagamento é processado pela Cakto, plataforma com sistema de segurança reconhecido no mercado, com cartão, Pix ou boleto. Compre sempre pelo site oficial.",
  },
  {
    question: "Vou ter suporte depois da compra?",
    answer:
      "Sim, nossa equipe de suporte está disponível pra esclarecer dúvidas ao longo de toda sua jornada no PNM.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-xl font-extrabold text-gray-900 sm:text-2xl">
          Perguntas frequentes
        </h2>

        <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-accent transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
