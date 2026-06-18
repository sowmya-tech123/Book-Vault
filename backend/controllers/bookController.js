import Book from "../models/Book.js";
import Transaction from "../models/Transaction.js";
import Notification from "../models/Notification.js";

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBook = async (req, res) => {
  try {
    // 1. Create Book
    const newBook = await Book.create(req.body);

    const message = `${newBook.title} is added`;

    // 2. Create Transaction
    await Transaction.create({
      type: "BOOK_ADDED",
      message,
      bookId: newBook._id,
    });

    // 3. Create Notification
    await Notification.create({
      message,
      type: "success",
      isRead: false,
    });

    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};