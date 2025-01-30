import acmeLogo from '@/assets/logo-acme.png'
import quantumLogo from '@/assets/logo-quantum.png'
import echoLogo from '@/assets/logo-echo.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets/logo-pulse.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return (
    <div>
      <div className="container">
        <div className='flex gap-14 flex-none'>
          <Image src={acmeLogo} alt=''/>
          <Image src={quantumLogo} alt=''/>
          <Image src={apexLogo} alt=''/>
          <Image src={celestialLogo} alt=''/>
          <Image src={echoLogo} alt=''/>
          <Image src={pulseLogo} alt=''/>
        </div>
      </div>
    </div>
  );
};
