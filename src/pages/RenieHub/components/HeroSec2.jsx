import React from 'react'
import chart from "../../../assets/images/chart.webp"

const HeroSec2 = () => {
   return (
      <div className='max-w-[1440px] min-h-screen mx-auto mt-20  text-center'>
        <p  className='text-[36px] leading-[45px] font-[600] gradient-text '>
            How is waste transformed into income while <br/> measuring the environmental impact? 
        </p>
        <div className='my-20'>
        <img className=' w-[1200px] mx-auto ' src={chart} alt='chart Hub image' />
        </div>

       
      </div>
    )
}

export default HeroSec2
