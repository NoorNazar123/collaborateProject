import React from "react";
import adheight from "../../../assets/images/ad-height.webp";
import reniebg from "../../../assets/images/renie-bg.png";

const HeroAds5 = () => {
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
            src={adheight}
            alt="AdMap"
          />
        </div>

        <div className="flex gap-2">
          <div className="w-[600px] text-white">

          <h2 className="text-[45px] leading-[45px] font-[900] mb-4">
          Your ad is the first impression
          </h2>
          <span className="text-[18px] leading-[27px] font-[300] ">100% of the screen is covered by your advertisement. Our interface button has a subtle presence in your brands color.</span>
          <button className="heroButton mt-4">Connect with an expert</button>
          </div>
          <img className="w-[100px] h-[100px]" src={reniebg} alt="Ads Hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroAds5;
