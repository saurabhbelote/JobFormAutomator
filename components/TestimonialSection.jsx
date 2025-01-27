/** @format */
"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Arun Kumar",
      role: "Software Testing Engineer",
      feedback:
        '"The Job From Automator is a very useful extension tool for filling the job application, offering significant time savings in the India Job Market"',
      image: "/images/avatar.png", // Replace with actual image path
    },
  ];

  return (
    <div className="text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Trusted by Job Seekers Everywhere
        </h2>
        <p className="text-sm sm:text-lg mt-4 text-gray-300">
          See how we&apos;re streamlining the job search process and saving time
          for users like you.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {Array(4)
            .fill(testimonials[0])
            .map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-[#FFFFFF05] border-[1px] border-[#FFFFFF17] p-4 sm:p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 text-left">
                  <div>
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name}'s picture`}
                      width={160}
                      height={160}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-lg font-medium">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm sm:text-xl text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-left text-sm sm:text-base text-[#B6B6B6]">
                  {testimonial.feedback}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
