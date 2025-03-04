"use client";

import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import app from "@/firebase/config";
import { getDatabase, ref, set } from "firebase/database";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const auth = getAuth();
    const displayName = `${fname} ${lname}`;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user)
      
      if (user) {
        await updateProfile(user, { displayName });
        await sendEmailVerification(user);

        const db = getDatabase(app);
        const newDocRef = ref(db, "user/" + user.uid);
        await set(newDocRef, { fname, lname, email, password });

        toast.success("User Registered Successfully!!", { position: "top-center" });
        toast.success("Email Verification Link Sent Successfully: Please check your email!", { position: "top-center" });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "bottom-center" });
      } else {
        toast.error("An unknown error occurred", { position: "bottom-center" });
      }
    }
  };

  return ( 
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-black">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
        <p className="text-gray-600 mb-4">Achieve career success with Job Form Automator! Start auto-applying now!</p>
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setLname(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all"
          >
            Sign Up
          </button>
        </form>
        
        <p className="mt-4 text-gray-600">
          Already registered? <a href="/login" className="text-purple-600 hover:underline">Login</a>
        </p>
      </div>
    </main>
  );
}

export default Register;
