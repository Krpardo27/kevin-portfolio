import { Router } from "express";
import { sendContactEmail } from "../controllers/contactController.js";

const router = Router();

router.post("/contact", (req, res) => {
  console.log("📩 CONTACT RECIBIDO");
  console.log("BODY:", req.body);

  res.status(200).json({ ok: true });
}, sendContactEmail);

export default router;
