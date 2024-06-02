import React from 'react'
import mobileadfull from "../../../assets/images/mobile-ad-full.webp"
import round1 from "../../../assets/images/round-1.png"
import reniebg from "../../../assets/images/renie-bg.png"

const HeroAds1 = () => {
  return (
    <div className='maz-w-[1492px]'>
      <div className='flex justify-center'> 
      <img className='w-[100px] h-[100px]' src={round1} alt='Ads Hero' />
        <img className='' src={mobileadfull} alt='Ads Hero' />
        <img className='w-[100px] h-[100px]' src={reniebg} alt='Ads Hero' />
      </div>
      <div className='text-center'>
        <h1 className='text-[45px] leading-[45px] font-[900] gradient-text' >Your Ad performance <br /> measured in environmental impact</h1>
        <p className='text-[18px] leading-[27px] font-[400] mt-4 mb-8'>AI powered ad-targeting based on data collected from waste.</p>
      </div>
    </div>
  )
}

export default HeroAds1
