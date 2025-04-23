"use client";
import React from "react";
import SearchBar from "./SearchBar";
import TicketGrid from "./TicketGrid";

function TicketDashboard() {
  return (
    <section className="px-6 py-10 min-h-screen text-white bg-neutral-900">
      <div className="px-0 mx-auto my-0 max-w-screen-xl">
        <SearchBar />
        <TicketGrid />
      </div>
    </section>
  );
}

export default TicketDashboard;
