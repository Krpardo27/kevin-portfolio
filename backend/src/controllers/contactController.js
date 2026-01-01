import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (str = "") =>
  String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const isEmailValid = (email = "") =>
  /^\S+@\S+\.\S+$/.test(String(email).trim());

export const enviarContacto = async (req, res) => {
  try {
    const { nombre, email, telefono, mensaje, website } = req.body;

    if (website && String(website).trim().length > 0) {
      return res.json({ success: true, message: "OK" }); 
    }

    if (!nombre || !email) {
      return res.status(400).json({
        success: false,
        message: "Nombre y correo son obligatorios",
      });
    }

    if (!isEmailValid(email)) {
      return res.status(400).json({
        success: false,
        message: "Correo inválido",
      });
    }

    const safeNombre = escapeHtml(nombre);
    const safeEmail = escapeHtml(email);
    const safeTelefono = escapeHtml(telefono || "");
    const safeMensaje = escapeHtml(mensaje || "");

    const adminHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f4f4f5;padding:30px">
        <div style="max-width:620px;margin:auto;background:white;border-radius:14px;overflow:hidden">
          <div style="background:#111827;color:white;padding:22px 24px">
            <h2 style="margin:0;font-size:18px">📩 Nuevo mensaje de contacto</h2>
          </div>
          <div style="padding:22px 24px;color:#111827;font-size:14px;line-height:1.6">
            <p style="margin:0 0 10px"><strong>Nombre:</strong> ${safeNombre}</p>
            <p style="margin:0 0 10px"><strong>Email:</strong> ${safeEmail}</p>
            <p style="margin:0 0 10px"><strong>Teléfono:</strong> ${
              safeTelefono || "No informado"
            }</p>

            <hr style="margin:18px 0;border:none;border-top:1px solid #e5e7eb" />

            <p style="margin:0;white-space:pre-line">${
              safeMensaje || "Sin mensaje"
            }</p>
          </div>
          <div style="padding:14px 24px;text-align:center;font-size:12px;color:#6b7280;background:#fafafa">
            Enviado desde tu portafolio
          </div>
        </div>
      </div>
    `;

    const { error: adminError } = await resend.emails.send({
      from: "Kevin Portfolio <contacto@kevcodesdev.cl>",
      to: [process.env.CONTACT_RECEIVER],
      reply_to: email,
      subject: `📩 Contacto – ${nombre}`,
      html: adminHtml,
    });

    if (adminError) {
      console.error("❌ Resend admin error:", adminError);
      return res.status(500).json({
        success: false,
        message: "No se pudo enviar el mensaje",
      });
    }

    // 2) Email de confirmación hacia el usuario (auto-reply)
    const userHtml = `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#0b1220;padding:30px">
        <div style="max-width:620px;margin:auto;background:#111827;border-radius:14px;overflow:hidden">
          <div style="padding:22px 24px;background:#0f172a;color:#fff">
            <h2 style="margin:0;font-size:18px">Gracias por contactarme</h2>
            <p style="margin:8px 0 0;color:#cbd5e1;font-size:14px">
              Recibí tu mensaje y te responderé a la brevedad.
            </p>
          </div>

          <div style="padding:22px 24px;color:#e5e7eb;font-size:14px;line-height:1.7">
            <p style="margin:0 0 12px">Hola <strong>${safeNombre}</strong>,</p>
            <p style="margin:0 0 14px">
              Este correo confirma que tu mensaje fue recibido correctamente.
            </p>

            <div style="background:#0b1220;border:1px solid #1f2937;border-radius:12px;padding:14px 16px;margin:16px 0">
              <p style="margin:0 0 8px;color:#94a3b8;font-size:12px">Resumen</p>
              <p style="margin:0"><strong>Email:</strong> ${safeEmail}</p>
              <p style="margin:6px 0 0"><strong>Teléfono:</strong> ${
                safeTelefono || "No informado"
              }</p>
              <p style="margin:10px 0 0;white-space:pre-line"><strong>Mensaje:</strong> ${
                safeMensaje || "Sin mensaje"
              }</p>
            </div>

            <p style="margin:0;color:#94a3b8;font-size:12px">
              Si no enviaste este mensaje, puedes ignorar este correo.
            </p>
          </div>

          <div style="padding:14px 24px;text-align:center;font-size:12px;color:#94a3b8;background:#0f172a">
            kevcodesdev.cl
          </div>
        </div>
      </div>
    `;

    const { error: userError } = await resend.emails.send({
      from: "Kevin Portfolio <contacto@kevcodesdev.cl>",
      to: [email],
      subject: "✅ Recibí tu mensaje",
      html: userHtml,
    });

    // Si falla el auto-reply, no rompas la UX del usuario (tu email ya llegó)
    if (userError) {
      console.warn("⚠️ Resend user confirmation error:", userError);
    }

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
