"use client";
import Button from "@/Utils/Button";
import DateComponent from "@/Utils/DateComponent";
import Input from "@/Utils/Input";
import PasswordInput from "@/Utils/PasswordInput";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    username: "",
    confirmPassword: "",
   dob:"",
  });
  const [selectDate, setSelectDate] = useState("");
  const [selectMonth, setSelectMonth] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [error, setError] = useState("");
  const handleDateChange = (formattedDate) => {
    setUser({ ...user, date: formattedDate });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!user.name || !user.password || !user.email || !user.username) {
      setError("All fields are required.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          username: user.username,
          dob:`${selectYear}-${selectMonth.toString().padStart(2, '0')}-${selectDate.toString().padStart(2, '0')}`,
         
        }),
      });
      if (res.ok) {
        // Reset the form and state
        const form = e.target;
        form.reset();
        setUser({
          email: "",
          name: "",
          password: "",
          username: "",
          confirmPassword: "",
          dob: "",
        });
        setError("");
      } else {
        console.log("Reg failed");
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }
  };
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
                value={user.name}
                onchange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder={"Please enter your name"}
                label={"Name"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <Input
                type={"email"}
                value={user.email}
                onchange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder={"Please enter your mail"}
                label={"Email"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <Input
                type={"text"}
                value={user.username}
                onchange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder={""}
                label={"Username"}
              />
            </div>
            <div className="my-2 mx-auto w-[95%]">
              <DateComponent
                selectDate={selectDate}
                setSelectDate={setSelectDate}
                selectMonth={selectMonth}
                setSelectMonth={setSelectMonth}
                selectYear={selectYear}
                setSelectYear={setSelectYear}
                onDateChange={handleDateChange}
              />
            </div>

            <div className="my-2 mx-auto w-[95%] flex flex-col">
              <PasswordInput
                label={"Password"}
                value={user.password}
                onchange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="my-2 mx-auto w-[95%] flex flex-col">
              <PasswordInput
                label={"Confirm Password"}
                value={user.confirmPassword}
                onchange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
              />
            </div>
            {error && <div className="text-red-500 mt mx-4">{error}</div>}
            <div className="my-3 flex justify-center mx-3">
              <Button onclick={handleSubmit} label={"Register"} />
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
