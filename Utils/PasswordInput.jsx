import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const PasswordInput = ({  onchange, value, label }) => {
  const [type, setType] = useState("password");

  return (
    <div className="w-full flex flex-row items-center pr-2 border-2 border-neutral-300 bg-white rounded-md">
      <div className="w-full relative ">
        <input
          placeholder=" "
          onChange={onchange} 
          type={type}
          value={value}
          className="peer w-full pt-4 mt-1 outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-2 focus:outline-none text-gray-800"
        />
        <label
          className="absolute cursor-text text-sm duration-150 transform -translate-y-3 top-3 z-10 origin-[0] left-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 text-zinc-400 font-semibold"
        >
          {label}
        </label>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => setType(type === "password" ? "text" : "password")} 
      >
        {type === "password" ? ( 
          <AiOutlineEye className="w-6 h-6 text-gray-400" />
        ) : (
          <AiOutlineEyeInvisible className="w-6 h-6 text-gray-400" />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
