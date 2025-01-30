import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import Image from 'next/image'
import tubeImage from '@/assets/tube.png'

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip  '>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Aumente sua produtividade</div>
          </div>
          <h2 className='text-center text-4xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5' >Uma maneira mais eficaz de acompanhar o progresso</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>Transforme facilmente suas ideias em um site Saas totalmente funcional e responsivo em apenas alguns minutos com este modelo.</p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='' className='mt-10' />
          <Image src={pyramidImage} alt='' className='md:block absolute -right-16 -top-16' height={120} width={120}/>
          <Image src={tubeImage} alt='' className='absolute bottom-7 -left-12' height={90} width={90}/>
        </div>
      </div>
    </section>
  );
};
