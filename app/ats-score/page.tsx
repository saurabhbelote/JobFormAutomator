// pages/index.tsx
"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1533] text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl px-4 py-8 flex flex-col items-center">
        {/* Main heading */}
        <h1 className="text-3xl font-bold mb-2 text-center">Get your resume score now!</h1>
        <p className="mb-8 text-center">
          Upload your resume and you'll get a personalized email with an actionable tasklist.
        </p>

        {/* Upload box */}
        <div 
          className={`w-full max-w-md bg-[#2D2A3F] p-8 rounded-lg mb-8 ${
            isDragging ? 'border-2 border-dashed border-purple-400' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Upload icon */}
            <div className="mb-4 opacity-70">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 3L7 8M12 3L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 15V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            {/* Upload button */}
            <button 
              onClick={() => document.getElementById('file-upload')?.click()}
              className="bg-[#16D5BF] hover:bg-[#13BBA8] text-white font-medium py-2 px-4 rounded transition duration-300 mb-6"
            >
              Upload Your Resume
            </button>
            
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
            
            {/* Upload instructions */}
            <p className="text-center text-sm text-gray-300 mb-4">
              Drag your resume here or choose a file.<br />
              PDF & DOCX only. Max 2MB file size.
            </p>
            
            {/* Display file name if selected */}
            {file && (
              <div className="bg-[#3D3A50] rounded px-3 py-1 text-sm mb-4">
                {file.name}
              </div>
            )}
            
            {/* Privacy button */}
            <div className="mt-2">
              <button className="inline-flex items-center justify-center bg-gray-600 bg-opacity-50 rounded-md px-4 py-1 text-sm hover:bg-opacity-70 transition duration-200">
                Privacy guaranteed
              </button>
            </div>
          </div>
        </div>

        {/* Company logos section */}
        <div className="text-center text-sm text-gray-400 mb-4">
          Loved by interviewees at
        </div>

        <div className="flex flex-wrap justify-center gap-6 items-center">
          {/* Company logos placeholder - in a real implementation these would be proper images */}
          <div className="text-gray-300 opacity-80">Google</div>
          <div className="text-gray-300 opacity-80">TESLA</div>
          <div className="text-gray-300 opacity-80">facebook</div>
          <div className="text-gray-300 opacity-80">Spotify</div>
          <div className="text-gray-300 opacity-80">amazon</div>
        </div>
      </div>
    </div>
  );
}