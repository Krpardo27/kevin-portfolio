import { Router } from "express";
import { enviarContacto } from "../controllers/contactController.js";
import { contactLimiter } from "../middleware/rateLimit.js";
import { contactoValidator } from "../validators/contactoValidator.js";
import { validarCampos } from "../middleware/validarCampos.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("API de contacto funcionando");
});

router.post(
  "/contact",
  contactLimiter,
  contactoValidator,
  validarCampos,
  enviarContacto
);

export default router;
