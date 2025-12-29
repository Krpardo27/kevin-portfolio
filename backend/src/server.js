import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://kevcodesdev.cl",
  "https://www.kevcodesdev.cl",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // permitir herramientas como Postman o curl
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⬇️ AQUÍ está el cambio CLAVE
app.use("/api", contactRoutes);

export default app;
