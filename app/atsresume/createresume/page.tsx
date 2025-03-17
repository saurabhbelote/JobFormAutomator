"use client";
import React, { useRef, useEffect } from "react";
import LeftSidebar from "@/components/left/LeftSidebar";
import Celibi from "@/components/resume_templates/Celibi";
//import Glallie from "@/components/resume_templates/glalie"
//import Leafish from "@/components/resume_templates/leafish"
import Bonzor from "@/components/resume_templates/bonzor"
//import Pikachu from "@/components/resume_templates/pikachu"
import Rightsidebar from '@/components/right/Rightsidebar';
import { useReactToPrint } from "react-to-print";
import { ref, getDatabase, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import app from "@/firebase/config";


const CreateResume: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  const auth = getAuth();
  const uid = auth.currentUser ? auth.currentUser.uid : null;
  const db = getDatabase(app);
  console.log(uid, "uid");
  const datapath = ref(db, "user/" + uid + "/" + "resume_data/" + "newData/");
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const snapshot = await get(datapath);
        if (snapshot.exists()) {
          console.log("Retrieved Data:", snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error retrieving data:", error);
      }
    };

    fetchDataAsync();
  });
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <LeftSidebar />
      </div>
      <div
        ref={contentRef}
        className="w-[800px] h-screen p-4 overflow-y-auto scrollbar-hidden"
      >
      <div ref={contentRef} className="resume-container w-full max-w-[800px] mx-auto p-4">
        <Bonzor />
      </div>
      </div>
      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <Rightsidebar />
      </div>
      <button className="w-4 h-4" onClick={() => reactToPrintFn()}>
        print
      </button>
    </div>
  );
};

export default CreateResume;
