import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    text: "Eu já tinha tentado de tudo antes de conhecer o PNM. Em poucas semanas comecei a sentir diferença de verdade, e o melhor, sem passar fome.",
    author: "Fabiana R., 38 anos",
  },
  {
    text: "Depois dos 40 eu achava que meu corpo não respondia mais. Com o PNM entendi que o problema nunca foi esforço, era método. Hoje me sinto outra mulher.",
    author: "Juliana M., 42 anos",
  },
  {
    text: "Os treinos são curtos e cabem na minha rotina corrida. Pela primeira vez consegui manter constância por mais de três meses seguidos.",
    author: "Patrícia S., 37 anos",
  },
  {
    text: "O cardápio é simples, sem neura e sem dieta maluca. Emagreci comendo comida de verdade, com a família toda na mesa.",
    author: "Renata C., 45 anos",
  },
  {
    text: "A comunidade faz toda a diferença. Nos dias que bate desânimo, ver outras mulheres na mesma jornada me segura firme no processo.",
    author: "Adriana L., 39 anos",
  },
  {
    text: "Minha roupa voltou a servir e minha disposição mudou completamente. Meu marido foi o primeiro a notar a diferença.",
    author: "Cristiane F., 41 anos",
  },
];

export function Testimonials() {
  return (
    <section className="bg-dark-soft px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-xl font-extrabold text-white sm:text-2xl">
          O que elas estão dizendo
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.author}
              className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 shadow-lg"
            >
              <Quote className="size-7 fill-accent/15 text-accent" />
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-300">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <figcaption>
                <p className="text-sm font-bold text-white">
                  — {item.author}
                </p>
                <div className="mt-1.5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500">
          Os depoimentos nesta página são experiências pessoais de cada mulher e
          não é garantido que você irá obter resultados iguais.
        </p>
      </div>
    </section>
  );
}
