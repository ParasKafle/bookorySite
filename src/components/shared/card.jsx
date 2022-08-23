import React from 'react';
// import { Books } from '../models/books';

const Card = ({ book }) => {

  return (
    <div className='flex flex-col text-black w-[300px] mt-12 rounded-lg'>
      <img className='w-full h-full rounded-3xl cursor-pointer' src={book.img} alt="" />
      <h1 className='text-lg font-bold mt-5  hover:text-orange-400 cursor-pointer'>{book.title}</h1>
      <h1 className='mt-1 text-slate-400 hover:text-orange-400 cursor-pointer'>{book.author}</h1>
      <span className='mt-1 text-lg font-medium text-orange-400'>{book.price}</span>
    </div>
  )
}

export { Card };