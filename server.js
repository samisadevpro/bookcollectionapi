import express from "express";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("📚 Welcome to the Book Collection API!");
});

// Middleware
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api", bookRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
