/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const JobSeeker = () => {
  const sectionRef = useRef(null); // Ref for the section
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Set up Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Element is in view
          } else {
            setIsInView(false); // Element is out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Observe the section
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // Assign the ref to the section
      className={` h-[55vh] relative m-8 md:m-12 lg:m-16 py-16 md:py-20 px-4 md:px-16 lg:px-20 text-white border-[1.5px] border-[#ffffff17] rounded-xl overflow-hidden transition-all duration-700 ease-in-out ${
        isInView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 ">
        {/* Background image */}
        <Image
          className="absolute inset-0 object-cover object-center"
          src="/images/JobSeeker.png"
          alt="Background"
          fill
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center my-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
          We help job seekers succeed
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6">
          "Streamline your job hunt, save time, and land more interviews
          effortlessly."
        </p>
        <button className="px-4 md:px-6 lg:px-8 py-2 md:py-3 bg-[#0FAE96] text-white font-semibold rounded-lg hover:bg-emerald-400 transition duration-300">
          Sign Up for Free
        </button>
      </div>
    </section>
  );
};

export default JobSeeker;
