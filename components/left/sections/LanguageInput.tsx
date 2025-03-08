"use client";
import { useState } from "react";
import { FaTimes, FaLanguage } from "react-icons/fa";
import { useLanguageStore } from "@/app/store";

export default function LanguageInput() {
  const fluency = ["native language", "proficient", "advanced", "intermediate", "conversational", "elementary"];
  
  // Zustand store usage

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    language:  "",
    option: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLanguage(
      formData.language,
      formData.option,
    );
    setFormData({ language: "", option: "" }); 
  };

  return (
    <section className="p-6 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FaLanguage className="text-xl" />
          <h2 className="text-xl font-bold">Languages</h2>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-md">
          <span className="sr-only">Toggle</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
      >
        + Add a new item
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-[#141414] text-white p-6 rounded-lg w-[600px] shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Create a new item</h2>
              <button onClick={() => setIsOpen(false)}>
                <FaTimes size={18} />
              </button>
            </div>

            {/* Form */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="w-full p-2 bg-black border rounded-md"
                value={formData.language}
                onChange={handleChange}
              />
              <div className="w-full p-2 bg-black border rounded-md">
                {fluency.map((fluent, index) => (
                  <div
                    key={index}
                    onClick={() => setFormData({ ...formData, option: fluent })}
                    className={`px-4 py-2 cursor-pointer ${
                      formData.option === fluent ? "bg-gray-300" : "hover:bg-gray-200"
                    }`}
                  >
                    {fluent}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end">
              <button onClick={handleSubmit} className="px-4 py-2 bg-white text-black rounded-md">
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
