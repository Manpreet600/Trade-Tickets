import React, { useState, useEffect } from "react";
import TicketCard from "./TicketCard";

function TicketGrid() {
  // Sample data for 6 tickets
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
        if (data.message === "Tickets fetched successfully") {
          setTickets(data.data);
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
        number={i.number}
          key={i}
          id={i}
          title={`${i.title}`}
          date={`${i.date.split('T')[0]}`}
          location={`${i.location}`}
          price={`₹${i.cost}`}
          imageUrl="https://images.pexels.com/photos/18515130/pexels-photo-18515130.jpeg"
        />
      ))}
    </section>
  );
}

export default TicketGrid;
