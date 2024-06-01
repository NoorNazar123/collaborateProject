import React from 'react'
import findnearest from "../../../assets/images/findnearest.webp";
import google from "../../../assets/images/google.webp";

const HeroApp4 = () => {
  return (
    <div>
      <div
          className="min-h-[256px] flex justify-around items-center"
          style={{
            background:
              "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
          }} 
        >

<div>
        <img
          className="w-[213px] relative z-0 top-0 le"
          src={findnearest}
          alt="AdMap"
        />
      </div>

<div>
   
<h2 className="text-[45px] leading-[45px] font-[900] text-white mb-4">
          Find the closest <br />
          Renie Bin.<br />
          And navigate to it

          </h2>
          <span className='text-[18px] text-white'>works with</span> 
          <img
          className="w-[113px] mt-4"
          src={google}
          alt="AdMap"
        />
</div>
        </div>
    </div>
  )
}

export default HeroApp4
