import React from "react";

function CategoryFilter() {
  return (
    <select
      className="outline-none px-4 py-3 text-base bg-gray-900 rounded-md border border-solid cursor-pointer border-neutral-700 text-white"
      aria-label="Filter by category"
    >
      <option>All Categories</option>
      <option>Sports</option>
      <option>Concerts</option>
      <option>Theater</option>
    </select>
  );
}

export default CategoryFilter;
