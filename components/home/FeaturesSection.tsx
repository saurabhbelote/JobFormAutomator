/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: "/images/Bag.png",
      title: "One-Click Autofill",
      description:
        "No more repetitive typing. Upload your resume once, and we handle the rest.",
    },
    {
      icon: "/images/globle.png",
      title: "Multiple Platforms",
      description:
        "Our extension supports all major platforms, including LinkedIn, Indeed, and more.",
    },
    {
      icon: "/images/shield.png",
      title: "Secure & Private",
      description:
        "Your personal information is encrypted and never shared—ensuring complete privacy.",
    },
    {
      icon: "/images/bolt.png",
      title: "10x Job Offers",
      description:
        "Increase your chances of getting noticed by filling out forms faster than others.",
    },
  ];

  const featureRefs = useRef<(HTMLDivElement | null)[]>([]); // Reference for feature cards
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

    // Observe only non-null elements
    featureRefs.current
      .filter((card) => card !== null) // Filter valid elements
      .forEach((card) => observer.observe(card));

    // Cleanup observer on component unmount
    return () => {
      featureRefs.current
        .filter((card) => card !== null) // Filter valid elements
        .forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="text-white py-16 px-4">
      <div className="max-w-6xl space-y-4 mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="px-4 py-2 space-x-3 border-[1px] border-[#FFFFFF0D] rounded-full flex items-center bg-[#FFFFFF05]">
          <div className="w-3 h-3 bg-[#0FAE96] rounded-full"></div>
          <div className="text-[#0FAE96] text-sm">Features</div>
        </div>
        <h2 className="text-3xl font-semibold text-center">
          Why Settle For Slow? Supercharge Your Job Hunt
        </h2>
        <p className="text-lg mt-4 text-gray-300 text-center">
          Transform tedious job applications into a breeze with our instant autofill technology.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => {
                featureRefs.current[index] = el;
              }} // Assign DOM element
              className={`bg-[#FFFFFF05] border-[1px] border-[#ffffff17] backdrop-blur-3xl p-6 rounded-lg transition-all duration-500 ease-in-out transform ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-20 h-20 bg-[#2C223B] rounded-full mb-4">
                <Image
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                  width={36}
                  height={36}
                />
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
