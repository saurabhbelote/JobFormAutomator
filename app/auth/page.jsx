/** @format */

"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

// Firebase Configuration (Replace with your Firebase project config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
//const googleProvider = new GoogleAuthProvider();

export default function AuthPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  //   return () => unsubscribe();
  // }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url =
      isLogin ?
        "https://jsonplaceholder.typicode.com/posts" // Replace with real login API
      : "https://jsonplaceholder.typicode.com/posts"; // Replace with real signup API

    try {
      const response = await axios.post(url, formData);
      alert(`Success: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleGoogleAuth = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google User:", result.user);
      alert(`Logged in as ${result.user.displayName}`);
    } catch (error) {
      console.error("Google Auth Error:", error);
    }
  };

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  const authText = {
    title: isLogin ? "Sign In" : "Create Account",
    buttonText: isLogin ? "Sign In" : "Create Account",
    toggleText: isLogin ? "Don't have an account?" : "Already have an account?",
    toggleButtonText: isLogin ? "Sign Up" : "Sign In",
    googleButtonText: isLogin ? "Sign in with Google" : "Sign up with Google",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] p-4">
      <div className="border-[1px] border-white text-white rounded-lg p-8 w-full max-w-md shadow-lg animate-fadeIn">
        {user ?
          <div className="text-center">
            <h2 className="text-xl font-semibold">
              Welcome, {user.displayName}
            </h2>
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-16 h-16 mx-auto rounded-full mt-4"
            />
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-500 px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        : <>
            <h1 className="text-2xl font-semibold mb-6 text-center animate-slideDown">
              {authText.title}
            </h1>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {!isLogin && (
                <div className="relative animate-slideRight">
                  <label className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-teal-500 transition duration-300"
                    placeholder="Your Name"
                  />
                </div>
              )}
              <div className="relative animate-slideLeft">
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-teal-500 transition duration-300"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="relative animate-slideRight">
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:ring-teal-500 transition duration-300"
                  placeholder="********"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-teal-500 rounded-md text-white font-semibold">
                {authText.buttonText}
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm">Or continue with</p>
              <button
                onClick={handleGoogleAuth}
                className="w-full mt-3 py-3 px-4 bg-gray-50 rounded-xl text-black font-semibold flex items-center justify-center gap-2">
                <Image
                  src="/images/google.png"
                  alt="Google"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                {authText.googleButtonText}
              </button>
            </div>

            <p className="text-center text-sm mt-6">
              {authText.toggleText}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-teal-400 hover:underline transition duration-300">
                {authText.toggleButtonText}
              </button>
            </p>
          </>
        }
      </div>
    </div>
  );
}
