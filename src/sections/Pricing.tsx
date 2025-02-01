'use client'

import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge';

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
        <div className='section-heading'>
          <h2 className='section-title'>Preços</h2>
          <p className='section-description mt-5'>Livre para sempre. Atualize para tarefas ilimitadas, melhor segurança e recursos exclusivos.</p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-16 lg:flex-row lg:items-center lg:justify-center'>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
            <div className={twMerge('p-10 border border-black/20 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full', inverse === true && 'border-black bg-black text-white/60')}>
              <div className='flex justify-between'>
                <h3 className={twMerge('text-lg font-bold textblack/50', inverse === true && 'text-white/60')}>{title}</h3>
                {popular === true && (
                  <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'><span className={twMerge('bg-[linear-gradient(to_right,#DD7DDF,#E1CD86, #BBCB92,#71C2EF,#3BFFF,#DD7DDF)] text-transparent bg-clip-text font-medium', inverse === true && 'text-white/60')}>Popular</span></div>
                )}
              </div>
              <div className='flex items-baseline gap-1 mt-[30px]'>
                <span className='text-4xl font-bold tracking-tighter leading-none'>R${monthlyPrice}</span>
                <span className='tracking-tight font-bold text-black/50'>/mês</span>
              </div>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature => (
                  <li className='text-sm flex items-center gap-4'>
                    <CheckIcon className='h-6 w-6' />
                    <span>{feature}</span>
                  </li>
                )))}
              </ul>
              <button className={twMerge('btn btn-primary w-full mt-[30px]', inverse === true && 'bg-white text-black')}>{buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
