import React from "react";
import mediaIhero from "../../../assets/images/mediaImg.svg";



const HeroMdMain = () => {
  return (
    <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 mx-auto">
            
      <din className="mx-auto md:flex flex-col pt-[3rem]  pb-[4rem]">
        <span className="text-[25px] md:text-[36px] leading-[45px] font-[600] md:mb-4 gradient-text ">
          Latest Blog
        </span>
        <div className="md:flex">
          <img 
            className="md:w-[929px] md:h-[341px]"
            src={mediaIhero}
            alt="mian media"
          />

          <div className="p-4 md:flex flex-col justify-between md:shadow-lg rounded-lg">
            <p className="text-[18px] leading-[27px] font-[600] hidden md:block">
              Update
            </p>
            <h2 className="text-[24px] leading-[30px] font-[600] gradient-text">
              Revolutionizing Recycling: Renie Bin Unveils Groundbreaking
              AI-Powered Solution at STEP 2024
            </h2>
            <p className="text-[18px] leading-[27px] font-[600] mt-2 text-[#6F6F6F]">
              20-May-20024
            </p>
          </div>
        </div>
      </din>
    </div>
  );
};

export default HeroMdMain;
