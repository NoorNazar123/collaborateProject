import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../../assets/images//bin-1.webp';
import StandardImg from '../../../assets/images/standardFeature.png';
function SubscribCards() {
  return (
    <div className=' w-10/12 contentSection flex  items-center md:items-end flex-col md:flex-row  justify-center md:justify-around  mx-auto '>
      <div className='subscribImageSection md:w-3/12 flex  flex-col gap-5 justify-start md:items-end h-full'>
        <div className='imageTitle flex flex-col justify-center items-center w-full md:w-11/12'>
          <span className='imageTitleText gradient-text md:w-full'>
            Get your <br /> Renie Bin
          </span>
          <br />
          <span className='imageTitleTime md:w-full'>Today</span>
        </div>
        <img className='subscribImg' src={cardImg} alt='' />
      </div>
      {/* <div className='subscribCardsSection md:8/12 flex md:flex-row justify-end flex-col md:items-end md:mt-0 mt-10 '> */}
      <div className=' md:8/12 flex md:flex-row justify-end flex-col md:items-end md:mt-0 mt-10 '>

        {/* <div className='standardCard  flex flex-col justify-center items-start px-10 md:mb-0 mb-5'> */}
        <div className='standardCard relative  flex flex-col justify-center items-start px-10 mt-10 md:mt-0'>

          <span className='cardTitle gradient-text font-semibold'>
            Renie Bin Standard
          </span>
          <p className='cardPrice'>
            {' '}
            <span className='price gradient-text font-semibold'>730 AED</span>/
            bin
          </p>
          <span className='cardTime font-semibold'>One time free</span>
          <img className='mt-10' src={StandardImg} alt='' />
          <div className='headerButton w-max flex items-center justify-center mt-10  '>
            <Link
              to='#'
              className='text-white  font-medium rounded-lg text-sm  '
            >
              Connect with an expert
            </Link>
          </div>
        </div>

        <div className='customCard relative  flex flex-col justify-center items-start px-10 mt-10 md:mt-0'>
          <div className='mostPopularLabel font-semibold text-white rounded-md flex justify-center items-center '>
            MOST POPULAR
          </div>
          <span className='cardTitle gradient-text font-semibold'>
            Renie Bin Standard
          </span>
          <p className='cardPrice'>
            {' '}
            <span className='price gradient-text font-semibold'>730 AED</span>/
            bin
          </p>
          <span className='cardTime font-semibold'>One time free</span>
          <img className='mt-10' src={StandardImg} alt='' />
          <div className='headerButton w-max flex items-center justify-center mt-10  '>
            <Link
              to='#'
              className='text-white  font-medium rounded-lg text-sm  '
            >
              Connect with an expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribCards;
