import React from "react";
import TicketCard from "./TicketCard";

function TicketGrid() {
  // Sample data for 6 tickets
  const tickets = [1, 2, 3, 4, 5, 6];

  return (
    <section className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:grid-cols-[1fr]">
      {tickets.map((i) => (
        <TicketCard
          key={i}
          id={i}
          title={`Event Title ${i}`}
          date={`March ${i + 14}, 2024`}
          location="Venue Name"
          price="$99.99"
          imageUrl="https://images.pexels.com/photos/18515130/pexels-photo-18515130.jpeg"
        />
      ))}
    </section>
  );
}

export default TicketGrid;
