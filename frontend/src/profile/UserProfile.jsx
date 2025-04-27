"use client";
import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import StatsOverview from "./StatsOverview";
import TradingHistory from "./TradingHistory";
import SettingsPanel from "./SettingsPanel";

function UserProfile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.pexels.com/photos/4098343/pexels-photo-4098343.jpeg",
    joinDate: "January 2024",
    ticketsSold: 45,
    ticketsBought: 32,
    createdAt: "2024-01-01T00:00:00Z",
  });

  useEffect(() => {
    console.log(user);
  }
  , [user]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("http://localhost:3000/api/profile/", {
          method: "GET",
          headers: {
            token: localStorage.getItem("token"),
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUser(data.data);
        } else {
          console.error("Error fetching user data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }
  , []);

  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return (
    <main className="min-h-screen text-white bg-neutral-900">
      <div className="px-5 py-10 mx-auto my-0 max-w-[1240px] w-[92%]">
        <ProfileHeader user={user} toggleEdit={toggleEdit} />

        <section className="flex flex-col gap-8">
          <StatsOverview user={user} />

          <div className="grid gap-8 grid-cols-[1fr_300px] max-md:grid-cols-[1fr]">
            <TradingHistory />
            <SettingsPanel user={user} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default UserProfile;
