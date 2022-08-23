import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-full mt-5 border border-blue-200 bg-slate-200'>
      <div className='w-full flex flex-row ml-[100px]'>
        <h2 className='font-bold font-sans text-2xl mt-4 mx-6'>First Name</h2>
        <input className='w-[20%] border-2 border-blue-400 rounded-lg mt-3' type="text" placeholder='First Name' />
        <h2 className='font-bold font-sans text-2xl mt-4 mx-6' >Last Name</h2>
        <input className='w-[20%] border-2 border-blue-400 rounded-lg mt-3' type="text" placeholder='Last Name' />
      </div>
      <div className='w-full flex flex-row ml-[100px]'>
        <h2 className='font-bold font-sans text-2xl mt-4 mx-6'>Contact</h2>
        <input className='w-[20%] border-2 border-blue-400 rounded-lg mt-3' type="text" placeholder='First Name' />
        <h2 className='font-bold font-sans text-2xl mt-4 mx-6' >Last Name</h2>
        <input className='w-[20%] border-2 border-blue-400 rounded-lg mt-3' type="text" placeholder='Last Name' />
      </div>
      <button>Sign In</button>
    </div>
  )
}

export default Login;
