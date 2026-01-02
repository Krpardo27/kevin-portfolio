import { body } from "express-validator";

export const contactoValidator = [
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .bail()
    .isEmail()
    .withMessage("El correo no es válido")
    .normalizeEmail(),

  body("telefono")
    .trim()
    .notEmpty()
    .withMessage("El teléfono es obligatorio")
    .bail()
    .matches(/^\+569\d{8}$/)
    .withMessage("El teléfono debe tener el formato +569XXXXXXXX"),

  body("mensaje")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 500 })
    .withMessage("El mensaje no puede superar los 500 caracteres"),
];
