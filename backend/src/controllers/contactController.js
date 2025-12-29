import { mailer } from "../config/mailer.js";
import dotenv from "dotenv";
dotenv.config();

export const sendContactEmail = async (req, res) => {
  console.log("🧾 Body recibido:", req.body);

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Datos incompletos" });
  }

  try {
    await mailer.sendMail({
      from: `"KevCodes Contacto" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: `📩 Hola ${name}!`,
      html: `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Nuevo mensaje</title>
</head>
<body style="
  margin:0;
  padding:0;
  background-color:#f4f6f8;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Inter, Arial, sans-serif;
">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="
          max-width:600px;
          background:#ffffff;
          border-radius:12px;
          box-shadow:0 10px 30px rgba(0,0,0,0.08);
          overflow:hidden;
        ">
          <!-- Header -->
          <tr>
            <td style="
              background:linear-gradient(135deg,#2563eb,#3b82f6);
              padding:24px;
              color:#ffffff;
            ">
              <h1 style="
                margin:0;
                font-size:20px;
                font-weight:600;
              ">
                Nuevo mensaje de contacto
              </h1>
              <p style="
                margin:6px 0 0;
                font-size:14px;
                opacity:0.9;
              ">
                Formulario web · kevcodesdev.cl
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px; color:#111827;">
                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Nombre</strong><br/>
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Email</strong><br/>
                    <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:12px;">
                    <strong>Teléfono</strong><br/>
                    ${phone || "No informado"}
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:20px;">
                    <strong>Mensaje</strong>
                    <div style="
                      margin-top:8px;
                      padding:16px;
                      background:#f9fafb;
                      border-radius:8px;
                      color:#374151;
                      line-height:1.6;
                    ">
                      ${message.replace(/\n/g, "<br />")}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding:16px 24px;
              background:#f9fafb;
              font-size:12px;
              color:#6b7280;
              text-align:center;
            ">
              Este mensaje fue enviado desde el formulario de contacto de
              <strong>kevcodesdev.cl</strong>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Mailer error:", error);
    return res.status(500).json({ message: "Error enviando el correo" });
  }
};
