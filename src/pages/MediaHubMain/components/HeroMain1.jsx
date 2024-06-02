import React from "react";

const HeroMain1 = () => {
  const cardText = [
    {
      id: 1,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    {
      id: 4,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      btnText: "NEWS",
      mainText: "Driving Urban Sustainability with Data: Renie’s Innovations at the Forefront of GCCE",
      date: "20-May-2024",
    },
    {
      id: 5,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      btnText: "BLOGS",
      mainText: "Trash to Cash: AI’s Role in Waste Monetization",
      date: "20-May-2024",
    },
    {
      id: 6,
      imag: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600",
      btnText: "MEDIAs",
      mainText: "Renie obtains TDRA certification!",
      date: "20-May-2024",
    }, 
  ];
  return (
    <div className="w-full md:max-w-[1440px] mx-auto ">
      <div className=" md:w-[1203px] border-red-800 mx-4">
        <h2 className="text-[25px] leading-[45px] font-[600] gradient-text mt-4s">
          Latest Blog
        </h2>
        <ul className=" overflow-x-hidden md:flex">
          {cardText &&
            cardText.map((items) => (
              <li className="w-[450px] my-4" key={items.id}>
                <div className="w-[440px]">
                  <img
                    className="w-[350px]"
                    src={items.imag}
                    alt="#" 
                  />
                </div>
                <div className="w-[450px]">
                  <button className="heroButton rounded-md mt-4">{items.btnText}</button>
                  <h2 className="text-[24px] leading-[30px] font-[600] gradient-text my-4 overflow-x-hidden">{items.mainText}</h2>
                </div>
                <p className="text-[#6F6F6F] text-[18px] leading-[27px] font-[400]">{items.date}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HeroMain1;
