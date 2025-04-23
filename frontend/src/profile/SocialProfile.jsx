import React from "react";

function SocialProfile() {
  const socialPlatforms = [
    { name: "Twitter", connected: false },
    { name: "Facebook", connected: false },
  ];

  return (
    <section className="p-6 bg-gray-800 rounded-xl">
      <h2 className="mb-6 text-2xl font-medium">Social Profile</h2>
      <div className="flex flex-col gap-4">
        {socialPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="flex gap-3 items-center text-neutral-400"
          >
            <span>{platform.name}</span>
            <button className="px-4 py-2 text-red-400 bg-transparent rounded border border-red-400 border-solid cursor-pointer">
              Connect
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SocialProfile;
