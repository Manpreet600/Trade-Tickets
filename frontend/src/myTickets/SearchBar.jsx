import React from "react";
import AddIcon from "./AddIcon";

function SearchBar() {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-8 rounded-md ">
      <input
        className="flex-1 px-3 py-2 text-sm text-white rounded-md border border-solid bg-neutral-900 border-neutral-700 min-w-[280px]"
        type="search"
        placeholder="Search tickets..."
        aria-label="Search tickets"
      />
      <select
        className="px-3 py-2 text-sm text-white rounded-md border border-solid cursor-pointer bg-neutral-900 border-neutral-700"
        aria-label="Filter by category"
      >
        <option>All Categories</option>
        <option>Sports</option>
        <option>Concerts</option>
        <option>Theater</option>
      </select>
      <button
        className="flex gap-2 items-center px-4 py-2 text-sm font-semibold text-white bg-green-700 rounded-md cursor-pointer border-none duration-[0.2s] transition-[background-color] hover:bg-green-600"
        aria-label="List a new ticket"
      >
        <AddIcon />
        <span>List Ticket</span>
      </button>
    </div>
  );
}

export default SearchBar;
