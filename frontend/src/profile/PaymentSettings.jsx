import React from "react";

function PaymentSettings() {
  return (
    <section className="p-6 bg-gray-800 rounded-xl">
      <h2 className="mb-6 text-2xl font-medium">Payment & Payout Settings</h2>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => { window.location.href = "/settings" }}
          className="p-3 text-red-400 bg-transparent rounded-lg border border-red-400 border-solid cursor-pointer">
          Add Payment Method
        </button>
        <button
          onClick={() => { window.location.href = "/settings" }}
          className="p-3 text-red-400 bg-transparent rounded-lg border border-red-400 border-solid cursor-pointer">
          Setup Payout Account
        </button>
      </div>
    </section>
  );
}

export default PaymentSettings;
