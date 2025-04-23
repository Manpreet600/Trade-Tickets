import React from "react";

function SearchBar() {
  return (
    <input
        className="flex-1 px-3 py-2 text-sm text-white rounded-md border border-solid bg-neutral-900 border-neutral-700 min-w-[280px]"
        type="search"
        placeholder="Search tickets..."
        aria-label="Search tickets"
      />
  );
}

export default SearchBar;
