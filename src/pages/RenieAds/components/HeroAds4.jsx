import React from 'react'
import adedit from "../../../assets/images/ad-edit.webp"

const HeroAds4 = () => {
  return (
     
   <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4 mt-5">

   <div className="w-[660px]">
     <h2 className="text-[45px] leading-[45px] font-[900] gradient-text">
     Your Brand, <br/> fully customizable on our interface 
     </h2>

     <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8"> 
     Your advertisement covers the full screen of the mobile phone the moment a user connect to a Renie Bin, all your tailored brand’s colors and messaging comes to live and fully takes over their mobile screen.
     </p>

     <button className="heroButton ">Connect with an expert</button>
   </div>
   <div>
     <img className=" h-[403px]" src={adedit} alt="image hub" />
   </div>
 </div>
  )
}

export default HeroAds4
