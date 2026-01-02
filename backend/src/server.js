import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
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
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use((req, res, next) => {
  if (!["GET", "POST"].includes(req.method)) {
    return res.sendStatus(405);
  }
  next();
});

app.use(helmet());
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use((req, res, next) => {
    console.log("➡️", req.method, req.originalUrl);
    next();
  });
}

app.use("/api", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
  console.log(`Frontend permitido: ${process.env.FRONTEND_URL}`);
});

export default app;
