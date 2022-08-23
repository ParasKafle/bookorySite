import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import * as Img from "../../assets/images/index";
import CountDownTimer from '../shared/countDownTimer';
// import { Card } from '../shared/card';
import { Books } from '../models/books';

const Deals = () => {

  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40};

  const books = Books.slice(3,6);

  return (
    <div className='mt-20 flex flex-col'>
      <div className='flex flex-row px-56'>
        <h1 className='font-bold font-sans text-4xl'>Deals Of The Week</h1>
        <div className='w-[50%] h-0 border mt-6 ml-[70px]'></div>
        <div className='w-[130px] flex text-white justify-center font-medium bg-orange-600 cursor-pointer border-0 rounded-[50px] ml-[100px] group hover:bg-orange-400'><h2 className='mt-[6px]'>View All</h2><ChevronRightIcon className='w-4 group-hover:animate-slide ml-3' /></div>
      </div>
      <div className='flex w-full'>
        <div className='w-[40%] h-[700px] ml-52 my-[60px] overflow-y-hidden rounded-3xl'>
            <img className='object-cover opacity-70' src={Img.BookBgImg} alt="" />
            <img className='absolute ml-24 -mt-[650px] hover:animate-shake' src={Img.ShakerImg} alt="" />
            <p className='absolute -mt-[250px] ml-10 text-white font-sm text-lg'>New Year, New Books</p>
            <div>
              <h1 className='absolute w-[300px] -mt-[200px] ml-10 text-white font-semibold text-4xl'>The Best New Books Of January</h1>
              <h1 className='absolute w-[300px] -mt-56 ml-[400px] text-white font-semibold'>Hurry the deal runs out soon.</h1>
              <CountDownTimer hoursMinSecs={hoursMinSecs} />
            </div>
        </div>
        <div>
        <div className='flex flex-col h-[700px] px-20 justify-between items-center'>
        {books.map((book) => {
          return (
            <div className='flex text-black w-[400px] mt-14 rounded-lg'>
              {/* <Card key={book.title} book={book} /> */}
              <img className='w-[140px] h-full rounded-3xl cursor-pointer' src={book.img} alt="" />
              <div className='pl-5 flex flex-col text-black mt-10'>
                <h1 className='text-lg font-bold mt-5  hover:text-orange-400 cursor-pointer'>{book.title}</h1>
                <h1 className='mt-1 text-slate-400 hover:text-orange-400 cursor-pointer'>{book.author}</h1>
                <span className='mt-1 text-lg font-medium text-orange-400'>{book.price}</span>
              </div>
            </div>
          )
        })}
      </div>
        </div>
      </div>
    </div>
  )
}

export default Deals;
