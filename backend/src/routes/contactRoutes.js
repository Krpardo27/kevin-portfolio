import e, { Router } from "express";
import { enviarContacto } from "../controllers/contactController.js";

const router = Router();

router.post("/contact", (req, res) => {
  console.log("📩 CONTACT RECIBIDO");
  console.log("BODY:", req.body);

  res.status(200).json({ ok: true });
}, enviarContacto);

export default router;
