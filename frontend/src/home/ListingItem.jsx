import React from "react";

const ListingItem = ({ title, section, price, tickets }) => {
  return (
    <article className="flex items-center p-4 border-b border-solid border-b-neutral-700">
      <div className="flex-1">
        <h3 className="mb-1 text-base font-medium">{title}</h3>
        <p className="text-sm text-zinc-400">{section}</p>
      </div>
      <div className="flex gap-4 items-center">
        <div className="text-right">
          <div className="font-semibold text-blue-400">₹{price}</div>
          <div className="text-xs text-zinc-400">{tickets} tickets</div>
        </div>
        <button className="px-3 py-1.5 text-xs text-white rounded-md border border-solid cursor-pointer bg-zinc-800 border-blue-50 border-opacity-10">
          Edit
        </button>
      </div>
    </article>
  );
};

export default ListingItem;
