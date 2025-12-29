import nodemailer from "nodemailer";

export const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // mail.kevcodesdev.cl
  port: Number(process.env.SMTP_PORT), // 465
  secure: true, // OBLIGATORIO con 465
  auth: {
    user: process.env.SMTP_USER, // contacto@kevcodesdev.cl
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false, // evita bloqueos por cert compartido
  },
});
