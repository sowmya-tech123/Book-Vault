import "../styles/Transactions.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="transactions">
      <h1>Recent Transactions</h1>

      <div className="transactions-list">
        {transactions.map((item) => (
          <div className="transaction-row" key={item._id}>
            <span>{item.text}</span>

            <span className="time">
              {new Date(item.createdAt).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Transactions;