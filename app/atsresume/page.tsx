"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { ref, getDatabase, update } from "firebase/database";
import app from "@/firebase/config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Header from "@/components/createResume/Header";
export function ImportResumeModal({ onClose }: { onClose: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const auth = getAuth();
  const db = getDatabase(app);
  const uid = auth.currentUser ? auth.currentUser.uid : null;
  const userRef = ref(db, "user/" + uid);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await fetch("/api/resumeParser", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("File uploaded successfully!");
        const data = await response.json();
        const newData = data.parsedData;
        try {
          await update(userRef, {
            resume_data: {
              newData,
            },
          });
          toast.success("Document uploaded successfully!");
        } catch (err) {
          if (err instanceof Error) {
            toast.error(err.message || "An error occurred while submitting.");
          } else {
            toast.error("An error occurred while submitting.");
          }
        }
        console.log(data);
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            📥 Import an existing resume
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200"
          >
            ✖
          </button>
        </div>

        <p className="text-sm mb-4">Upload a file in pdf format</p>

        <label className="text-sm block mb-2">File</label>
        <input
          type="file"
          accept="pdf"
          className="w-full bg-gray-800 text-white p-2 border border-gray-700 rounded cursor-pointer"
          onChange={handleFileChange}
        />
        <button
          className="w-full bg-white text-black font-semibold p-2 rounded mt-4 hover:bg-gray-300"
          disabled={!file}
          onClick={handleUpload}
        >
          Validate
        </button>
      </div>
    </div>
  );
}
export default function AtsResume() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal && <ImportResumeModal onClose={() => setShowModal(false)} />}
      <Header />
      <div className="flex p-6 h-[100vh] gap-10 bg-gradient-to-b pt-5 from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] text-white">
        {/* Create new resume card */}
        <div
          onClick={() => router.push("atsresume/createresume")}
          className="bg-[#ffffff0f] border-[#ffffff17] w-[25%] h-[60%] border-[1.5px] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
        >
          <div className="aspect-w-8 aspect-h-11 bg-[#11011ea3] mb-4 py-20 px-10  rounded-lg">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold ">Create New Resume</h3>
          <p className="text-sm  mt-1">Create a new resume from scratch</p>
        </div>

        {/* Import existing resume card */}
        <div
          className="bg-[#ffffff0f] border-[#ffffff17] border-[1.5px] w-[25%] h-[60%] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <div className="aspect-w-8 aspect-h-11 bg-[#11011E] mb-4 py-20 px-10 rounded-lg">
            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    // Handle file import logic here
                    console.log("Imported file:", e.target.files[0]);
                  }
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </label>
          </div>
          <h3 className="text-lg font-semibold ">Import Existing Resume</h3>
          <p className="text-sm  mt-1">Upload an existing resume</p>
        </div>
      </div>
    </div>
  );
}
