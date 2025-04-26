import React from "react";
import TicketCard from "./TicketCard";
import { useEffect, useState } from "react";

function TicketGrid() {
  // Sample ticket data - in a real app, this would come from props or an API
  // const tickets = [1, 2, 3, 4, 5, 6];
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function main(){
      const res = await fetch("http://localhost:3000/api/tradeTickets/allTickets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token": localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message === "Dashboard data fetched successfully") {
        console.log(data);
        setTickets(data.tickets);
      } else {
        console.error("Error fetching dashboard data");
      }
    }
    main()

  },[])

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
