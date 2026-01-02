import { validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].message,
      errors: errors.array(),
    });
  }

  next();
};
