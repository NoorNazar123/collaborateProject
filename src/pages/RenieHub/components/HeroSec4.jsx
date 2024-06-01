import React from 'react'
import trackImapact from "../../../assets/images/track-impact.webp"

const HeroSec4 = () => {
  return (  
    <div className='max-w-[1440px] min-h-[70vh] flex justify-center items-center'>
      <div className='w-[660px]'>
         <h2  className='text-[45px] leading-[35px] font-[900] gradient-text' >Track Impact and Waste</h2>
         <p className='text-[18px] leading-[27px] font-[400] mt-4 mb-8'>Monitor the difference you are making by tracking the waste collected and recycled by the Renie Bins you’ve been provided. You can also generate tailored ESG reports about your created impact.</p>
         <button className='heroButton '>Connect with an expert</button>
      </div>
      <div>
         <img className='w-[413px]' src={trackImapact} alt='image hub' />
      </div>
    </div>
  )
}
 
export default HeroSec4
