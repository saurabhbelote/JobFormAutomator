"use client";

import React, { useState, useEffect, useRef } from "react";
import { ref, getDatabase, update } from "firebase/database";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { pdfjs } from "react-pdf";
import { toast } from "react-toastify";
import {
  uploadBytes,
  getDownloadURL,
  ref as storageRef,
} from "firebase/storage";
import { storage } from "@/firebase/config";
import app from "@/firebase/config";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.js`;

const Resume: React.FC = () => {
  const [pdf, setPdf] = useState<File | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string>("");
  const [Currentctc, setCurrentctc] = useState<string>("");
  const [Expectedctc, setExpectedctc] = useState<string>("");
  const [NoticePeriod, setNoticePeriod] = useState<string>("");
  const [Resume, setResume] = useState<string>("");
  const [pdfText, setPdfText] = useState<string>("");
  const [Location, setLocation] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [pdfName, setPdfName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const auth = getAuth();
  const db = getDatabase(app);

  // Ensure the user is authenticated before proceeding
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User signed in:", currentUser); // Debugging user data
      } else {
        setUser(null);
        toast.error("You need to be signed in to upload your resume.");
        window.location.href = "/sign-in"
      }
    });

    return () => unsubscribe();
  }, []);

  console.log("User before uploading resume:", user);

  useEffect(() => {
    if (downloadUrl && pdfText && submitButtonRef.current) {
      submitButtonRef.current.click();
    }
  }, [downloadUrl, pdfText]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Please upload a valid PDF file.");
      return;
    }

    setIsLoading(true);
    setPdfName(file.name);
    setPdf(file);

    const pdfStorageRef = storageRef(storage, `Resume/${file.name}`);

    try {
      await uploadBytes(pdfStorageRef, file);
      const url = await getDownloadURL(pdfStorageRef);
      setDownloadUrl(url);

      const reader = new FileReader();
      reader.onload = async (e) => {
        if (!e.target?.result) return;

        const typedarray = new Uint8Array(e.target.result as ArrayBuffer);
        const pdfDocument = await pdfjs.getDocument(typedarray).promise;
        let fullText = "";

        for (let i = 1; i <= pdfDocument.numPages; i++) {
          const page = await pdfDocument.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item) => (item as { str: string }).str) //possibility of error
            .join(" ");
          fullText += pageText + "\n";
        }

        setPdfText(fullText);
        setResume(file.name);
        setIsLoading(false);
        setIsLoading(false);
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("Failed to upload the file. Please try again.");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("User before submitting:", user); // Debugging user data before submission
    function notifyExtensionOnResumeSubmit(urdData:any) {
      const event = new CustomEvent('resumeUpdated', {
        detail: {
          urd : urdData,
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
      toast.warning(
        "Your Resume is still being processed. Please wait a moment and try again."
      );
      return;
    }
    if (!user) {
      toast.error("User is not authenticated. Please sign in again.");
      return;
    }

    const uid = user.uid;
    const userRef = ref(db, `user/${uid}`);
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

      toast.success("Document updtate successfully!");
      
      localStorage.setItem("SubscriptionType", "FreeTrialStarted");

      notifyExtensionOnResumeSubmit(urdData)

      const getSubscription = ref(db, `user/${uid}/Payment`);
      await update(getSubscription, { SubscriptionType: "FreeTrialStarted" });

      window.location.href = "/home";
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting."
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6 px-4">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          <p className="ml-4 text-white text-lg">
            Processing your resume... Please wait.
          </p>
        </div>
      )}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Last Step
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Start Auto-applying now!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Current CTC"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setCurrentctc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Expected CTC"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setExpectedctc(e.target.value)}
          />
          <input
            type="text"
            placeholder="Notice Period"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setNoticePeriod(e.target.value)}
          />
          <input
            type="text"
            placeholder="Preferred Locations"
            className="w-full p-3 border rounded-lg"
            required
            onChange={(e) => setLocation(e.target.value)}
          />
          <label
            htmlFor="file-upload"
            className="block w-full text-center p-3 border rounded-lg cursor-pointer bg-blue-500 text-white"
          >
            Upload Resume
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileUpload}
          />
          <p className="text-center text-gray-700">
            {pdfName || "No file selected"}
          </p>
          <button
            ref={submitButtonRef}
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
            disabled={isLoading}
          >
            Submit
          </button>
          {/* need to be removed */}
          <p>Selected File: {Resume}</p>
          {pdf && (
            <iframe
              src={URL.createObjectURL(pdf)}
              width="100%"
              height="500px"
              title="PDF Viewer"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Resume;
