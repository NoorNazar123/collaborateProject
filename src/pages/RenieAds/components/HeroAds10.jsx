import React from "react";
import marketingmockup from "../../../assets/images/marketing-mockup.webp";

const HeroAds10 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4">

      <div>
        <img className="w-[473px]" src={marketingmockup} alt="image hub" />
      </div>
      <div className="w-[660px]">
        <h2 className="text-[45px] leading-[45px] font-[900] gradient-text">
          The <br /> Ads That Matter <br /> platform
        </h2>

        <p className="text-[18px] leading-[27px] font-[400]">
          Analyze campaign performance through your own advertising dashboard
        </p>

        <button className="heroButton mt-4">Connect with an expert</button>
      </div>
    </div>
  );
};

export default HeroAds10;
