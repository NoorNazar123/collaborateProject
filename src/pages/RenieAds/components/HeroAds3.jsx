import React from "react";
import filter from "../../../assets/images/filter.webp"

const HeroAds3 = () => {
  return (
   
      <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4">
        <div>
          <img className="w-[380px] h-[503px]" src={filter} alt="image hub" />
        </div>

        <div className="w-[660px]">
          <h2 className="text-[45px] leading-[45px] font-[900] gradient-text">
          The power of data extraction out of waste
          </h2>

          <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8"> 
          Ads That Matter’s AI algorithm continuously optimizes itself powered by big data that is being fed by 1.000’s of Renie bins that are placed in different types of areas, reaching various types of consumers from all walks of life.
          </p>

          <button className="heroButton ">Connect with an expert</button>
        </div>
      </div>
    
  );
};

export default HeroAds3;
