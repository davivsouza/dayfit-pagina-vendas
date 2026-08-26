import { PLATFORM_LOGIN_URL } from "@/lib/platform";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark-soft px-4 py-12 text-center">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="space-y-4 text-xs leading-relaxed text-gray-500">
          <p>
            Os depoimentos nesta página são experiências pessoais de cada mulher
            e não é garantido que você irá obter resultados iguais. Como
            qualquer outro programa de exercícios, você assume certos riscos
            para a sua saúde e segurança ao utilizar o Projeto Nova Mulher.
          </p>
          <p>
            Este produto não substitui acompanhamento médico ou nutricional
            individualizado. Resultados individuais podem variar.
          </p>
          <p>
            Este site não faz parte do site Facebook ou do Facebook Inc. Além
            disso, este site não é endossado pelo Facebook de nenhuma maneira.
            FACEBOOK é uma marca comercial da FACEBOOK, INC.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-gray-400">
          <a href="#" className="hover:text-white">
            Termos de Uso
          </a>
          <span aria-hidden>|</span>
          <a href="#" className="hover:text-white">
            Política de Privacidade
          </a>
          <span aria-hidden>|</span>
          <a href="#" className="hover:text-white">
            Contato/Suporte
          </a>
          <span aria-hidden>|</span>
          <a
            href={PLATFORM_LOGIN_URL}
            className="font-semibold text-white hover:text-accent"
          >
            Já sou aluna
          </a>
        </nav>

        <div className="space-y-1 text-xs text-gray-600">
          <p>[CNPJ / Razão Social]</p>
          <p>Copyright © {year} — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}
