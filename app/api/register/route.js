import { connectMong0DB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
export const POST = async (req) => {
  try {
    const {
      name,
      email,
      dob,
      password,
      username,
    } = await req.json();
    // console.log("Name:", name);
    // console.log("pass:", password);
    // console.log("Username:", username);
    // console.log("DOB:", dob);
    const hashPass=await bcrypt.hash(password,10)
await connectMong0DB()
await User.create({name,email,dob,username,password:hashPass})
    return NextResponse.json(
      { message: "User details registered" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({
        message:"Unable to register user."
    },{status:500})
  }
};
