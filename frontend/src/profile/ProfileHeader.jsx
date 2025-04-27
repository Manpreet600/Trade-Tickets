import React, { use, useEffect } from "react";

function ProfileHeader({ user, toggleEdit }) {
  useEffect(() => {
    console.log(user.image);
  }
  , [user]);
  return (
    <header className="flex gap-8 items-center mb-12 max-sm:flex-col max-sm:text-center">
      <img
        alt="Profile picture"
        className="object-cover overflow-hidden rounded-full border-4 border-solid aspect-square border-neutral-700 h-[150px] w-[150px]"
        src={user.image}
      />
      <div>
        <h1 className="mb-2 text-3xl font-semibold">{user.userName}</h1>
        <p className="mb-4 text-neutral-400">{user.email}</p>
        <div className="flex gap-6 max-sm:justify-center">
          <div>
            <span className="text-red-400">{user.sold}</span>
            <span className="ml-1 text-neutral-400">Sold</span>
          </div>
          <div>
            <span className="text-red-400">{user.bought}</span>
            <span className="ml-1 text-neutral-400">Bought</span>
          </div>
        </div>
      </div>
      <button
        className="px-6 py-3 ml-auto font-medium bg-red-400 rounded-lg transition-opacity cursor-pointer duration-[0.2s]"
        onClick={toggleEdit}
        aria-label="Edit Profile"
      >
        Edit Profile
      </button>
    </header>
  );
}

export default ProfileHeader;
