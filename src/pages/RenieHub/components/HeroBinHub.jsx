import React from 'react'
import renieHub from "../../../assets/images/hubImg-1.png"  
import circle from "../../../assets/images/round-2.png"  
import circleTwo from "../../../assets/images/round-1.png" 


const HeroBinHub = () => {
  return (
    <div className='max-w-[1440px] min-h-screen flex justify-center items-center gap-4 mx-auto'>
      <div className=''>
         <img className=' w-[288px]  absolute z-0 top-40 left-20' src={circle} alt='cicle' /> 
         <img className=' w-[445px] relative z-10' src={renieHub} alt='renie Hub image' />
        
      </div>
      <div className='w-[632px] relative'>
      <div>
          <h2 className='text-[45px] leading-[45px] font-[900] gradient-text'>Earn income while you make a traceable impact</h2>
          <p className='text-[18px] leading-[27px] font-[400] mt-6 '>Our innovative platform makes it possible to generate a passive income from data monetization of plastic waste</p>
      </div>
      <div>

          <img className=' w-[193px] relative bottom-0 right-0 ' src={circleTwo} alt='renie Hub image' />
      </div>
         
      </div>

    </div>
  )
}

export default HeroBinHub
