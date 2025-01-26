"use client";
import React, { useState } from "react";
import { useProjectStore } from "@/app/store";

export default function ProjectSection() {
  const { addProject, updateProject } = useProjectStore();
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editPjId, setEditPjId] = useState<string | null>(null);

  const handleProjectSubmit = () => {
    if (editPjId) {
      updateProject(editPjId, projectName, projectDetails);
      setEditPjId(null);
    } else {
      addProject(projectName, projectDetails);
    }
    setProjectName("");
    setProjectDetails("");
  };

  return (
    <div className="mb-2">
      <div className="my-2">Projects</div>
      <hr />
      <input
        type="text"
        placeholder="Project Name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <textarea
        placeholder="Project Details"
        value={projectDetails}
        onChange={(e) => setProjectDetails(e.target.value)}
      />
      <button onClick={handleProjectSubmit}>
        {editPjId ? "Update Project" : "Add Project"}
      </button>
    </div>
  );
}
