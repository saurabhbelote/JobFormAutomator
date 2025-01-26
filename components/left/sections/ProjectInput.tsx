import React, { useState } from "react";
import { useProjectStore } from "@/app/store";

export default function ProjectInput() {
  const { addProject, updateProject } = useProjectStore();
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [editPjId, setEditPjId] = useState<string | null>(null);
  // To Add Project Data to the State
  const handleChangeProject = () => {
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
    <div id="eduForm-projects" className="mb-2">
      
      <div className="my-2 flex flex-col">
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="rounded-md w-72 h-8 mb-2"
        />
        <textarea
          placeholder="Project Details"
          value={projectDetails}
          onChange={(e) => setProjectDetails(e.target.value)}
          className="rounded-md w-72 h-16 mb-2"
        />
      </div>
      <button onClick={handleChangeProject}>
        {editPjId ? "Update Project" : "Add Project"}
      </button>
    </div>
  );
}
