const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
const bookRoutes = require("./routes/bookRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use("/books", bookRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/transactions", transactionRoutes);
// IMPORTANT: Better mongoose config
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected Successfully");

  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });
})
.catch((err) => {
  console.log("MongoDB Connection Error ❌", err.message);
});