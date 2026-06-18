import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/Header.css";
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

function Header() {
  const { count, resetNotification } = useContext(NotificationContext);

  return (
    <header className="header">

      {/* SEARCH */}
      <div className="header-brand">
  <div className="book-icon">📚</div>

  <div className="text">
    <h3>Book Vault</h3>
    <span>Discover • Read • Organize</span>
  </div>
</div>

      {/* RIGHT SIDE */}
      <div className="right">
        <ul>

          {/* NOTIFICATION */}
          <li>
            <Link to="/transactions" onClick={resetNotification} className="notification-link">
              <div className="bell-wrapper">
                <i className="fa-solid fa-bell"></i>

                {count > 0 && (
                  <span className="badge">
                    {count}
                  </span>
                )}
              </div>

              Notifications
            </Link>
          </li>

          {/* LOGOUT */}
          <div  className="logout">
          <li >
            <Link to="/logout" >
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              Logout
            </Link>
          </li>
          </div>

        </ul>
      </div>

    </header>
  );
}

export default Header;