import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use((req, res, next) => {
  console.log("➡️ Request:", req.method, req.originalUrl);
  next();
});

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.kevcodesdev.cl",
      "http://kevcodesdev.cl",
    ],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ⬇️ AQUÍ está el cambio CLAVE
app.use("/api/", contactRoutes);

export default app;
