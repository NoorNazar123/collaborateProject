import React from "react";
import locations from "../../../assets/images/locations.webp"

const HeroAds8 = () => {
  return (
    <div className="max-w-[1440px] min-h-[70vh] flex justify-center items-center gap-4">
      <div className="w-[660px]">
        <h2 className="text-[35px] leading-[45px] font-[900] gradient-text">
          Be seen in more than 
        </h2>
        <span className="text-[45px] leading-[45px] font-[900] gradient-text">
         1000+
        </span>
        <p className="text-[35px] leading-[45px] font-[900] gradient-text">
         Locations daily
        </p>
        <p className="text-[35px] leading-[45px] font-[900] bg-red">
        image nhee milrha dhakliaga
        </p>
        <button className="heroButton mt-4">Connect with an expert</button>
      </div>

      <div>
        <img className="h-[473px]" src={locations} alt="image hub" />
      </div>
    </div>
  );
};

export default HeroAds8;
