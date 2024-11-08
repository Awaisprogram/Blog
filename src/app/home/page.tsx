import React from 'react'
import Image from 'next/image'
import main from '../images/blog-home.png'
function Main() {
  return (
    <>
      <div className="py-40 px-10 flex  justify-center gap-10 items-center lg:flex-row flex-col bg-background ">
        <div className="mt-10 lg:w-8/12 w-full slide-left"> 
          <h1 className='text-xl font-semibold mb-2 text-gray-600'>
          Welcome to our  <span className='text-color'>Blog</span>
          </h1>
          <h2 className='text-6xl font-black leading-tight'>Being <span className='text-color'>Unique</span> is better
          than being <span className='text-color'>Erfect</span></h2>

          
          <p className='text-light text-xl font-medium text-lg mt-5'>Stay ahead with the latest in web development trends, coding tips, project showcases, and more!</p>
          <input type="text" placeholder='Enter you email' className='border rounded-l-full lg:px-16 px-3 py-3 outline-none'/>
          <button className='bg-color my-10  lg:px-4 px-2 py-3 text-white font-bold rounded-r-full  hover:bg-hover transition transiton-300 ease-in'>Subscribe</button>
        </div>
        <div className="max-w-1/3 ">
         <Image src={main} alt=''></Image>
        </div>
      </div>
    </>
  )
}

export default Main
