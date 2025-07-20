const express = require("express");
const cors = require("cors"); // ✅ import cors
const app = express();
const port = process.env.PORT || 4100;
const mongodb = require("./db/db");
const authRoutes = require("./routes/AuthRoutes");

// Connect to DB
mongodb();

// Enable CORS for all origins
app.use(cors()); // ✅ allow all frontend origins

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use("/api", authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
