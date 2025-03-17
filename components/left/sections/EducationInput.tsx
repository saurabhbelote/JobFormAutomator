<<<<<<< HEAD
"use client";
import { useEducationStore } from "@/app/store";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export default function EducationInput() {
  const {educations, addEducation} = useEducationStore(); 
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    institute: "",
    areaofstudy: "",
    typeofstudy: "",
    dateRange: "",
    score: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEducation(
      formData.institute,
      formData.areaofstudy,
      formData.typeofstudy,
      formData.dateRange,
      formData.score,
    );
    setFormData({ institute: "", dateRange: "", areaofstudy: "", typeofstudy: "", score: "", location:"" }); // Reset form after submission
  };
  return (
    <section className="p-6 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GiGraduateCap className="text-xl" />
          <h2 className="text-xl font-bold">Education</h2>
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
      {educations.length > 0 && (
        <div>
          {educations.map((education) => (
            <div key={education.id}>
              <span>{education.institute}</span>
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
                <h2 className="text-lg font-semibold">Add Education</h2>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Form */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="institute" // Corrected to match formData key
                  placeholder="Institute"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.institute}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="typeofstudy" // Corrected to match formData key
                  placeholder="Type of Study"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.typeofstudy}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="areaofstudy" // Corrected to match formData key
                  placeholder="Area of Study"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.areaofstudy}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="score"
                  placeholder="Score"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.score}
                  onChange={handleChange}
                  step="0.01" // Allows decimal values
                />
                <input
                  type="text"
                  name="dateRange"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.dateRange}
                  placeholder="Date Range"
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
import React, { useState } from "react";

import { useEducationStore } from "@/app/store";
export default function EducationInput() {
  const { addEducation, updateEducation } = useEducationStore();
  const [eduForm, seteduForm] = useState({
    name: "",
    details: "",
    startDate: "",
    endDate: "",
    cgpa: "",
  });
  const [editEdId, setEditEdId] = useState<string | null>(null);
  const handleEdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    seteduForm((preveduForm) => ({ ...preveduForm, [name]: value }));
  };

  const handleEdSubmit = () => {
    const { name, details, startDate, endDate, cgpa } = eduForm;
    if (editEdId) {
      updateEducation(editEdId, name, details, startDate, endDate, cgpa);
      setEditEdId(null);
    } else {
      addEducation(name, details, startDate, endDate, cgpa);
    }
    seteduForm({ name: "", details: "", startDate: "", endDate: "", cgpa: "" });
  };
  return (
    <div className="mb-2">
      
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Institution Name"
          value={eduForm.name}
          onChange={handleEdChange}
          className="rounded-md w-72 h-8 mb-2"
        />
        <input
          type="text"
          name="details"
          placeholder="Details"
          value={eduForm.details}
          onChange={handleEdChange}
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">Start Date</span>
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={eduForm.startDate}
          onChange={handleEdChange}
          className="rounded-md w-72 h-8 mb-2"
        />
        <span className="text-white">End Date</span>
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={eduForm.endDate}
          onChange={handleEdChange}
          className="rounded-md w-72 h-8 mb-2"
        />
        <input
          type="text"
          name="cgpa"
          placeholder="CGPA"
          value={eduForm.cgpa}
          onChange={handleEdChange}
          className="rounded-md w-72 h-8 mb-2"
        />
      </div>
      <button onClick={handleEdSubmit}>
        {editEdId ? "Update Education" : "Add Education"}
      </button>
    </div>
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
  );
}
