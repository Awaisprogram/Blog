import React from 'react'

interface button{
  text:string
}

const Button2 = ({text}:button) => {
  return (
    <>
      <button className="w-full bg-black text-white py-2 rounded">{text}</button>
    </>
  )
}

export default Button2
