import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    transporter.sendMail({
      ...mailOptions,
      subject: "Email From Portfolio",
      text: "Test String",
      html: "<h1>Mail Title</h1>",
    });
    return NextResponse.json({ message: "Mail Sent Succesfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somwthing went wrong" });
  }
}
