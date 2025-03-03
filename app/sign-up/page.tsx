"use client";

import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import app, { auth } from "@/firebase/config";
import { getDatabase, ref, set } from "firebase/database";
import { Auth } from "firebase/auth";
import axios from "axios";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [loading, setLoading] = useState(false);



  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();
    const displayName = `${fname} ${lname}`;

    try {
      console.log(fname, lname, email, password)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user)

      if (user) {
        await updateProfile(user, { displayName });
        await sendEmailVerification(user);

        const db = getDatabase(app);
        const newDocRef = ref(db, "user/" + user.uid);

        await set(newDocRef, { fname, lname, email, password }).then(() => {
          toast.success("Registered! Check email for verification.", { position: "top-center" });
        }).catch((err) => {
          toast.error(err.message)
        })
        await axios.post("http://localhost:3001/send-email", {
          email: email,
          name: fname + " " + lname || "User",
        }).then(() => {
        }).catch((err) => {
          toast.error(err.message)
        });


      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message, { position: "bottom-center" });
      } else {
        toast.error("An unknown error occurred", { position: "bottom-center" });
      }
    }
    finally {
      setLoading(false);
    }

  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
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
            disabled={loading}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setLname(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already registered? <a href="/sign-in" className="text-purple-600 hover:underline">Login</a>
        </p>
      </div>
    </main>
  );
}

export default Register;
