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
  );
}
