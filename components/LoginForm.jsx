"use client";
import React, { useState } from "react";
import Input from "@/Utils/Input";
import Head from "next/head";
import PasswordInput from "@/Utils/PasswordInput";
import Button from "@/Utils/Button";
import Link from "next/link";
export const LoginForm = () => {
  const [user, setUser]=useState({
    email:"",
    password:""
  })
  const handleSubmit=()=>{
    console.log(user)
  }
  // const [email, setEmail] = useState("");
  // const [password, setPasword] = useState("");
  return (
    <div className=" h-screen w-screen grid place-items-center ">
      <div className="max-h-[300px] w-[300px] md:w-[400px]  bg-white shadow-2xl rounded-lg py-">
        <div className="w-full text-center mx-auto my-1">
          <span className="font-bold text-2xl">Login</span>
        </div>
        <div className="flex flex-col justify-between">
          <div className="my-2 mx-auto w-[95%]">
            <Input
              type={"email"}
              value={user.email}
              Onchange={(e)=>{
                setUser({...user, email:e.target.value})
                console.log(
                e.target.value

                )
              }}
              placeholder={"Please enter your mail"}
              label={"Email"}
            />
          </div>
          <div className="my-2 mx-auto w-[95%] flex flex-col">
            <PasswordInput label={"Password"} value={user.password} onChange={(e)=>setUser({...user, password:e.target.value})}/>
              <span className="text-end text-sm pt-1">
                <Link href={"/forgetpassword"}>
                  Forgot Password?
                </Link>
              </span>
          </div>
          <div className="my-3 flex justify-center mx-3">
            <Button onclick={handleSubmit} label={"Login"}/>
          </div>
          <span className="flex  items-center justify-center gap-2 mb-3">Don't have an account? 
            <Link href={"/register"}>
              <span className="font-semibold"> Sign up!</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
