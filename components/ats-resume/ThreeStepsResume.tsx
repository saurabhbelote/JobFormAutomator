import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ThreeStepsResume() {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description:
        "Pick a template and follow the prompts. Input your details, and the builder tailors your resume to the job.",
      icon: "/images/folder.png", // Path to the image for step 1
    },
    {
      id: 2,
      title: "Step 2",
      description:
        "Get customized text that fits your work story. The builder features professionally written content options to choose from.",
      icon: "/images/pen.png", // Path to the image for step 2
    },
    {
      id: 3,
      title: "Step 3",
      description:
        "Download and send to employers. Save and send it as a PDF, Word DOC, or any file format the employer requests.",
      icon: "/images/download.png", // Path to the image for step 3
    },
  ];

  const stepRefs = useRef([]); // Reference for steps
  const [isInView, setIsInView] = useState(false); // State to track visibility of steps

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Show step when in view
          } else {
            setIsInView(false); // Hide step when out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the step is in view
    );

    // Observe only non-null elements
    stepRefs.current
      .filter((step) => step !== null)
      .forEach((step) => observer.observe(step));

    return () => {
      stepRefs.current
        .filter((step) => step !== null)
        .forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="text-white py-16 px-6 lg:px-24">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
        {/* Section Title */}
        <div className="px-4 backdrop-blur-3xl py-2 space-x-3 border-[1.5px] border-[#FFFFFF0D] rounded-full flex items-center bg-[#FFFFFF05]">
          <div className="w-3 h-3 bg-[#0FAE96] rounded-full"></div>
          <div className="text-[#0FAE96] text-sm">How it works ?</div>
        </div>
        <h2 className="text-3xl font-bold">3 steps to a perfect resume</h2>
        <p className="text-gray-400">
          Follow these simple steps to build a standout resume that highlights
          your skills, experience, and achievements effortlessly.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)} // Assign DOM element
              className={`bg-[#FFFFFF05]  border-[#ffffff17] border-[1.5px] rounded-lg p-6 space-y-4 transition-all duration-500 ease-in-out transform ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Icon */}
              <div className="bg-[#2C223B] w-12 h-12 flex items-center justify-center rounded-full">
                <img
                  src={step.icon}
                  alt={`Icon for ${step.title}`}
                  className="w-6 h-6"
                />
              </div>
              {/* Title */}
              <h3 className="text-xl text-[#0FAE96]">{step.title}</h3>
              {/* Description */}
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="bg-[#0FAE96] hover:bg-[#228273] text-white py-3 px-6 rounded-lg font-semibold mt-8">
          Build your Resume
        </button>
      </div>
    </div>
  );
}
