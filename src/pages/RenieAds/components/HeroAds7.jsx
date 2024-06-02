import React from "react";
import adhand from "../../../assets/images/ad-hand.webp";

const HeroAds7 = () => {
  return (
    <div className="flex">
      <div>
        <img className="w-[283px] scale-150 " src={adhand} alt="AdMap" />
      </div>
      <div
        className="h-[286px] w-[1200px]"
        style={{
          background:
            "linear-gradient(90deg, #4765e6 0%, #5c4099 50%, #e31662 100%)",
        }}
      >
        <div className="flex justify-center">
          <div className=" text-white w-[600px] p-4">
            <h2 className="text-[45px] leading-[45px] font-[900] mb-4">
              Ads for every stage of your Marketing Funnel
            </h2>
            <span className="text-[18px] leading-[27px] font-[300] ">
              Ads that matters supports picture and full screen video ads that
              are designed for awareness or consideration level{" "}
            </span>
            <button className="heroButton mt-4">Connect with an expert</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAds7;
