import React from 'react'
import hero from '../../public/hero.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='relative'>

    <Image src={hero}   alt="hero" />
    <div className="hidden lg:block absolute top-[75.5%] left-[100px] font-bold text-6xl text-white drop-shadow-lg">Empowering Minds, Shaping Futures</div>
  </div>
  )
}

export default Hero