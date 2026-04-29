const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/codearts";

app.get("/", async (req, res) => {
  res.send("Codearts Solutions - Aplicación Node.js desplegada con CI/CD y Kubernetes");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "reto34-codearts-app",
    environment: "cloud-kubernetes"
  });
});

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Conexión correcta con MongoDB"))
  .catch((err) => console.log("MongoDB no disponible todavía:", err.message));

app.listen(PORT, () => {
  console.log(`Aplicación escuchando en el puerto ${PORT}`);
});
