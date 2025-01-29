import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className="pt-8 pb-20">
      <div className="container">
        <div>
          <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">A versão 2.0 está aqui</div>
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#072eb1] text-transparent bg-clip-text mt-6">Caminho para a produtividade</h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Comemore a alegria da conquista com um aplicativo desenvolvido para fazer você progredir, motivar seus esforços e comemorar seus sucessos.</p>
          <div className="flex gap-2 items-center mt-[30px]">
            <button className="btn btn-primary">Receba de graça</button>
            <button className="btn btn-text gap-1">
              <span>Saiba mais</span>
              <ArrowRight className="h-5 w-5"/>
            </button>
          </div>
        </div>
        <div className="">
          <Image src={cogImage} alt='Cog image'/>
        </div>
      </div>
    </section>
  );
};
