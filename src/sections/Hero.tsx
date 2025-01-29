import ArrowRight from '@/assets/arrow-right.svg'
import cogImage from '@/assets/cog.png'
import cylinderImage from '@/assets/cylinder.png'
import noodleImage from '@/assets/noodle.png'
import Image from 'next/image'

export const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
      <div className='container'>
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <div className="text-sm inline-flex border border-[#222]/10 py-1 px-3 rounded-lg tracking-tight">A versão 2.0 está aqui</div>
            <h1 className='text-5xl md:text-7xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Caminho para a produtividade</h1>
            <p className='text-xl text-[#010D3E] tracking-tight mt-6'>Comemore a alegria da conquista com um aplicativo desenvolvido para fazer você progredir, motivar seus esforços e comemorar seus sucessos.</p>
            <div className='flex gap-2 items-center mt-[30px]'>
              <button className='btn btn-primary'>Receba de graça</button>
              <button className='btn btn-text gap-1'>
                <span>Saiba mais</span>
                <ArrowRight className='h-6 w-6' />
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image src={cogImage} alt='Cog image' className='hidden md:block md:absolute md:h-full md:w-auto md:max-w-none md:-left-6' />
            <Image src={cylinderImage} alt='' className='hidden md:block -top-8 -left-32 md:absolute' width={220} height={220}/>
          </div>
        </div>
      </div>
    </section>
  );
};