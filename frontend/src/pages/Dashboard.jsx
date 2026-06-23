import "@fortawesome/fontawesome-free/css/all.min.css";
import TopCategories from "../components/TopCategories";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    availableBooks: 0,
    issuedBooks: 0,
  });

  useEffect(() => {
    axios
      .get("https://book-vault-1-fel0.onrender.com/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <h1>Welcome back, Sowmya 👋</h1>

      <div className="Box">
        <div className="box1">
          <i className="fas fa-book"></i>
          <div className="box-content">
            <h3>Total Books</h3>
            <p className="count">{stats.totalBooks}</p>
            <p><a href="#">View Details</a></p>
          </div>
        </div>

        <div className="box1">
          <i className="fas fa-book-open"></i>
          <div className="box-content">
            <h3>Available Books</h3>
            <p className="count">{stats.availableBooks}</p>
            <p><a href="#">View Details</a></p>
          </div>
        </div>

        <div className="box1">
          <i className="fas fa-arrow-up-right-from-square"></i>
          <div className="box-content">
            <h3>Issued Books</h3>
            <p className="count">{stats.issuedBooks}</p>
            <p><a href="#">View Details</a></p>
          </div>
        </div>

        <div className="box1">
          <i className="fas fa-rotate-left"></i>
          <div className="box-content">
            <h3>Returned Books</h3>
            <p className="count">0</p>
            <p><a href="#">View Details</a></p>
          </div>
        </div>
      </div>

      <TopCategories />
    </main>
  );
}

export default Dashboard;