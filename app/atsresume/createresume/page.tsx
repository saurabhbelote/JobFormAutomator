"use client";
import React, { useRef } from "react";
import LeftSidebar from "@/components/left/LeftSidebar";
import Celibi from "@/components/resume_templates/Celibi";
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
  const userRef = ref(db, "user/" + uid + "resume_data" + "newData");
  get(userRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log("Retrieved Data:", snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error("Error retrieving data:", error);
    });
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-3/12 h-screen overflow-y-auto scrollbar-hidden">
        <LeftSidebar />
      </div>
      <div
        ref={contentRef}
        className="w-[714px] h-screen p-4 overflow-y-auto scrollbar-hidden"
      >
        <Celibi />
      </div>
      <button className="w-4 h-4" onClick={() => reactToPrintFn()}>
        print
      </button>
    </div>
  );
};

export default CreateResume;
