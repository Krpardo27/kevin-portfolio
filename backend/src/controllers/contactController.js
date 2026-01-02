import { Resend } from "resend";
import { validateContact } from "../utils/validateContact.js";
import { htmlAdmin } from "../templates/htmlAdmin.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const enviarContacto = async (req, res) => {
  try {
    if (process.env.NODE_ENV !== "production") {
      console.log("BODY:", req.body);
    }

    if (req.body.company) {
      return res.status(200).end();
    }

    const errors = validateContact(req.body);
    if (errors.length > 0) {
      return res.status(400).json({ message: errors[0] });
    }

    const { nombre, email, telefono, mensaje } = req.body;

    const safeMessage = mensaje.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const recipients = [process.env.CONTACT_TO, process.env.CONTACT_CC].filter(
      Boolean
    );

    await resend.emails.send({
      from: process.env.CONTACT_FROM,
      to: recipients,
      replyTo: email,
      subject: "Nuevo mensaje desde kevcodesdev.cl",
      html: htmlAdmin({ nombre, email, telefono, mensaje: safeMessage }),
    });

    res.json({ success: true });
  } catch (error) {
    console.error("❌ Error contacto:", error);
    res.status(500).json({
      message: "Error al enviar el mensaje",
    });
  }
};
