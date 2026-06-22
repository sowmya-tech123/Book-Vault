import "../styles/Books.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import cleanCode from "../assets/books/clean-code.jpeg";
import atomicHabits from "../assets/books/atomic-habits.jpeg";
import deepWork from "../assets/books/deep-work.jpeg";
import theAlchemist from "../assets/books/the-alchemist.jpeg";
import richDadPoorDad from "../assets/books/rich-dad-poor-dad.jpeg";
import harryPotter from "../assets/books/harry-potter.jpeg";
const API_URL = "https://book-vault-1-fel0.onrender.com";
function Books() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
const { increaseNotification } = useContext(NotificationContext);
  const imageMap = {
    "Clean Code": cleanCode,
    "Atomic Habits": atomicHabits,
    "Deep Work": deepWork,
    "The Alchemist": theAlchemist,
    "Rich Dad Poor Dad": richDadPoorDad,
    "Harry Potter": harryPotter,

  };

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
  });

  // GET BOOKS
  const fetchBooks = async () => {
    try {
      const res = await axios.get(`${API_URL}/books`);
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // ADD BOOK
  const addBook = async () => {
    try {
      const res = await axios.post(`${API_URL}/books`, {
        title: form.title,
        author: form.author,
        category: form.category,
        status: "Available",
      });

      setBooks([...books, res.data]);
      increaseNotification();
      setForm({ title: "", author: "", category: "" });
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE BOOK
  const deleteBook = async (id) => {
    try {
      await axios.delete(`${API_URL}/books/${id}`);

      setBooks(books.filter((b) => b._id !== id));
      increaseNotification();
    } catch (err) {
      console.log(err);
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="books-page">

      <div className="front">
        <h1>Books</h1>
        <button className="btn" onClick={() => setShowForm(true)}>
          + Add Book
        </button>
      </div>

      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Search Books..."
          className="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FORM */}
      {showForm && (
        <div className="form-popup">
          <div className="form-box">

            <input
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <input
              placeholder="Author"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
            />

            <input
              placeholder="Category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />

            <button onClick={addBook}>Save</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Book</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredBooks.map((book, index) => {
            const image = imageMap[book.title];

            return (
              <tr key={book._id}>
                <td>{index + 1}</td>

                <td>
                  <div className="book-info">
                    <img
                      src={image}
                      alt={book.title}
                      className="book-cover"
                    />
                    <span>{book.title}</span>
                  </div>
                </td>

                <td>{book.author}</td>
                <td>{book.category}</td>

                <td>
                  <span className={book.status}>
                    {book.status}
                  </span>
                </td>

                <td>
                  <button
                    className="delete"
                    onClick={() => deleteBook(book._id)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </main>
  );
}

export default Books;