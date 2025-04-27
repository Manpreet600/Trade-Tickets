import React, { useEffect } from "react";
import StatCard from "./StatCard";

function StatsOverview({ user }) {
  useEffect(() => {
    console.log(user.createdAt);
  }
  , [user]);
  const stats = [
    {
      title: "Total Tickets Sold",
      value: user.sold,
    },
    {
      title: "Total Purchases",
      value: user.bought,
    },
    {
      title: "Member Since",
      value: user.createdAt.split('T')[0].replace(/-/g, "/"),
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
