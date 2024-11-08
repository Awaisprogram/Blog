import React from 'react'
interface assert{
  text:string
}

function Button({text} :assert) {
  return (
    <>
      <button type="submit"
      className="px-16 py-3 bg-color text-white font-semibold rounded-full hover:bg-hover transition ease-in">{text}</button>
    </>
  )
}

export default Button
