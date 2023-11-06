import nodemailer from "nodemailer";
import { config } from "../settings/config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  host: "smtp.gmail.com",
  auth: {
    user: config.emailAddres,
    pass: config.emailPassword,
  },
});

export const sendEmail = async (email, subject, text) => {
  const mailOptions = {
    from: config.emailAddres,
    to: email,
    subject,
    text,
  };

  const response = await transporter.sendMail(mailOptions);

  if (!response.accepted.length) {
    return false;
  }

  return true;
};

export const confirmEmail = async ({ email }) => {
  const subject = `
    Welcome to the server

    Please confirm your email address by clicking on the following link:
    http://localhost:3000/confirm/${email}
  `;
  const text = "Welcome to the server";

  const response = await sendEmail(email, subject, text);

  return response;
};
