import React from "react";
import tdracardig from "../../../assets/images/tdracardig.svg";

const HeroMain1 = () => {
  const cards = [
    {
      id: 1,
      imag:{tdracardig },
      btnText: "NEWS",
      mainText: "Renie obtains TDRA certification!",
      date: "20-May-2024",
    },
    {
      id: 2,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      btnText: "BLOGS",
      mainText: "Driving Urban Sustainability with Data: Renie’s Innovations at the Forefront of GCCE",
      date: "20-May-2024",
    },
    {
      id: 3,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      btnText: "MEDIAs",
      mainText: "Trash to Cash: AI’s Role in Waste Monetization",
      date: "20-May-2024",
    },
    // {
    //   id: 4,
    //   imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   btnText: "NEWS",
    //   mainText: "Driving Urban Sustainability with Data: Renie’s Innovations at the Forefront of GCCE",
    //   date: "20-May-2024",
    // },
    // {
    //   id: 5,
    //   imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   btnText: "BLOGS",
    //   mainText: "Trash to Cash: AI’s Role in Waste Monetization",
    //   date: "20-May-2024",
    // },
    // {
    //   id: 6,
    //   imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
    //   btnText: "MEDIAs",
    //   mainText: "Renie obtains TDRA certification!",
    //   date: "20-May-2024",
    // }, 
  ];
  return (


    <div className="w-11/12 md:w-10/12 max-w-[1440px] lg:px-8 my-10 md:flex flex-col  mx-auto ">
         <span className="text-[25px] md:text-[36px] leading-[45px] font-[600] gradient-text ml-4 ">
          Archer
        </span>
        <div className="md:flex">
        {cards && cards.map((items) => (
       
       <div className="w-[98%] h-[480px] shadow-md md:w-[31.333%] flex flex-col justify-between cursor-pointer mx-auto my-4 py-4 p-2">
         <header className="w-[99%] h-[280px]  overflow-hidden rounded-md ">
           <img
             src={items.imag}
             alt="#"
             className="rounded-md w-[100%]scale-125 hover:scale-100 duration-500"
           />
         </header>
         <main className="px-1 h-[220px]">
    
             <button className="heroButton text-[16px] leading-[24px] md:text-[18] md:leading-[27px] font-[600] text-[#fff]  rounded-md mt-4">
               {items.btnText}
             </button>
        
             <h2 className="text-[21.50px] leading-[26px] md:text-[24px] md:leading-[25px] font-[600] gradient-text my-4 ">
             {items.mainText}
           </h2>
            
          
         </main>
         <footer className="text-[#6F6F6F] text-[16px] leading-[24px] md:text-[18px] md:leading-[27px] font-[400]">{items.date}</footer>
       </div>
   
   ))}
        </div>
      
    </div>












    // <div className="w-full md:max-w-[1440px] mx-auto ">
    //   <div className=" md:w-[1203px] border-red-800 mx-4">
    //     <h2 className="text-[25px] leading-[45px] font-[600] gradient-text mt-4s">
    //       Latest Blog
    //     </h2>
    //     <ul className=" overflow-x-hidden md:flex">
    //       {cardText &&
    //         cardText.map((items) => (
    //           <li className="w-[450px] my-4 bg-red p-4" key={items.id}>
    //             <div className="w-[440px] bg-black">
    //               <img
    //                 className="w-[350px]"
    //                 src={items.imag}
    //                 alt="#" 
    //               />
    //             </div>
    //             <div className="w-[450px] bg-black">
    //               <button className="heroButton rounded-md mt-4">{items.btnText}</button>
    //               <h2 className="text-[24px] leading-[30px] font-[600] gradient-text my-4 overflow-x-hidden">{items.mainText}</h2>
    //             </div>
    //             <span className="text-[#6F6F6F] text-[18px] leading-[27px] font-[400]">{items.date}</span>
    //           </li>
    //         ))}
    //     </ul>
    //   </div>
    // </div>
  );
};

export default HeroMain1;
