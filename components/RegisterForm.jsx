"use client";
import Button from "@/Utils/Button";
import DateComponent from "@/Utils/DateComponent";
import Input from "@/Utils/Input";
import PasswordInput from "@/Utils/PasswordInput";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const user = useState({
    email: "",
    password: " ",
  });
  const [selectDate, setSelectDate] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [selectYear, setSelectYear] = useState("");
  return (
    <div>
      <div className=" h-screen w-screen grid place-items-center ">
        <div className="max-h-fit w-[300px] md:w-[400px]  bg-white shadow-2xl rounded-lg py-">
          <div className="w-full text-center mx-auto my-1">
            <span className="font-bold text-2xl">Register</span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="my-2 mx-auto w-[95%]">
              <Input
                type={"text"}
                value={user.email}
                Onchange={(e) => {
                  e.target.value;
                  console.log(e.target.value);
                }}
                placeholder={"Please enter your name"}
                label={"Name"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <Input
                type={"email"}
                value={user.email}
                Onchange={(e) => {
                  e.target.value;
                  console.log(e.target.value);
                }}
                placeholder={"Please enter your mail"}
                label={"Email"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <Input
                type={"text"}
                value={user.email}
                Onchange={(e) => {
                  e.target.value;
                  console.log(e.target.value);
                }}
                placeholder={""}
                label={"Username"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <DateComponent selectDate={selectDate} setSelectDate={setSelectDate} selectMonth={selectMonth}setSelectMonth={setSelectMonth} selectYear={selectYear}setSelectYear={setSelectYear}/>
              </div>

            <div className="my-2 mx-auto w-[95%] flex flex-col">
              <PasswordInput
                label={"Password"}
                value={user.password}
                onChange={(e) => {
                  console.log(e.target.value);
                  e.target.value;
                }}
              />
            </div>
            <div className="my-2 mx-auto w-[95%] flex flex-col">
              <PasswordInput
                label={"Confirm Password"}
                value={user.password}
                onChange={(e) => {
                  console.log(e.target.value);
                  e.target.value;
                }}
              />
            </div>
            <div className="my-3 flex justify-center mx-3">
              <Button onclick={""} label={"Register"} />
            </div>
            <span className="flex  items-center justify-center gap-2 mb-3">
              Already have an account?
              <Link href={"/"}>
                <span className="font-semibold"> Login</span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
