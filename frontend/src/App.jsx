import "@fortawesome/fontawesome-free/css/all.min.css";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import Issued from "./pages/Issued";
import Available from "./pages/Available";
import Transactions from "./pages/Transactions";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/issued" element={<Issued />} />
          <Route path="/available" element={<Available />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;