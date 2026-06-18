const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/", async (req, res) => {
  try {
    const totalBooks = await Book.countDocuments();

    const availableBooks = await Book.countDocuments({
      status: "Available",
    });

    const issuedBooks = await Book.countDocuments({
      status: "Issued",
    });

    res.json({
      totalBooks,
      availableBooks,
      issuedBooks,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;