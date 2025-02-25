/** @format */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/firebase/config";
import app from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase,ref,get } from "firebase/database";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(null);
  const [fullName, setFullName] = useState("");
  const db =getDatabase(app)

  useEffect(() => {
    // Track authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const fetchUserData = async () => {
      const loginStatus = localStorage.getItem("IsLogin");
      setIsLogin(loginStatus);

      const userId = localStorage.getItem("UID");
      if (userId) {
        const findUser = ref(db, `user/${userId}`);
        get(findUser).then((snapshot) => {
          let Name = snapshot.val()?.name;
          let fname = snapshot.val()?.fname;
          let lname = snapshot.val()?.lname;
          let user = "";
          console.log(fname,lname,"navbar")
          if (Name) {
            user = Name;
            const cleanedName = user.replace(/\s/g, "");
            setFullName(user);
          } else {
            user = fname + " " + lname;
            const cleanedName = user.replace(/\s/g, "");
            setFullName(user);
          }
        });
      }
    };

    fetchUserData();
  }, []);


  const isActive = (path) => pathname === path;
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleSettings = async () => {
    try {
      window.location.href = "/settings";
    } catch (error) {
      console.error("Error :", error);
    }
  };

  return (
    <nav className="bg-[#11011E] text-white py-4 px-6 sm:px-12 flex items-center justify-between z-50 fixed w-full shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-6 text-sm sm:text-base">
        {[
          { label: "Home", path: "/" },
          { label: "Pricing", path: "/pricing" },
          { label: "About", path: "/about" },
          { label: "Policy", path: "/policy" },
          { label: "ATS Resume", path: "/atsresume" },
        ].map((item) => (
          <li
            key={item.path}
            className={`${isActive(item.path) ? "text-primary" : "hover:text-[#0FAE96]"
              } transition duration-200 transform hover:scale-105`}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#0FAE96] focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? "rotate-90" : ""
              }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 bg-background w-full py-4 px-6 shadow-lg transform transition-all duration-300 ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          } origin-top`}>
        <ul className="space-y-4">
          {[
            { label: "Home", path: "/" },
            { label: "Pricing", path: "/pricing" },
            { label: "About", path: "/about" },
            { label: "Policy", path: "/policy" },
            { label: "ATS Resume", path: "/ats-resume" },
          ].map((item) => (
            <li
              key={item.path}
              className={`${isActive(item.path) ? "text-primary" : "hover:text-[#0FAE96]"
                } transition duration-200 transform hover:scale-105`}>
              <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          {!isLogin && (
            <li className="hover:text-[#0FAE96] transition duration-200 transform hover:scale-105">
              <Link href="/auth" onClick={() => setIsMenuOpen(false)}>Login / Sign Up</Link>
            </li>
          )}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="hidden sm:flex items-center space-x-4">
        {isLogin ? (
          <>
            <button className="text-sm sm:text-base text-primary transform transition duration-200 hover:scale-105">
              {fullName}
            </button>
            <button onClick={handleSettings} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transform transition duration-200 hover:scale-105 text-sm sm:text-base">
              Settings
            </button>
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <button className="text-sm sm:text-base hover:text-primary transform transition duration-200 hover:scale-105">
                Login
              </button>
            </Link>
            <Link href="/sign-up">
              <button className="bg-primary text-black px-4 py-2 rounded-md hover:bg-[#0FAE96CC] transform transition duration-200 hover:scale-105 text-sm sm:text-base">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
