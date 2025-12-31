import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const enviarContacto = async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje } = req.body;

    console.log("📩 CONTACTO RECIBIDO:", req.body);

    // Validación mínima
    if (!nombre || !email) {
      return res.status(400).json({
        success: false,
        message: "Nombre y correo son obligatorios",
      });
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f5;padding:30px">
        <div style="max-width:600px;margin:auto;background:white;border-radius:12px;overflow:hidden">
          
          <div style="background:#111827;color:white;padding:24px">
            <h2 style="margin:0;font-size:20px">📩 Nuevo mensaje de contacto</h2>
          </div>

          <div style="padding:24px;color:#111827;font-size:14px">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono || "No informado"}</p>

            <hr style="margin:20px 0;border:none;border-top:1px solid #e5e7eb" />

            <p style="white-space:pre-line">
              ${mensaje || "Sin mensaje"}
            </p>
          </div>

          <div style="padding:16px;text-align:center;font-size:12px;color:#6b7280">
            Formulario enviado desde el portafolio
          </div>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Contacto Web <contacto@kevcodesdev.cl>",
      to: [process.env.CONTACT_RECEIVER],
      reply_to: email,
      subject: `📩 Contacto – ${nombre}`,
      html,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return res.status(500).json({
        success: false,
        message: "Error enviando el mensaje",
      });
    }

    console.log("📨 Email enviado con Resend:", data.id);

    return res.json({
      success: true,
      message: "Mensaje enviado correctamente",
    });
  } catch (err) {
    console.error("❌ Error general:", err);
    return res.status(500).json({
      success: false,
      message: "Error interno del servidor",
    });
  }
};
