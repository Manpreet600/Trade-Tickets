import React from "react";

function TransactionItem({ id }) {
  const isSold = id % 2 === 1;
  const transactionColor = isSold ? "rgb(236,94,113)" : "#4CAF50";
  const transactionType = isSold ? "Sold" : "Bought";

  return (
    <article className="flex justify-between p-4 rounded-lg bg-neutral-700 bg-opacity-50">
      <div>
        <h3 className="mb-1">
          <span>Concert Ticket #{id}</span>
        </h3>
        <p className="text-sm text-neutral-400">
          <span>Traded on Jan {id}, 2024</span>
        </p>
      </div>
      <div style={{ color: transactionColor }}>
        <span>{transactionType}</span>
      </div>
    </article>
  );
}

export default TransactionItem;
