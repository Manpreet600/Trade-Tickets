"use client";
import React from "react";

function TicketCard({ id, title, date, location, price, imageUrl }) {
  const handleEdit = () => {
    console.log(`Editing ticket ${id}`);
  };

  const handleViewDetails = () => {
    console.log(`Viewing details for ticket ${id}`);
  };
  const ticketRemove = async () => {
    console.log(id)
    const res = await fetch("http://localhost:3000/api/myTickets/deleteTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        ticketId: id,
        token: localStorage.getItem("token")
      }),
    });
    const data = await res.json();
    if (data.message === "Ticket deleted successfully") {
      console.log(data);
    } else {
      console.error("Error removing ticket");
    }
    window.location.reload();
  }
  return (
    <article className="p-4 bg-gray-900 rounded-md border border-solid cursor-pointer border-neutral-700 delay-[0.2s] duration-[0.2s] transition-[border-color] hover:border-blue-400">
      <figure className="overflow-hidden mb-4 h-40 rounded">
        <img
          className="object-cover overflow-hidden aspect-square size-full"
          src={imageUrl}
          alt={title}
        />
      </figure>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <div className="mb-4 text-sm text-zinc-400">
        <time>Date: {date}</time>
        <address className="not-italic">Location: {location}</address>
      </div>
      <div className="flex gap-3 justify-between items-center mt-4">
        <div className="text-xl font-semibold text-blue-400">{price}</div>
        <div className="flex gap-2">
          {/* <button
            className="px-3 py-1.5 text-xs font-semibold text-white rounded-md border border-solid cursor-pointer bg-zinc-800 border-neutral-700 duration-[0.2s] transition-[background-color] hover:bg-zinc-700"
            onClick={handleEdit}
          >
            Edit */}
          {/* </button> */}
          <button
            className="px-3 py-1.5 text-xs font-semibold text-white bg-red-400 rounded-md cursor-pointer border-none duration-[0.2s] transition-[background-color] hover:bg-red-500"
            onClick={ticketRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default TicketCard;
