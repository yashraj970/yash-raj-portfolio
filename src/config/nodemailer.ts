import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'itsyashraj970@gmail.com',
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
