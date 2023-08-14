import React from 'react'

const Button = ({onclick, label}) => {
  return (
    <div className=' bg-yellow-500  text-white font-bold rounded-md p-3 w-full flex justify-center'>
        <button className='' onClick={onclick}>{label}</button>
    </div>
  )
}

export default Button