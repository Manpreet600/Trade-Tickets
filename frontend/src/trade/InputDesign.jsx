"use client";
import * as React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SellButton from "./SellButton";
import TicketGrid from "./TicketGrid";

function InputDesign() {
  return (
    <main className="px-6 py-10 min-h-screen text-white bg-neutral-900">
      <div className="mx-auto my-0 max-w-screen-xl">
        <section className="flex flex-wrap gap-4 items-center mb-8">
          <SearchBar />
          <CategoryFilter />
          {/* <SellButton /> */}
        </section>
        <TicketGrid />
      </div>
    </main>
  );
}

export default InputDesign;
