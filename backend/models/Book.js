const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: { type: String, required: true },

    image: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Available", "Issued"],
      default: "Available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);