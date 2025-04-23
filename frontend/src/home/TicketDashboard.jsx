"use client";
import * as React from "react";
import { useState } from "react";
import StatCard from "./StatCard";
import EventCard from "./EventCard";
import ListingItem from "./ListingItem";

function TicketDashboard() {
  const [stats, setStats] = useState(() => ({
    activeListings: 24,
    totalSales: 2156,
    totalViews: 1205,
    avgTicketPrice: 85,
  }));

  return (
    <main className="min-h-screen text-white bg-neutral-900">
      <header className="overflow-hidden relative px-0 py-12 border-b border-solid border-b-zinc-800">
        <div className="flex flex-col gap-8 mx-auto my-0 max-w-screen-xl">
          <div className="flex justify-between items-center">
            <h1 className=" mb-6 text-[45px] font-semibold tracking-tight leading-tight text-white mr-[6px]">
              <span className="block ">Your ticket dashboard</span>
              <span className="block mt-4 text-2xl text-zinc-400">
                Manage your listings and track performance
              </span>
            </h1>
            <div className="flex gap-4">
              <div className="grid gap-6 mt-8 grid-cols-[repeat(4,1fr)]">
                <StatCard
                  value={stats.activeListings}
                  label="Active Listings"
                  colorTheme="blue"
                />
                <StatCard
                  value={stats.totalSales}
                  label="Total Sales"
                  colorTheme="green"
                  prefix="$"
                />
                <StatCard
                  value={stats.totalViews}
                  label="Total Views"
                  colorTheme="violet"
                />
                <StatCard
                  value={stats.avgTicketPrice}
                  label="Avg Ticket Price"
                  colorTheme="sky"
                  prefix="$"
                />
              </div>
              <div className="p-4 rounded-md border border-solid bg-[rgba(46,160,67,0.1)] border-green-600 border-opacity-10">
                <div className="text-2xl font-semibold text-green-600">
                  $2,156
                </div>
                <div className="text-sm text-zinc-400">Total Sales</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-12 mx-auto my-0 max-w-screen-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Popular Events</h2>
          <a href="/trade" className="px-4 py-1.5 text-sm text-white rounded-md border border-solid cursor-pointer bg-zinc-800 border-blue-50 border-opacity-10">
            View All
          </a>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:grid-cols-[1fr]">
          {[1, 2, 3].map((i) => (
            <EventCard
              key={i}
              title={`Summer Music Festival ${i}`}
              location="Central Park"
              date={`Aug ${i + 15}`}
              price={99}
              ticketsLeft={120 - i * 10}
              imageUrl="https://images.pexels.com/photos/31731254/pexels-photo-31731254.jpeg"
            />
          ))}
        </div>
      </section>

      <section className="px-6 pt-0 pb-12 mx-auto my-0 max-w-screen-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Your Active Listings
        </h2>
        <div className="overflow-hidden bg-gray-900 rounded-md border border-solid border-neutral-700">
          {[1, 2, 3, 4].map((i) => (
            <ListingItem
              key={i}
              title={`Event Title ${i}`}
              section={`Section A, Row ${i}`}
              price={199}
              tickets={2}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TicketDashboard;
