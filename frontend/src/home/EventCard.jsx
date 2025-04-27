import React from "react";

const EventCard = ({ title, location, date, price, ticketsLeft, imageUrl }) => {
  return (
    <article className="overflow-hidden bg-gray-900 rounded-md border border-solid transition-transform border-neutral-700 duration-[0.2s]">
      <img
        className="object-cover overflow-hidden w-full aspect-square h-[150px]"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h3 className="mb-2 text-base font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-zinc-400">
          {location} • {date}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-blue-400">From ₹{price}</span>
          <span className="px-2 py-1 text-xs text-blue-400 rounded-xl  border border-blue-500 border-opacity-20 cursor-pointer text-white bg-blue-500 hover:bg-opacity-10 transition duration-200">
            Buy Now
          </span>
        </div>
      </div>
    </article>
  );
};

export default EventCard;
