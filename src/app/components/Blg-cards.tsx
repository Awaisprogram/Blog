import React from 'react'
import Image from 'next/image'
import img from '../images/m-blog-2.png'


const Bottom = () => {
  return (
    <div>
       <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <Image src={img} alt="Blog 2" layout="responsive" width={100} height={50} className="w-full h-auto" />
              <div className="p-6">
                <h5 className="text-xl font-bold mb-2">Google inks pact for new 35-storey office</h5>
                <p className="text-gray-600 mb-4">
                  That dominion stars lights dominion divide years for fourth have don not stars is that he earth it first without heaven...
                </p>
                <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
            <i className="fas fa-user"></i> Travel, Lifestyle, Features |
            <i className="fas fa-comment"></i> 03 Comments
          </div>
              </div>
            </div>
    </div>
  )
}

export default Bottom
