/** @format */
"use client";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] py-16 pt-24 px-6 md:px-16 lg:px-20 text-white text-center">
      {/* Star Rating */}
      <div className="text-sm text-white font-light mb-4 flex justify-center items-center animate-fadeIn">
        <span className="bg-[#FFFFFF05] border-[1px] border-[#ffffff17] px-3 py-1 rounded-full flex items-center">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Image
                key={index}
                src="/images/star.png"
                alt="Star"
                className="w-3 h-3 mr-1"
                width={10}
                height={10}
              />
            ))}
          <span>5 star rated</span>
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight animate-slideInUp">
        Apply 10x faster, <br />
        Get 3x more interviews <br />
        with automation
      </h1>

      {/* Subheading */}
      <p className="text-[#B6B6B6] text-lg lg:text-lg mb-8 animate-fadeIn">
        Our AI Job search tool automatically applies to all the jobs on
        platforms like LinkedIn, <br />
        Indeed, and Monster Job using AI bots.
      </p>

      {/* CTA Button */}
      <div className="flex justify-center mb-8">
        <button className="bg-primary hover:bg-teal-400 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition ">
          Get started - Try it for free
        </button>
      </div>

      {/* Footer Avatars and Text */}
      <div className="flex justify-center items-center space-x-4 animate-fadeIn">
        {/* Avatars */}
        <div className="flex -space-x-4 mb-2">
          {["Img1.png", "Img2.png", "Img3.png", "Img4.png"].map(
            (img, index) => (
              <Image
                key={index}
                src={`/images/${img}`}
                alt={`Avatar ${index + 1}`}
                className="w-10 h-10 rounded-full border border-gray-700"
                width={10}
                height={10}
              />
            )
          )}
        </div>

        {/* Text */}
        <p className="text-gray-300 text-sm w-44">
          and <span className="text-teal-400">150+</span> jobseekers using
          Jobform Automator
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
