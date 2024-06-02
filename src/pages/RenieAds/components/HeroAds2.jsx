import React from "react";
import { Link } from "react-router-dom";

const HeroAds2 = () => {
  return (
    <div className="w-full">
      <div
        className="min-h-[256px] text-white flex flex-col justify-center items-center"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <span className="w-[1220px] text-[18px] leading-[27px] font-[400]">
          Our AI-driven advertising platform, fueled by real-time data from
          thousands of Renie Bins leverages user interactions and waste metrics
          to deliver impactful, relevant ads that resonate. Drive meaningful
          engagement, powered by the eco-conscious actions of our community. 
        </span>
       <div>

        <Link className="text-[18px] leading-[27px] font-[400] ">
          Contact us
        </Link>
       </div>
      </div>
    </div>
  );
};

export default HeroAds2;
