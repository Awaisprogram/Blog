import React from 'react'
import Heading from '../components/Heading'
import Image from 'next/image'
import about from '../images/image.jpeg'
import Form from '../components/Form'
import Link from 'next/link'

function About() {
  return (
    <div className='bg-background'>
      <div>
        <Heading title='About Me'/>
      </div>
      <div className="px-12 lg:px-24 ">
        <div className="rounded ">
          <Image src={about} alt='' className='rounded-xl lg:h-96 object-fit hover:opacity-90 transition ease-in slide-right'></Image>
        </div>
          <div className="py-8 text-xl text-gray-600 font-light  lg:px-36 ">
         <p className='border-b-2 pb-2 fade-in '>
         I am Awais Mehmood , a creative and dedicated  individual who love web development almost as much as I love my customers. I am passionate  with the mission for achieving the perfection in web design. All designs are made by love with pixel perfect design and excellent coding quality. Speed, security and SEO friendly alway in our mind.
         </p>
        </div>
        <div className="py-4 leading-loose text-gray-700  lg:px-36">
          <p className='text-md'><strong>Address:</strong> Scheme 33, Karachi, Pakistan</p>
          <p className='text-md'><strong>Our website:</strong> 
          <Link href={'https://lnkd.in/eBgmuGXV'}> https://lnkd.in/eBgmuGXV</Link></p>
          <p className='text-md'><strong>Linkdin:</strong>  <Link href={'https://www.linkedin.com/in/awais-mehmood-903500309/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B1Z3AUPQmQ%2B%2Bbp1wBguYcsw%3D%3D'}> https://Linkdin.com</Link> </p>
          <h1 className='border-b-2 mt-10 font-bold text-3xl text-black pb-2'>Advertise</h1>
          
        </div>
        <div className='lg:px-36'>
        <p className='text-gray-700 '>Please contact us directly at ads@ultranews.com. For large or unique campaigns please email sale@ultranews.com for requests-for-proposal and additional pricing information.</p>
        
        <h1 className='border-b-2 mt-10 font-semibold text-5xl text-black pb-2'>Get in touch</h1>
        </div>
        <div className='lg:px-36'>
        <Form/>
        </div>
        
      </div>
    </div>
  )
}

export default About
