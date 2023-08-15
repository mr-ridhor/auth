"use client";
import React, { useState } from "react";
import Input from "@/Utils/Input";
import Head from "next/head";
import PasswordInput from "@/Utils/PasswordInput";
import Button from "@/Utils/Button";
import {useRouter} from "next/navigation";

export const ForgetPassword= () => {
    const router = useRouter()
    const [isOpen,setIsOpen]=useState(false)
  const handleOtp=()=>{
    setIsOpen(!isOpen)
  }
  const handleBack=()=>{
    // console.log(user)
     router.push("/")
  }
  const [email, setEmail] = useState("");
  // const [password, setPasword] = useState("");
  return (
    <div className=" h-screen w-screen grid place-items-center bg-blue-400 ">
      <div className="max-h-[300px] w-[300px] md:w-[400px]  bg-white shadow-2xl rounded-lg py-">
        <div className="w-full text-center mx-auto my-1">
          <span className="font-bold text-2xl">Forget Password</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-2 mx-auto w-[95%]">
            <Input
              type={"email"}
              value={email}
              Onchange={(e)=>{
                setEmail(e.target.value)
                console.log(
                e.target.value

                )
              }}
              placeholder={"Please enter your mail"}
              label={"Email"}
            />
          </div>
        
          <div className="my-3 flex justify-center mx-3">
            <Button  label={"Reset Password"} onclick={handleOtp}/>
          </div>
          <span className="flex  items-center justify-center gap-2 mb-3">
            <button onClick={handleBack}>
              <span className="font-semibold"> Go Back</span>
            </button>
          </span>
        </div>
      </div>
      <ManagePassword isOpen={isOpen} close={()=>{setIsOpen(false)}}/>
    </div>
  );
};
const ManagePassword=({isOpen})=>{
  const [stageModal, setStageModal] =useState(1)
  

  return(
<div className="">
  {
    isOpen &&(
      <div className="fixed h-full w-full bg-gray-500 opacity-10 flex items-center justify-center">
        <div className="bg-white w-1/2 h-1/2">q</div>
      </div>
    )
  }
</div>
  )

}