import React from "react";

function StatCard({ title, value }) {
  return (
    <article className="flex flex-col gap-2 p-6 bg-gray-800 rounded-xl">
      <h3 className="text-lg text-neutral-400">{title}</h3>
      <p className="text-3xl text-red-400">{value}</p>
    </article>
  );
}

export default StatCard;
