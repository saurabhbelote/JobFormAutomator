import React, { useState } from "react";
import { useAchievementStore } from "@/app/store";

function AchievementManager() {
  const { addAchievement, updateAchievement } = useAchievementStore();
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleSubmit = () => {
    if (editId) {
      updateAchievement(editId, name, details);
      setEditId(null);
    } else {
      addAchievement(name, details);
    }
    setName("");
    setDetails("");
  };

  return (
    <div>
      <h1>Achievement</h1>
      <input
        type="text"
        placeholder="Achievement Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Details"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId ? "Update Achievement" : "Add Achievement"}
      </button>
    </div>
  );
}

export default AchievementManager;
