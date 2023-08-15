import React from 'react'

const Input = ({label,type,Onchange, placeholder,value}) => {
  return (
    <div className="relative w-full">

        {/* <span className=' font'>{label}</span> */}
        {/* <input type={type} placeholder={placeholder} value={value} */}
         {/* onChange={Onchange} className="  w-full focus:border-transparent focus:outline-none autofill:bg-yellow-200"/> */}
         <input  onChange={Onchange} type={type} className="placeholder:text-xs  peer w-full pt-6 mt-1 bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 border-neutral-300 focus:outline-none text-gray-800" value={value}
         placeholder={placeholder} required/>
   <label  className="mt-1 absolute cursor-text text-sm duration-150 transform -translate-y-3 top-3 z-10 origin-[0] left-2  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 font-semibold">{label}</label>
    </div>
  )
}

export default Input