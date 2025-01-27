/** @format */
"use client";

import { useEffect, useRef, useState } from "react";

const ResumeATSChecker = () => {
  const elementRef = useRef(null); // Ref to track the component
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Set up Intersection Observer to detect when the element is in view
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

    if (elementRef.current) {
      observer.observe(elementRef.current); // Observe the element
    }

    // Cleanup observer on component unmount
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef} // Assign the ref to the component
      className={`flex flex-col sm:flex-row justify-between items-center bg-[#11011E] text-white border-[1px] border-[#ffffff20] rounded-lg px-6 sm:px-8 py-8 sm:py-10 mx-4 sm:mx-20 space-y-6 sm:space-y-0 transition-all duration-700 ease-in-out ${
        isInView
          ? "transform translate-y-0 opacity-100"
          : "transform translate-y-10 opacity-0"
      }`}
      style={{ transition: "transform 0.7s, opacity 0.7s" }}
    >
      {/* Text Section */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold">
          Is your resume ATS-Friendly?
        </h3>
        <p className="text-sm sm:text-lg text-gray-400 mt-2 sm:mt-4 w-full sm:w-[70vh]">
          Use our free ATS resume score checker to ensure your resume stands
          out to employers.
        </p>
      </div>

      {/* Button Section */}
      <div className="text-center sm:text-right">
        <button className="bg-[#0FAE96] text-black px-6 py-2 rounded-md hover:bg-[#0FAE96CC] transition">
          Get free scan
        </button>
      </div>
    </div>
  );
};

export default ResumeATSChecker;
