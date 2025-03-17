<<<<<<< HEAD
"use client";
import { useAchievementStore } from "@/app/store";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

export default function AchievementInput() {
  const {achievements, addAchievement} = useAchievementStore();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAchievement(
      formData.name,
      formData.details,
    );
    setFormData({ name: "", details: "",  }); // Reset form after submission
  };
  return (
    <section className="p-6 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <GiAchievement className="text-xl" />
          <h2 className="text-xl font-bold">Awards</h2>
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
      {achievements.length > 0 && (
        <div>
          {achievements.map((achievement) => (
            <div key={achievement.id}>
              <span>{achievement.name}</span>
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
                <h2 className="text-lg font-semibold">Add Achievements</h2>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes size={18} />
                </button>
              </div>

              {/* Form */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Title"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="details"
                  placeholder="Add description"
                  className="w-full p-2 bg-black border rounded-md"
                  value={formData.details}
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
  );
}
=======


export default function AchievementInput() {
    return (
        <div id="eduForm-awards" className="mb-2">
        
        <div className="my-2 flex flex-col">
          <input
            type="text"
            placeholder="Name of the achievement"
            className="rounded-md w-72 h-8 mb-2"
          />
          <input
            type="text"
            placeholder="Awarding Organisation"
            className="rounded-md w-72 h-8 mb-2"
          />
          <span className="text-white">Date</span>
          <input
            type="date"
            name="startDate"
            placeholder="Date"
            className="rounded-md w-72 h-8 mb-2"
          />
        </div>
      </div>
    );
}
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
