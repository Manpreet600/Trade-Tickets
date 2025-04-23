import React from "react";

function UserSettings() {
  return (
    <section className="p-6 bg-gray-800 rounded-xl">
      <h2 className="mb-4 text-xl font-medium">Settings</h2>
      <div className="flex flex-col gap-3">
        <button className="px-0 py-2 text-left text-red-400 bg-transparent cursor-pointer">
          Change Password
        </button>
        <button className="px-0 py-2 text-left text-red-400 bg-transparent cursor-pointer">
          Notification Settings
        </button>
      </div>
    </section>
  );
}

export default UserSettings;
