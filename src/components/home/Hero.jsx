import React from 'react';
import Books from "../../assets/images/books.jpg";
import { ChevronRightIcon } from '@heroicons/react/outline';
// import Line from "../../assets/images/line.png";
// import { MinusIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div>
      <div className="w-full bg-transparent h-[800px] py-12 z-[1]">
                <div className='w-full h-[600px] bg-red-500/40 absolute'>
                    <img className='w-full h-full object-cover mix-blend-overlay' src={Books} alt="/" />
                </div>
                <div className='max-w-[600px] ml-[300px] mt-[180px] text-white relative'>
                    <p className='font-medium font-sans text-black uppercase text-sm ml-4'>A sale for the pages</p>
                    <h1 className='font-medium font-sans text-6xl text-center -translate-x-[200px] mt-4'>50% Off Hundreds Of Books</h1>
                    <p className='font-bold text-orange-600 mt-3'>Online And In Stores Only</p>
                    <div className='w-[140px] h-[50px] mt-4 ml-4 flex items-center justify-center bg-white text-black font-semibold rounded-[50px] cursor-pointer z-20 hover:bg-orange-400 hover:text-white group'>Shop Now<ChevronRightIcon className='w-4 ml-2 group-hover:animate-slide group-hover:text-white text-black' /></div>
                </div>
        </div>
    </div>
  )
}

export default Hero;
