import React from "react";
import marketing from "../../../assets/images/marketing.webp";

const HeroAds6 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4">
      <div className="w-[660px]">
        <h2 className="text-[45px] leading-[45px] font-[900] gradient-text">
          Your Ad impressions mean measurable eco reductions that can be claimed
        </h2>

        <p className="text-[18px] leading-[27px] font-[400] mt-4 mb-8">
          Your marketing spend now has Sustainability attached to it, not
          greenwashing, but verifiable and undeniable waste diverted from
          landfills and CO2 reductions that you can see live on the your Ads
          That Matter account.
        </p>
      </div>

      <div>
        <img className="w-[473px]" src={marketing} alt="image hub" />
      </div>
    </div>
  );
};

export default HeroAds6;
