import { mailOptions, transporter } from "@/config/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "Contact From Portfolio",
      text: "Contact Message",
      html: `<h3>Message from ${data.name}</h3><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong> ${data.project}</p>`,
    });
    return NextResponse.json({ message: "Mail Sent Succesfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Somwthing went wrong" });
  }
}
