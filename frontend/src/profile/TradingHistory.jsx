import React from "react";
import TransactionItem from "./TransactionItem";

function TradingHistory() {
  // Sample transaction data
  const transactions = [1, 2, 3];

  return (
    <section className="p-6 bg-gray-800 rounded-xl">
      <h2 className="mb-6 text-2xl font-medium">Trading History</h2>
      <div className="flex flex-col gap-4">
        {transactions.map((i) => (
          <TransactionItem key={i} id={i} />
        ))}
      </div>
    </section>
  );
}

export default TradingHistory;
