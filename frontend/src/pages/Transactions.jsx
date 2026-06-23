import "../styles/Transactions.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://book-vault-1-fel0.onrender.com/transactions")
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="transactions">
      <h1>Recent Transactions</h1>

      <div className="transactions-list">
        {transactions.length > 0 ? (
          transactions.map((item) => (
            <div className="transaction-row" key={item._id}>
              <span>{item.text}</span>

              <span className="time">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>
          ))
        ) : (
          <p>No transactions found</p>
        )}
      </div>
    </main>
  );
}

export default Transactions;