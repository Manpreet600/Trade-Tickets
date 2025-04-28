import React from "react";
import BuyButton from "./BuyButton";
import ChatButton from "./chatButton";

function TicketCard({ number, title, date, location, price, imageUrl }) {
  return (
    <article className="p-5 bg-gray-900 rounded-lg border border-solid transition-transform cursor-pointer border-neutral-700 duration-[0.2s] hover:transform hover:scale-105">
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
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-blue-400">{price}</div>
        <div className="flex justify-end gap-[10px]">
        <BuyButton />
        <ChatButton number={number}/>
        </div>
      </div>
    </article>
  );
}

export default TicketCard;
