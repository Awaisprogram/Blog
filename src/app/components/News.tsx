import React from 'react'
import Button2 from './Button2'

function News() {
  return (
    <>
      <div className="p-10 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-2 border rounded mb-4"
              />
              
              <Button2 text='Subscribe'/>
            </div>
    </>
  )
}

export default News
