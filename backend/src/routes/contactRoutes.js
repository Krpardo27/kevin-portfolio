import { Router } from "express";
import { enviarContacto } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimit.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("API de contacto funcionando");
});

router.post("/contact", contactLimiter, enviarContacto);

export default router;
