import React, { useState } from 'react';

export default function PaymentContent() {
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [details, setDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    paypalEmail: '',
    bankAccount: '',
    routingNumber: '',
  });

  return (
    <div className="bg-gray-800 rounded-2xl p-8 space-y-10 shadow-lg">
      {/* 1. Select Payment Method */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Payment Method</h2>
        <p className="text-gray-400">Choose how you’d like to get paid</p>
        <div className="flex gap-4">
          {[
            { key: 'credit', label: 'Credit Card' },
            { key: 'paypal', label: 'PayPal' },
            { key: 'bank', label: 'Bank Transfer' },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setPaymentMethod(key)}
              className={`px-4 py-2 rounded-xl font-medium transition ${
                paymentMethod === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {/* 2. Payment Details Form */}
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Payment Details</h2>
        <p className="text-gray-400">Enter your {paymentMethod === 'credit'
            ? 'card'
            : paymentMethod === 'paypal'
            ? 'PayPal'
            : 'bank'} details below</p>

        <div className="grid grid-cols-2 gap-4">
          {paymentMethod === 'credit' && (
            <>
              <input
                type="text"
                placeholder="Card Number"
                value={details.cardNumber}
                onChange={e => setDetails({...details, cardNumber: e.target.value})}
                className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500 col-span-2"
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={details.expiry}
                onChange={e => setDetails({...details, expiry: e.target.value})}
                className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                value={details.cvv}
                onChange={e => setDetails({...details, cvv: e.target.value})}
                className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              />
            </>
          )}
          {paymentMethod === 'paypal' && (
            <input
              type="email"
              placeholder="PayPal Email"
              value={details.paypalEmail}
              onChange={e => setDetails({...details, paypalEmail: e.target.value})}
              className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500 col-span-2"
            />
          )}
          {paymentMethod === 'bank' && (
            <>
              <input
                type="text"
                placeholder="Bank Account Number"
                value={details.bankAccount}
                onChange={e => setDetails({...details, bankAccount: e.target.value})}
                className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Routing Number"
                value={details.routingNumber}
                onChange={e => setDetails({...details, routingNumber: e.target.value})}
                className="p-3 bg-gray-900 rounded-xl border border-gray-700 focus:border-blue-500"
              />
            </>
          )}
        </div>
      </section>

      {/* 3. Save Button */}
      <section>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-xl font-semibold hover:bg-blue-500">
          Save Payment Settings
        </button>
      </section>
    </div>
  );
}
