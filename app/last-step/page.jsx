"use client"
import React, { useState } from 'react';
import Image from 'next/image';
export default function LastStep() {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const newFiles = [...files, ...selectedFiles];
    setFiles(newFiles);

    // Generate previews
    const previewUrls = newFiles.map((file) => {
      if (file.type.includes("image")) {
        return URL.createObjectURL(file); // Image preview
      }
      if (file.type === "application/pdf") {
        return "/icons/pdf-icon.png"; // Placeholder icon for PDFs
      }
      return null;
    });
    setPreviews(previewUrls);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setPreviews(updatedPreviews);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] bg-[#11011E] px-4">
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-40">
        {/* Left Illustration */}
        <div className="hidden md:block md:w-1/3">
          <img
            src="images/lastStepAvtar.png"
            alt="Illustration"
            className=" max-w-sm mx-auto"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-6 rounded-lg text-xs shadow-lg bg-[#FFFFFF05] border-[1px]">
          <h2 className="text-2xl font-semibold text-white mb-6">Last Step</h2>
          <form className="space-y-4">
            {/* Current CTC */}
            <div>
              <label className="block font-medium text-gray-400 mb-1">
                Current CTC in your local currency?
              </label>
              <input
                type="text"
                placeholder="Current CTC"
                className="border-[1px] bg-transparent w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-btn-green"
              />
            </div>

            {/* Expected CTC */}
            <div>
              <label className="block font-medium text-gray-400 mb-1">
                Expected CTC in your local currency?
              </label>
              <input
                type="text"
                placeholder="Expected CTC"
                className="border-[1px] bg-transparent w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-btn-green"
              />
            </div>

            {/* Notice Period */}
            <div>
              <label className="block font-medium text-gray-400 mb-1">
                What is your notice period in days?
              </label>
              <input
                type="text"
                placeholder="Notice period"
                className="border-[1px] bg-transparent w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-btn-green"
              />
            </div>

            {/* Preferred Location */}
            <div>
              <label className="block font-medium text-gray-400 mb-1">
                Your preferred location in the job?
              </label>
              <input
                type="text"
                placeholder="Preferred location"
                className="border-[1px] bg-transparent w-full px-3 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-btn-green"
              />
            </div>

            {/* Upload Resume */}
            <div className="border border-dashed border-gray-400 rounded-md p-4 text-center text-gray-400 cursor-pointer hover:bg-gray-800">
              <input
                type="file"
                accept=".pdf, .png, .jpg, .jpeg"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <img src="images/file.png" alt="Upload Resume" className="w-10 h-10 mx-auto mb-2" />
              <label htmlFor="fileInput" className="cursor-pointer text-sm text-white">
              Upload Resume
              </label>

            </div>

            {/* Preview Section */}
            {previews.length > 0 && (
              <div className="mt-4">
                <h3 className="text-gray-400 mb-2">Uploaded Files:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {previews.map((preview, index) => (
                    <div
                      key={index}
                      className="w-full border rounded-md overflow-hidden bg-gray-900 relative"
                    >
                      {/* Show preview */}
                      {preview.endsWith(".png") || preview.endsWith(".jpg") || preview.endsWith(".jpeg") ? (
                        <img src={preview} alt="Uploaded File" className="w-full h-24 object-cover" />
                      ) : (
                        <img src={preview} alt="PDF Icon" className="w-full h-24 object-contain" />
                      )}

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveFile(index)}
                        className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 py-0.5 rounded"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-btn-green text-white rounded-md font-medium text-base bg-primary hover:bg-teal-400"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
