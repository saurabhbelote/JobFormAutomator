"use client";
import React, { useRef } from "react";
import LeftSidebar from "@/components/left/LeftSidebar";
import Celibi from "@/components/resume_templates/Celibi";
import { useReactToPrint } from "react-to-print";

const CreateResume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <LeftSidebar />
      </div>
      <div ref={contentRef} className="w-[714px] h-screen p-4 overflow-y-auto scrollbar-hidden">
        <Celibi />
      </div>
      <button className="w-4 h-4" onClick={() => reactToPrintFn()}>print</button>
    </div>
  );
};

export default CreateResume;
