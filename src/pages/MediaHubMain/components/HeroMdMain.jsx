import React from "react";
import changeIMg from "../../../assets/images/marketing-mockup.webp";

const HeroMdMain = () => {
  return (
    <div className="w-full md:max-w-[1440px] md:shadow-lg">
      <div className="w-full h-[179px] bg-[#4765E6] ">

      </div>
      <div className="p-2 md:translate-x-20 md:p-4"> 
      <h2 className="text-[25px] leading-[45px] font-[600] gradient-text ">
          Latest Blog 
          </h2>
      </div>
      <din className="mx-auto md:flex md:w-[90%] md:h-[441px] my-8 p-8" > 

      <div>
        <img className="md:w-[929px] md:h-[341px]" src={changeIMg} alt="mian media" />
      </div>
      <div className="p-4 md:w-[399px] md:flex flex-col justify-between md:shadow-lg m-4 rounded-lg">
        <p className="text-[18px] leading-[27px] font-[600] hidden md:block">
          Update
        </p>
        <h2 className="text-[24px] leading-[30px] font-[600] gradient-text pr-4">
          Revolutionizing Recycling: Renie Bin Unveils Groundbreaking AI-Powered
          Solution at STEP 2024
        </h2>
        <p
         className="text-[18px] leading-[27px] font-[600] mt-4 text-[#6F6F6F]">20-May-20024</p>
      </div>

      </din>
    </div> 
  );
};

export default HeroMdMain;
