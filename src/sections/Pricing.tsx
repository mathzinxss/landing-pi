'use client'

import CheckImage from '@/assets/check.svg'

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Comece gratuitamente",
    popular: false,
    inverse: false,
    features: [
      "Até 5 membros do projeto",
      "Tarefas e projetos ilimitados",
      "Armazenamento de 2GB",
      "Integrações",
      "Suporte básico",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Inscreva-se agora",
    popular: true,
    inverse: true,
    features: [
      "Até 50 membros do projeto",
      "Tarefas e projetos ilimitados",
      "50 GB de armazenamento",
      "Integrações",
      "Suporte prioritário",
      "Suporte avançado",
      "Suporte à exportação",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Inscreva-se agora",
    popular: false,
    inverse: false,
    features: [
      "Até 5 membros do projeto",
      "Tarefas e projetos ilimitados",
      "200 GB de armazenamento",
      "Integrações",
      "Gerente de conta dedicado",
      "Campos personalizados",
      "Análise avançada",
      "Capacidades de exportação",
      "Acesso API",
      "Recursos avançados de segurança",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <h2 className="section-title ">Planos</h2>
        <p className="section-description mt-5">Livre para sempre. Atualize para tarefas ilimitadas, melhor segurança e recursos exclusivos.</p>
        <div className='flex flex-col gap-8 items-center mt-14 lg:flex-row'>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div key={title} className='p-10 border border-black/15 rounded-3xl shadow-[0_7px_14px_#EAEAEA]'>
              <h3 className='text-lg font-bold text-black/50'>{title}</h3>
              <div>
                <span className='text-4xl font-bold tracking-tighter'>R${monthlyPrice}</span>
                <span>/mês</span>
              </div>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckImage className='h-6 w-6' />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
                <button className='btn btn-primary mt-12'>{buttonText}</button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
