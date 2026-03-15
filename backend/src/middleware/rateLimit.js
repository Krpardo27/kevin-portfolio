import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 3,
  message: {
    message: "Demasiados intentos, intenta más tarde.",
  },
});
