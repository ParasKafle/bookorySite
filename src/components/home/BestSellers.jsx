import React from 'react';
// import { useState, useEffect } from 'react';
import { ChevronRightIcon } from '@heroicons/react/outline';
import { Card } from '../shared/card';
import { Books } from '../models/books';

const BestSellers = () => {
  const books = Books.slice(0,5);

  return (
    <div>
      <div className='flex flex-row px-56'>
        <h1 className='font-bold font-sans text-4xl'>BestSelling Books</h1>
        <div className='w-[50%] h-0 border mt-6 ml-[70px]'></div>
        <div className='w-[130px] flex text-white justify-center font-medium bg-orange-600 cursor-pointer border-0 rounded-[50px] ml-[100px] group hover:bg-orange-400'><h2 className='mt-[6px]'>View All</h2><ChevronRightIcon className='w-4 group-hover:animate-slide ml-3' /></div>
      </div>
      <div className='flex w-full px-20 justify-between items-center'>
        {books.map((book) => {
          return (
            <div>
              <Card key={book.title} book={book} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BestSellers;
