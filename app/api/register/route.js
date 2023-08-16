import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const {
      name,
      email,
      dob,
      password,
      confirmPassword,
      username,
    } = await req.json();
    console.log("Name:", name);
    console.log("pass:", password);
    console.log("Username:", username);
    console.log("DOB:", dob);

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
