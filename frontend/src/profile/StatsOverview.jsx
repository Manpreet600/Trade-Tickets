import React from "react";
import StatCard from "./StatCard";

function StatsOverview({ user }) {
  const stats = [
    {
      title: "Total Tickets Sold",
      value: user.ticketsSold,
    },
    {
      title: "Total Purchases",
      value: user.ticketsBought,
    },
    {
      title: "Member Since",
      value: user.joinDate,
    },
  ];

  return (
    <section className="grid gap-6 grid-cols-[repeat(3,1fr)] max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </section>
  );
}

export default StatsOverview;
