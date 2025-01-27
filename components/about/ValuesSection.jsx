/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";

const ValuesSection = () => {
  const values = [
    {
      icon: "/images/clock.png",
      title: "Efficiency",
      description:
        "We prioritize time-saving automation to help users apply for jobs quickly and effortlessly, allowing them to focus on what truly matters.",
    },
    {
      icon: "/images/brain.png",
      title: "Innovation",
      description:
        "We constantly push the boundaries of AI technology to enhance our platform, ensuring it remains at the forefront of job application automation.",
    },
    {
      icon: "/images/userIcon.png",
      title: "User-Centricity",
      description:
        "Our users are at the heart of everything we do. We design our tool to be intuitive, reliable, and tailored to meet the diverse needs of job seekers worldwide.",
    },
    {
      icon: "/images/privacy.png",
      title: "Integrity",
      description:
        "We are committed to maintaining transparency, trust, and ethical practices in all our operations, ensuring that our users can rely on us for a fair and honest experience.",
    },
  ];

  const valueRefs = useRef([]);
  const [isInView, setIsInView] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          }
        });
      },
      { threshold: 0.1 } // Lower threshold for better mobile support
    );

    valueRefs.current
      .filter((card) => card !== null)
      .forEach((card) => observer.observe(card));

    return () => {
      valueRefs.current
        .filter((card) => card !== null)
        .forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 bg-[#11011E] text-white overflow-x-auto">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8 md:mb-12">
        Our Values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            ref={(el) => (valueRefs.current[index] = el)}
            className={`bg-[#1A1125] border-[1px] border-[#ffffff17] backdrop-blur-3xl p-6 md:p-8 rounded-lg shadow-lg transition-all duration-700 ease-in-out transform ${
              isInView[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-14 h-14 md:w-16 md:h-16 flex justify-center items-center bg-[#2C223B] rounded-full mb-4 md:mb-6">
              <img
                src={value.icon}
                alt={value.title}
                onError={(e) => (e.target.src = "/fallback-image.png")}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4">
              {value.title}
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
