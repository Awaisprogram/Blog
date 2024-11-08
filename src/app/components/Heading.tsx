import React from 'react'

interface type{
  title:string
}

function Heading( {title} : type ) {
  return (
    <>
      <h1 className='text-color pt-36 py-6 mb-10 text-center text-5xl font-bold'>{title}</h1>
    </>
  )
}

export default Heading
