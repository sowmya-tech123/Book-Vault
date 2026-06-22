import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  return (
    <nav className="nav">
      <h1>
        <i className="fas fa-book-open"></i> Book-Vault
      </h1>
      <ul>
        <li><Link to="/"><i className="fas fa-chart-line"></i> Dashboard</Link></li>
        <li><Link to="/books"><i className="fas fa-book"></i> Books</Link></li>
        <li><Link to="/issued"><i className="fas fa-arrow-up-right-from-square"></i> Issued Books</Link></li>
        <li><Link to="/available"><i className="fas fa-rotate-left"></i> Available Books</Link></li>
        <li><Link to="/transactions"><i className="fas fa-money-check-dollar"></i> Transactions</Link></li>
        <li><Link to="/settings"><i className="fas fa-gear"></i> Settings</Link></li>
      </ul>

      <div className="theme-toggle">
        <span>
          <i className="fa-solid fa-moon"></i> Dark Mode
        </span>

        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleTheme}
          />
          <span className="slider"></span>
        </label>
      </div>
    </nav>
  );
}

export default Sidebar;