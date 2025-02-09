/** @format */
"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion for animations

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index:number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How does Jobform Automator work?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "Can I customize the information that gets filled in?",
      answer:
        "Yes, you can customize the information using advanced settings available in the Automator dashboard.",
    },
    {
      question: "Is there a cost to use Jobform Automator?",
      answer:
        "There are both free and premium plans available depending on your needs.",
    },
    {
      question:
        "When can I expect to get hired using Jobform Automator?",
      answer:
        "The timeline depends on the job market and the positions you're applying for, but the tool significantly streamlines your application process.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-20 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-semibold mb-3">
          Your questions answered
        </h2>
        <p className="text-[#B6B6B6] text-lg mb-8">
          Explore our FAQ section to learn more.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`border-b border-gray-600 pb-4 ${activeIndex === index ? "pb-6" : "pb-4"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-lg font-semibold hover:text-gray-300 transition-all duration-500 ease-in-out"
            >
              {faq.question}
              <span
                className={`ml-2 transform transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {activeIndex === index && (
                <p className="mt-4 text-gray-400 text-sm">{faq.answer}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
