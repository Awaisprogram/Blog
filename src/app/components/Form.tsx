import React from 'react'
import Button from './Button'

function Form() {
  return (
    <div>
      <form className="  py-10 rounded-lg ">
  <div className="flex flex-wrap -mx-2 mb-4">
     <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
      <label className="block 
      text-lg  font-bold text-gray-700 mb-1" htmlFor="name">Name </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="w-full px-4 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div className="w-full md:w-1/2 px-2">
      <label className="block text-lg  font-bold text-gray-700 mb-1" htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Your Email"
        className="w-full px-4 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
  
  <div className="mb-4">
    <label className="block text-lg  font-bold text-gray-700 mb-1" htmlFor="phone">Phone Number</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      placeholder="Your Phone Number"
      className="w-full px-4 py-4 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  
  <div className="mb-4">
    <label className="block text-lg  font-bold text-gray-700 mb-1" htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      placeholder="Your Message"
      rows={6}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>
  
  <div >
    <Button text='Submit'/>
  </div>
</form>

    </div>
  )
}

export default Form
