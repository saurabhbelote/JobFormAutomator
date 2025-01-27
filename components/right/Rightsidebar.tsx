// components/RightSidebar.tsx

"use client";

import React, { useState } from 'react';

const RightSidebar: React.FC = () => {
  const [selectedFont, setSelectedFont] = useState<string>('Open Sans');

  const fonts = [
    'Arial', 'Cambria', 'Garamond', 'IBM Plex Sans', 'IBM Plex Serif',
    'Lato', 'Lora', 'Merriweather', 'Open Sans', 'Playfair Display', 
    'PT Sans', 'PT Serif', 'Roboto Condensed', 'Times New Roman',
  ];

  return (
    <div className="p-6 w-80 bg-gray-100 border-l border-gray-300 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Typography</h2>

      {/* Font Buttons */}
      <div className="grid grid-cols-2 gap-2">
        {fonts.map((font) => (
          <button
            key={font}
            onClick={() => setSelectedFont(font)}
            className={`text-sm  p-2 border rounded-md 
            ${selectedFont === font ? 'border-black font-bold' : 'border-gray-300'}`}
            style={{ fontFamily: font }}
          >
            {font}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Font Family</h3>
        <select
          value={selectedFont}
          onChange={(e) => setSelectedFont(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          {fonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
      </div>


      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Font Subset</h3>
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option value="latin">Latin</option>
          <option value="cyrillic">Cyrillic</option>
          <option value="greek">Greek</option>
        </select>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Font Variants</h3>
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option value="regular">Regular</option>
          <option value="bold">Bold</option>
          <option value="italic">Italic</option>
        </select>
      </div>
    </div>
  );
};

export default RightSidebar;
