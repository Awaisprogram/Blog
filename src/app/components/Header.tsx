import React from 'react'
import Image from 'next/image'
import blg2 from '../images/blg6.png'

function Component() {
  return (
    <div>
      {/* Blog Header */}
      <div className="relative  lg:mt-0  mt-20">
        <Image src={blg2} alt="Blogs" layout="responsive" width={100} height={50} className="w-full " />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-7xl font-bold">Blogs</h1>
        </div>
      </div>
    </div>
  )
}

export default Component
