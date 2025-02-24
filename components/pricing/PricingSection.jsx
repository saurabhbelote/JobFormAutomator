/** @format */
"use client";
import React, { useEffect, useRef, useState } from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      description: "Essential Tools to Kickstart Your Job Search",
      features: [
        "Limited offer: Free access",
        "Auto-Apply 10 jobs Daily",
        "AI-powered Auto-Fills",
        "Delete your data anytime",
      ],
      buttonText: "Get Started",
      buttonStyle:
        "bg-transparent border border-[#0FAE96] text-[#0FAE96] hover:bg-[#0FAE96] hover:text-white transition",
    },
    {
      name: "Premium",
      price: "$10",
      description: "Advanced Features for the Serious Job Seeker",
      features: [
        "All in Beginner plan",
        "Call & Mail Support",
        "Auto-Apply 100 jobs Daily",
        "Personalized Interview Tips",
      ],
      buttonText: "Subscribe",
      buttonStyle: "bg-[#0FAE96] text-white hover:bg-[#0FAE96] transition",
      bestSeller: true,
    },
    {
      name: "Silver",
      price: "$30",
      description: "Ultimate Tools for Landing Your Dream Job Faster",
      features: [
        "All in Premium Plan",
        "Advanced AI model",
        "LinkedIn Profile Optimization",
        "Skill Gap Analysis",
      ],
      buttonText: "Subscribe",
      buttonStyle:
        "bg-transparent border border-[#0FAE96] text-[#0FAE96] hover:bg-[#0FAE96] hover:text-white transition",
    },
  ];

  const cardRefs = useRef([]); // Reference for pricing cards
  const [isInView, setIsInView] = useState(false); // State to track visibility of cards

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Show the cards when in view
          } else {
            setIsInView(false); // Hide when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is in view
    );

    // Observe valid elements only
    cardRefs.current
      .filter((card) => card !== null)
      .forEach((card) => observer.observe(card));

    // Cleanup observer on component unmount
    return () => {
      cardRefs.current
        .filter((card) => card !== null)
        .forEach((card) => observer.unobserve(card));
    };
  }, []);
  function handlePyment(name,price) {
    if (name != "Basic") {
      window.location.href = `/payment?plan=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;

    }
  }

  return (
    <div className="text-white py-16 px-4 ">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto  flex flex-col items-center space-y-4 ">
        <div className="px-4 backdrop-blur-3xl py-2 space-x-3 border-[1.5px] border-[#FFFFFF0D] rounded-full flex items-center bg-[#FFFFFF05]">
          <div className="w-3 h-3 bg-[#0FAE96] rounded-full"></div>
          <div className="text-[#0FAE96] text-sm">Pricing</div>
        </div>
        <h2 className="text-3xl font-semibold">
          The perfect plan for your job hunt
        </h2>
        <p className="text-lg text-gray-300">
          Choose the plan that best supports your job search and unlock more
          powerful features.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`p-6 rounded-2xl shadow-md relative border-[1px]  backdrop-blur-3xl transition-all duration-500 ease-in-out transform ${isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                } ${plan.bestSeller
                  ? "border-[#0FAE96] bg-gradient-to-bl from-[#0fae965a]  via-[#11011E] to-[#11011E] "
                  : "border-[#ffffff17] "
                }`}
            >
              {/* Best Seller Badge */}
              <div className=" flex justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.bestSeller && (
                  <div className=" bg-[#0FAE96] text-xs text-white px-2 py-1 rounded-full">
                    Best seller
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <button
                className={`mt-6 px-4 py-2 rounded-xl ${plan.buttonStyle} w-full`}
                onClick={() => handlePyment(plan.name, plan.price)}
              >
                {plan.buttonText}
              </button>
              <ul className="mt-6 space-y-2 text-gray-300 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-4 h-4 mr-2 bg-[#0FAE96] rounded-full inline-block" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
