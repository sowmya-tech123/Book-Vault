const express = require("express");
const router = express.Router();

const Book = require("../models/Book");
const Transaction = require("../models/Transaction");

// GET ALL BOOKS
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ADD BOOK
router.post("/", async (req, res) => {
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      image: req.body.image || "",
      status: "Available",
    });

    await Transaction.create({
      text: `➕ ${book.title} added to library`,
    });

    res.status(201).json(book);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});
// DELETE BOOK
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    await Transaction.create({
      text: `🗑️ ${book.title} removed from library`,
    });

    await Book.findByIdAndDelete(req.params.id);

    res.json({
      message: "Book deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;