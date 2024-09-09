import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    transporter.sendMail({
      ...mailOptions,
      subject: "Email From Portfolio",
      text: "Test String",
      html: `<h1>Mail From - ${data.name}</h1>`,
    });
    return NextResponse.json({ message: "Mail Sent Succesfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somwthing went wrong" });
  }
}
