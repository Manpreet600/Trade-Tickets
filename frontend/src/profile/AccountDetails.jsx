import React from "react";

function AccountDetails({ user }) {
  console.log(user.createdAt.slice(":")[0])
  return (
    <section className="p-6 bg-gray-800 rounded-xl">
      <h2 className="mb-4 text-xl font-medium">Account Details</h2>
      <div className="flex flex-col gap-3">
        <div>
          <label className="text-sm text-neutral-400">Member Since</label>
          <p>{user.createdAt.split("T")[0]}</p>
        </div>
        <div>
          <label className="text-sm text-neutral-400">Email</label>
          <p>{user.email}</p>
        </div>
      </div>
    </section>
  );
}

export default AccountDetails;
