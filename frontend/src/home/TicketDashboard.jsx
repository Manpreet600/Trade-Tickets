"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import StatCard from "./StatCard";
import EventCard from "./EventCard";
import ListingItem from "./ListingItem";

function TicketDashboard() {
  const [activeListings, setActiveListings] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [views, setViews] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [totalSalesValue, setTotalSalesValue] = useState(0);
  const [latestTickets, setLatestTickets] = useState([]);
  const [listings, setListings] = useState([]); // New state for active listings

  useEffect(() => {
    async function fetchDashboardStats() {
      const res = await fetch("http://localhost:3000/api/dashboard/stats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message === "Dashboard data fetched successfully") {
        setActiveListings(data.data.totalTickets);
        setTotalSales(data.data.sold);
        console.log(data.data.sales)
        setViews(data.data.views);
        setAvgPrice(data.data.avgPrice);
        setTotalSalesValue(data.data.sales);
      } else {
        console.error("Error fetching dashboard data");
      }
    }

    async function fetchLatestTickets() {
      const res = await fetch("http://localhost:3000/api/tradeTickets/allTickets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message != "Latest tickets fetched successfully") {
        setLatestTickets(data.data.slice(0, 3));
      } else {
        console.error("Error fetching latest tickets");
      }
    }

    async function fetchActiveListings() {
      const res = await fetch("http://localhost:3000/api/myTickets/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      const data = await res.json();
      if (data.message != "Active listings fetched successfully") {
        setListings(data.data); // Set the active listings
      } else {
        console.error("Error fetching active listings");
      }
    }

    fetchDashboardStats();
    fetchLatestTickets();
    fetchActiveListings();
  }, []);

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
                  value={activeListings}
                  label="Active Listings"
                  colorTheme="blue"
                />
                <StatCard
                  value={totalSales}
                  label="Total Sales"
                  colorTheme="green"
                  prefix="₹"
                />
                <StatCard
                  value={views}
                  label="Total Views"
                  colorTheme="violet"
                />
                <StatCard
                  value={avgPrice}
                  label="Avg Ticket Price"
                  colorTheme="sky"
                  prefix="₹"
                />
              </div>
              <div className="p-4 rounded-md border border-solid bg-[rgba(46,160,67,0.1)] border-green-600 border-opacity-10">
                <div className="text-2xl font-semibold text-green-600">
                  {totalSalesValue}
                </div>
                <div className="text-sm text-zinc-400">Total Sales</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="px-6 py-12 mx-auto my-0 max-w-screen-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-white">Latest Tickets</h2>
          <a href="/tickets" className="px-4 py-1.5 text-sm text-white rounded-md border border-solid cursor-pointer bg-zinc-800 border-blue-50 border-opacity-10">
            View All
          </a>
        </div>
        <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-sm:grid-cols-[1fr]">
          {latestTickets.map((ticket) => (
            <EventCard
              key={ticket.id}
              title={ticket.title}
              location={ticket.location}
              date={ticket.date.split('T')[0]}
              price={ticket.cost}
              ticketsLeft={ticket.ticketsLeft}
              imageUrl={ticket.image}
            />
          ))}
        </div>
      </section>

      <section className="px-6 pt-0 pb-12 mx-auto my-0 max-w-screen-xl">
        <h2 className="mb-6 text-xl font-semibold text-white">
          Your Active Listings
        </h2>
        <div className="overflow-hidden bg-gray-900 rounded-md border border-solid border-neutral-700">
          {listings.map((listing) => (
            <ListingItem
              key={listing.id}
              title={listing.title}
              section={listing.status}
              price={listing.cost}
              tickets={listing.numberOfTickets}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default TicketDashboard;