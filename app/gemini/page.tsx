"use client";
import React, { useState,useEffect } from "react";
import { auth } from "@/firebase/config";
import app from "@/firebase/config";
import { toast } from "react-toastify";
import { getDatabase, ref, update } from "firebase/database";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

const GeminiPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [geminiKey, setGeminiKey] = useState<string>("");
  const db = getDatabase(app);
  const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          console.log("User signed in:", currentUser); // Debugging user 
        } else {
          toast.error("You need to be signed in to upload your gemini kay!");
          window.location.href = "/sign-in"
        }
      });
  
      return () => unsubscribe();
    }, []);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!auth.currentUser) {
      toast.error("User not authenticated!");
      setLoading(false);
      return;
    }

    const userId = auth.currentUser.uid;
    const userRef = ref(db, `user/${userId}`);
    const paymentRef = ref(db, `user/${userId}/Payment`);

    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a story about an AI and magic";

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;

      if (response) {
        toast.success("API Key Submitted Successfully");
        localStorage.setItem("api_key", geminiKey);

        function notifyExtensionOnGeminiKey(key: string): void {
          const event = new CustomEvent<{ key: string }>("geminiKeySubmitted", { detail: { key } });
          document.dispatchEvent(event);
        }
        notifyExtensionOnGeminiKey(geminiKey);

        const currentDate = new Date().toISOString().replace("T", " ").split(".")[0];

        await Promise.all([
          update(userRef, { API: { apikey: geminiKey } }).catch((err) =>
            console.error("Error updating API key:", err)
          ),
          update(paymentRef, {
            Status: "Free",
            Start_Date: currentDate,
            SubscriptionType: "GetResume",
          }).catch((err) => console.error("Error updating payment details:", err)),
        ]);

        router.push("/resume2");
      }
    } catch (error) {
      toast.error("Invalid API key!");
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-purple-400">Enter Free Gemini Key</h1>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <div className="mb-4">
          <iframe
            className="w-full rounded-md"
            height="250"
            src="https://www.youtube.com/embed/5VbhMJKTbak?si=7N-YplG58Z6EXs4R"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <form onSubmit={submitHandler} className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Gemini Key"
            required
            className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setGeminiKey(e.target.value)}
            disabled={loading}
          />
          <a
            href="https://aistudio.google.com/app/apikey"
            target="_blank"
            className="block text-purple-400 hover:underline text-center"
          >
            Get Gemini Key
          </a>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-md font-bold transition-all"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GeminiPage;
