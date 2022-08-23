import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Books } from '../models/books';

const Trends = () => {

    const books = Books.slice(0,3);

  return (
    <div>
      <div className='flex flex-row px-56'>
        <h1 className='font-bold font-sans text-4xl'>What's In Trend</h1>
        <div className='w-[50%] h-0 border mt-6 ml-[70px]'></div>
        <div className='w-[130px] flex text-white justify-center font-medium bg-orange-600 cursor-pointer border-0 rounded-[50px] ml-[100px] group hover:bg-orange-400'><h2 className='mt-[6px]'>View All</h2><ChevronRightIcon className='w-4 group-hover:animate-slide ml-3' /></div>
      </div>
      <div className='flex h-[520px] px-8 justify-between'>
        {books.map((book) => {
          return (
            <div className='flex text-black w-[600px] mt-6 rounded-3xl bg-orange-50'>
              {/* <Card key={book.title} book={book} /> */}
              <img className='w-[500px] rounded-3xl cursor-pointer m-6' src={book.img} alt="" />
              <div className='flex flex-col text-black pr-3 justify-between py-16'>
                <h1 className='text-lg font-bold mt-5  hover:text-orange-400 cursor-pointer'>{book.title}</h1>
                <h1 className='mt-1 text-slate-400 hover:text-orange-400 cursor-pointer'>{book.author}</h1>
                <p className='text-black font-sans h-[190px] overflow-y-hidden text-justify pr-7'>{book.description}</p>
                <span className='mt-1 text-lg font-medium text-orange-400'>{book.price}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trends;
