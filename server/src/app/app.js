import express from "express";
import authRoutes from "../controller/auth.controller.js";
const app = express();

app.use("/api/auth", authRoutes);

app.use(express.json())

export default app;
