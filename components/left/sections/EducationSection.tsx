"use client";
import React, { useState, ChangeEvent } from "react";
import { useEducationStore } from "@/app/store";

export default function EducationSection() {
  const { addEducation, updateEducation } = useEducationStore();
  const [eduForm, setEduForm] = useState({
    name: "",
    details: "",
    startDate: "",
    endDate: "",
    cgpa: "",
  });
  const [editEdId, setEditEdId] = useState<string | null>(null);

  const handleEdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEduForm((prevEduForm) => ({ ...prevEduForm, [name]: value }));
  };

  const handleEdSubmit = () => {
    const { name, details, startDate, endDate, cgpa } = eduForm;
    if (editEdId) {
      updateEducation(editEdId, name, details, startDate, endDate, cgpa);
      setEditEdId(null);
    } else {
      addEducation(name, details, startDate, endDate, cgpa);
    }
    setEduForm({ name: "", details: "", startDate: "", endDate: "", cgpa: "" });
  };

  return (
    <div className="mb-2">
      <div className="my-2">Education</div>
      <hr />
      <input
        type="text"
        name="name"
        placeholder="Institution Name"
        value={eduForm.name}
        onChange={handleEdChange}
      />
      <input
        type="text"
        name="details"
        placeholder="Details"
        value={eduForm.details}
        onChange={handleEdChange}
      />
      <input
        type="date"
        name="startDate"
        placeholder="Start Date"
        value={eduForm.startDate}
        onChange={handleEdChange}
      />
      <input
        type="date"
        name="endDate"
        placeholder="End Date"
        value={eduForm.endDate}
        onChange={handleEdChange}
      />
      <input
        type="text"
        name="cgpa"
        placeholder="CGPA"
        value={eduForm.cgpa}
        onChange={handleEdChange}
      />
      <button onClick={handleEdSubmit}>
        {editEdId ? "Update Education" : "Add Education"}
      </button>
    </div>
  );
}
