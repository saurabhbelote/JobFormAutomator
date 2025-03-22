"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const [plan, setPlan] = useState<{
    name: string;
    price: string;
    description: string;
    features: string[];
  } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const name = urlParams.get("name") || "Unknown Plan";
      const price = urlParams.get("price") || "0";
      const description = urlParams.get("description") || "No description available";
      const features = urlParams.get("features")
        ? JSON.parse(urlParams.get("features") as string)
        : [];

      setPlan({ name, price, description, features });
    }
  }, []);

  const inputStyle =
    "bg-gray-800 p-2 rounded-md w-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-white";

  const countries = [
    "United States", "Canada", "United Kingdom", "Australia", "Germany",
    "France", "India", "China", "Japan", "Brazil", "Mexico", "South Africa",
    "Russia", "Italy", "Spain", "Netherlands", "Sweden", "Norway", "Denmark",
    "Switzerland", "New Zealand", "South Korea", "Argentina", "Turkey", "Indonesia"
  ];

  if (!plan) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-black text-white">
      <div className="flex gap-8 p-6 rounded-lg shadow-lg bg-gray-900 w-full max-w-4xl">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Checkout</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Full Name" className={inputStyle} />
              <input type="text" placeholder="Phone Number" className={inputStyle} />
            </div>
            <input type="email" placeholder="Email" className={`${inputStyle} w-full`} />
            <div className="space-y-2">
              <h3 className="font-semibold">Billing Address</h3>
              <input type="text" placeholder="Street Address" className={`${inputStyle} w-full`} />
              <div className="flex gap-4">
                <input type="text" placeholder="City" className={inputStyle} />
                <input type="text" placeholder="State/Province/Region" className={inputStyle} />
              </div>
              <input type="text" placeholder="ZIP/Postal Code" className={`${inputStyle} w-full`} />
              <select className={`${inputStyle} w-full bg-gray-800 text-white`}>
                {countries.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="w-full bg-green-500 text-black font-semibold py-2 rounded-lg"
              onClick={() =>
                router.push(
                  `/payment?name=${encodeURIComponent(plan.name)}&price=${encodeURIComponent(plan.price)}`
                )
              }
            >
              Make Payment →
            </button>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-1/3 bg-gradient-to-br from-gray-800 to-teal-900 p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-2">Order Summary</h2>
          <p className="text-gray-300 mb-4">
            <strong>{plan.name} - {plan.price}</strong><br />
            {plan.description}
          </p>
          <ul className="space-y-2 text-sm">
            {plan.features.map((feature, index) => (
              <li key={index}>✅ {feature}</li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-semibold">
            Total: <span className="text-green-400">{plan.price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
