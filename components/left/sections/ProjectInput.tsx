"use client";
import { useState } from "react";
import { FaTimes, FaTag } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { useProjectStore } from "@/app/store";
export default function ProjectInput() {
  const [isOpen, setIsOpen] = useState(false);
  const { projects, addProject } = useProjectStore();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    website: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject(
      formData.name,
      formData.description,
      formData.website,
      formData.date,
    );
    setFormData({ name: "", date: "", website: "", description: "" }); // Reset form after submission
  };

  return (
    <section className="p-6 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BiBook className="text-xl" />
          <h2 className="text-xl font-bold">Projects</h2>
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
      {projects.length > 0 && (
        <div>
          {projects.map((project) => (
            <div key={project.id}>
              <span>{project.name}</span>
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
                <h2 className="text-lg font-semibold">Create a new item</h2>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Form */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="date"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.date}
                  placeholder="Date"
                  onChange={handleChange}
                />
              </div>

              {/* Website Field */}
              <div className="mb-4 relative">
                <input
                  type="url"
                  name="website"
                  placeholder="Website"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.website}
                  onChange={handleChange}
                />
                <FaTag className="absolute right-3 top-3 text-gray-400" />
              </div>

              {/* Summary Editor (Basic Textarea for now) */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  className="w-full p-3 bg-black border rounded-md min-h-[150px]"
                  placeholder="mention the points comma separated..."
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-white text-black rounded-md"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
