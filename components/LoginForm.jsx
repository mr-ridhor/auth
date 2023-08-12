'use client'
import React, { useState } from 'react'
import Input from '@/Utils/Input'
import Head from 'next/head'
import PasswordInput from '@/Utils/PasswordInput'
export const LoginForm = () => {
    const [email, setEmail]=useState("")
    const [password, setPasword]=useState("")
  return (
    <div className=' h-screen w-screen grid place-items-center '>
        <div className="h-1/2 w-[350px]  bg-white shadow-lg rounded-lg">
            <div className="my-2 mx-auto w-[95%]">
            <Input type={"email"} value={""} Onchange={""} placeholder={"Please enter your mail"} label={"Email"}/>
            </div>
            <div className="my-2 mx-auto w-[95%]">
                <PasswordInput  label={"Password"}/>
            </div>
        </div>
    </div>
  )
}
