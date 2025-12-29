import { Router } from "express";
import { sendContactEmail } from "../controllers/contactController.js";

const router = Router();

router.post("/contact", (req, res, next) => {
  console.log("📩 POST /api/contact recibido");
  next();
}, sendContactEmail);

export default router;
