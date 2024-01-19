import { createTransport } from "nodemailer";

const sendEmail = async (to, subject, text) => {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  //now its time to check wheter it is working or not 
  await transporter.sendMail({
    to,
    subject,
    text,
  });
};

export default sendEmail;
