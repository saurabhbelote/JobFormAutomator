/** @format */

import { useState, useEffect, useRef } from "react";
import TemplateCard from "../ats-resume/TemplateCard";

const templates = [
  { name: "Efficient", imgSrc: "/images/resumeCard.png" },
  { name: "Minimal", imgSrc: "/images/resumeCard.png" },
  { name: "Clean", imgSrc: "/images/resumeCard.png" },
  { name: "Efficient", imgSrc: "/images/resumeCard.png" },
  { name: "Minimal", imgSrc: "/images/resumeCard.png" },
  { name: "Clean", imgSrc: "/images/resumeCard.png" },
  { name: "Efficient", imgSrc: "/images/resumeCard.png" },
  { name: "Minimal", imgSrc: "/images/resumeCard.png" },
  // Add more templates as needed
];

export default function Template() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const totalScroll = container.scrollWidth - container.clientWidth;
      const progressIndex = Math.round(
        (scrollLeft / totalScroll) * (templates.length - 1)
      );
      setActiveIndex(progressIndex);
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-white py-10 px-5 min-h-screen">
      <div className="text-center mx-auto flex flex-col items-center space-y-6">
        <div className="px-4 flex items-center backdrop-blur-3xl py-2 space-x-3 border-[1.5px] border-[#FFFFFF0D] rounded-full bg-[#FFFFFF05]">
          <div className="w-3 h-3 bg-[#0FAE96] rounded-full"></div>
          <div className="text-[#0FAE96] text-sm">How it works?</div>
        </div>
        <h1 className="text-4xl font-bold">Choose your Template</h1>
        <p className="text-gray-400 mt-2">
          Pick one you like and personalize it in our builder.
        </p>
      </div>

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        className="mt-10 flex space-x-6 overflow-x-auto hide-scrollbar px-4 ml-6 lg:ml-16"
        style={{ scrollSnapType: "x mandatory" }}>
        {templates.map((template, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              scrollSnapAlign: "start",
            }}
            className="w-full sm:w-full md:w-full lg:w-1/3"> {/* 100% on mobile and 1/3 on larger screens */}
            <TemplateCard name={template.name} imgSrc={template.imgSrc} />
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {templates.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-opacity duration-300 ${
              index === activeIndex ? "bg-[#0FAE96]" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
