"use client";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { toast } from "react-toastify";

const EmailAuth = function () {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get("success");
    const error = urlParams.get("error");

    setTimeout(() => {
      if (success) {
        console.log("success");
        toast.success("Authorization successful! You can now send emails.");
        setTimeout(() => {
          window.location.href = "/loop-form";
        }, 2000);
      } else if (error) {
        console.log("error");
        toast.error("Authentication failed. Please try again.");
      }
    }, 100); // Small delay to ensure UI update
  }, []);

  const handleGoogleLogin = () => {
    setIsLoading(true);
    window.location.href = "http://localhost:3001/auth/google"; // OAuth redirect
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          Sign in to continue
        </h2>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300 active:scale-95"
          disabled={isLoading}
        >
          {isLoading ? (
            "Signing in..."
          ) : (
            <>
              <FcGoogle size={24} />
              Sign in with Google
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default EmailAuth;