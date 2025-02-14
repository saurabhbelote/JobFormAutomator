"use client";

import React, { useState, useEffect, useRef } from "react";
import { ref, getDatabase, update } from "firebase/database";
import { getAuth } from "firebase/auth";
import { pdfjs } from "react-pdf";
import { toast } from "react-toastify";
import { uploadBytes, getDownloadURL, ref as storageRef } from "firebase/storage";
import { storage } from "@/firebase/config"; // Ensure storage and app are correctly initialized
import app from "@/firebase/config";


pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdfjs/pdf.worker.min.js`;

const Resume = function () {
  const [pdf, setPdf] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [Currentctc, setCurrentctc] = useState("");
  const [Expectedctc, setExpectedctc] = useState("");
  const [NoticePeriod, setNoticePeriod] = useState("");
  const [Resume, setResume] = useState("");
  const [pdfText, setPdfText] = useState("");
  const [Location, setLocation] = useState("");
  const [user, setUser] = useState(null);
  const [pdfName, setPdfName] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const submitButtonRef = useRef(null); // Ref for the submit button
  const auth = getAuth();
  const db = getDatabase(app);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [auth]);

  // Automatically click the submit button after loading completes
  useEffect(() => {
    if (downloadUrl && pdfText && submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }, [downloadUrl, pdfText]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setIsLoading(true); // Start loading
      setPdfName(file.name);
      setPdf(file);

      const pdfStorageRef = storageRef(storage, `Resume/${file.name}`);

      try {
        await uploadBytes(pdfStorageRef, file);
        console.log("File uploaded successfully!");

        const url = await getDownloadURL(pdfStorageRef);
        setDownloadUrl(url);
        console.log("Download URL:", url);

        const reader = new FileReader();
        reader.onload = async (e) => {
          const typedarray = new Uint8Array(e.target.result);
          const pdfDocument = await pdfjs.getDocument(typedarray).promise;
          let fullText = "";

          for (let i = 1; i <= pdfDocument.numPages; i++) {
            const page = await pdfDocument.getPage(i);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(" ");
            fullText += pageText + "\n";
          }
          setPdfText(fullText);
          setResume(file.name);
          setIsLoading(false); // Stop loading
        };
        reader.readAsArrayBuffer(file);
      } catch (error) {
        console.error("Error uploading file:", error);
        toast.error("Failed to upload the file. Please try again.");
        setIsLoading(false); // Stop loading on error
      }
    } else {
      toast.error("Please upload a valid PDF file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    function notifyExtensionOnResumeSubmit(urdData) {
      const event = new CustomEvent('resumeSubmitted', {
        detail: {
          urdData: urdData,
          subscriptionType: "FreeTrialStarted"
        }
      });
      document.dispatchEvent(event);
    }

    if (!pdfName) {
      toast.error("Please Provide Your Resume Before Submitting!");
      return;
    }

    if (!downloadUrl || !pdfText) {
      toast.warning("Your Resume is still being processed. Please wait a moment and try again.");
      return;
    }

    const uid = auth.currentUser.uid;
    const userRef = ref(db, "user/" + uid);

    const urdData = `${pdfText} currentCtc ${Currentctc}; ExpectedCtc ${Expectedctc}; NoticePeriod ${NoticePeriod}; Location ${Location}`;

    try {
      await update(userRef, {
        forms: {
          keyvalues: {
            RD: downloadUrl,
            URD: urdData,
          },
        },
      });
      toast.success("Document uploaded successfully!");
      console.log("Document uploaded successfully!");

      // Notify the extension
      notifyExtensionOnResumeSubmit(urdData)
 

      localStorage.setItem("SubscriptionType", "FreeTrialStarted");
      const getSubscription = ref(db, "user/" + user?.uid + "/Payment");
      await update(getSubscription, {
        SubscriptionType: "FreeTrialStarted",
      });

      window.location.href = "/home";
    } catch (err) {
      toast.error(err.message || "An error occurred while submitting.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          <p className="ml-4 text-white text-lg">Processing your resume... Please wait.</p>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Last Step</h1>
        <p className="text-center text-gray-600 mb-4">Start Auto-applying now!</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Current CTC" className="w-full p-3 border rounded-lg" required onChange={(e) => setCurrentctc(e.target.value)} />
          <input type="text" placeholder="Expected CTC" className="w-full p-3 border rounded-lg" required onChange={(e) => setExpectedctc(e.target.value)} />
          <input type="text" placeholder="Notice Period" className="w-full p-3 border rounded-lg" required onChange={(e) => setNoticePeriod(e.target.value)} />
          <input type="text" placeholder="Preferred Locations" className="w-full p-3 border rounded-lg" required onChange={(e) => setLocation(e.target.value)} />
          <label htmlFor="file-upload" className="block w-full text-center p-3 border rounded-lg cursor-pointer bg-blue-500 text-white">Upload Resume</label>
          <input id="file-upload" type="file" className="hidden" accept="application/pdf" onChange={handleFileUpload} />
          <p className="text-center text-gray-700">{pdfName || "No file selected"}</p>
          <button ref={submitButtonRef} type="submit" className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition" disabled={isLoading}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Resume;