import React from "react";
import trackEarn from "../../../assets/images/track-earning.webp";

const HeroSec5 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-8 ">
        <div>
          <img className="w-[413px]" src={trackEarn} alt="trackEarnhub" />
        </div>

        <div>
          <h2 className="text-[45px] leading-[35px] font-[900] gradient-text">
            Track Earnings
          </h2>
          <p className=" w-[440px] text-[18px] leading-[27px] font-[400] mt-4 mb-8">
            View your earnings available for payout. As soon as the plastic has
            reached the recycling point and our technology has completed the
            monetization process, the sum becomes available for payout.
          </p>
          <button className="heroButton ">Connect with an expert</button>
        </div>
      </div>

      <div>
        <div className="my-16 text-center">
          <h2 className="text-[35px] leading-[45px] font-[600] gradient-text">
            Ready for Demo?
          </h2>
          <p className=" w-[900px] text-[18px] leading-[27px] font-[400] text-center mt-4 mb-8">
            We have already installed more than 1000+ bins all over the
            UAE. Many government and corporate entities already believe in our
            mission and joined us. With you onboard we are sure that the future
            of plastic is digital.
          </p>
          <button className="heroButton ">Connect with an expert</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSec5;
