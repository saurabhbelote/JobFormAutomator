<<<<<<< HEAD
"use client";
import { useState } from "react";
import { MdWork } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useExperienceStore } from "@/app/store";
export default function ExperienceInput() {
  const {experiences, addExperience} = useExperienceStore();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    dateRange: "",
    location: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExperience(
      formData.company,
      formData.position,
      formData.dateRange,
      formData.location,
      formData.description,
    );
    setFormData({ company: "", position: "", dateRange: "", location:"", description: "" }); // Reset form after submission
  };
  return (
    <section className="p-6 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <MdWork className="text-xl" />
          <h2 className="text-xl font-bold">Experience</h2>
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
      {experiences.length > 0 && (
        <div>
          {experiences.map((experience) => (
            <div key={experience.id}>
              <span>{experience.company}</span>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
      >
        + Add a new item
      </button>
      <div className="flex items-center justify-center">
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-[#141414] text-white p-6 rounded-lg w-[600px] shadow-lg">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add Experience</h2>
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
                  value={formData.company}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.position}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="dateRange"
                  placeholder="DD MM YYYY- Present"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.dateRange}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {/* Summary Editor (Basic Textarea for now) */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="summary"
                  className="w-full p-3 bg-black border rounded-md min-h-[150px]"
                  placeholder="Write your professional experience..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-white text-black rounded-md" onClick={handleSubmit}>
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
=======

export default function ExperienceInput() {
  return (
    <div id="eduForm-work" className="mb-2">
      <div className="my-2 flex flex-col">
        <input
          type="text"
          placeholder="Company Name"
          className="rounded-md w-72 h-8 mb-2"
        />
        <input
          type="text"
          placeholder="Role"
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">Start Date</span>
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">End Date</span>
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          className="rounded-md w-72 h-8 mb-2"
        />
        <textarea
          placeholder="mention details comma separated"
          className="rounded-md w-72 h-16 mb-2"
        />
      </div>
    </div>
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
  );
}
