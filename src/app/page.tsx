import { Header } from '@/sections/Header'
import { Hero } from '@/sections/Hero'
import { LogoTicker } from '@/sections/LogoTicker'
import { ProductShowcase } from '@/sections/ProductShowcase';
import { Pricing } from '@/sections/Pricing';

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
    </div>
  );
}
