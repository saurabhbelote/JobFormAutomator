'use client';
import React, { useState } from "react";
import { auth } from "@/firebase/config";
import app from "@/firebase/config";
import { toast } from "react-toastify";
import { getDatabase, ref, update } from "firebase/database";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useRouter } from "next/navigation";

const Gemini: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [geminiKey, setGeminiKey] = useState<string>("");
  const db = getDatabase(app);
  const router = useRouter()

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = "Write a story about an AI and magic";
    
    try {
      const result = await model.generateContent(prompt);
      const response = result.response;

      console.log(response)

      if (response) {
        toast.success("API Key Submitted Successfully");
        localStorage.setItem("api_key", geminiKey);
        
        function notifyExtensionOnGeminiKey(key) {
          const event = new CustomEvent('geminiKeySubmitted', { detail: { key } });
          document.dispatchEvent(event);
      }

      notifyExtensionOnGeminiKey(geminiKey);


        // document.dispatchEvent(
        //   new CustomEvent("geminiKeySubmitted", { detail: { key: geminiKey } })
        // );

        const userRef = ref(db, `user/${auth.currentUser?.uid}`);
        await update(userRef, { API: { apikey: geminiKey } });

        const currentDate = new Date().toISOString().replace("T", " ").split(".")[0];

        try {
          const newPaymentRef = ref(db, "user/" + auth.currentUser.uid);
          await update(newPaymentRef, {
              Payment: {
                  Status: "Free",
                  Start_Date: currentDate,
                  SubscriptionType: "GetResume",
              },
          });
          // console.log("Payment details updated successfully");
      } catch (err) {
          console.error(err);
      }

        // await update(userRef, {
        //   Payment: {
        //     Status: "Free",
        //     Start_Date: currentDate,
        //     SubscriptionType: "GetResume",
        //   },
        // });

        // window.location.href = `/privacy`;
        router.push('/resume2')
      } else {
        toast.error("Invalid API key");
      }
    } catch (error) {
      toast.error("Invalid API key!");
      console.error(error);
      return;
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

export default Gemini;
