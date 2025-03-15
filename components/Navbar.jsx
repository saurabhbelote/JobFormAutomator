/** @format */
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "@/firebase/config";
const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const checkCurrentUser = () => {
    const currentUser = auth.currentUser;
    console.log("Current User:", currentUser);
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
            className={`${
              isActive(item.path) ? "text-primary" : "hover:text-[#0FAE96]"
            } transition duration-200 transform hover:scale-105`}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#0FAE96] focus:outline-none">
          {/* Hamburger Icon */}
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-16 left-0 bg-background w-full py-4 px-6 shadow-lg transform transition-all duration-300 ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}>
        <ul className="space-y-4">
          {[
            { label: "Home", path: "/" },
            { label: "Pricing", path: "/pricing" },
            { label: "About", path: "/about" },
            { label: "Policy", path: "/policy" },
            { label: "ATS Resume", path: "/ats-resume" },
            { label: "Login / Sign Up", path: "/auth" },
          ].map((item) => (
            <li
              key={item.path}
              className={`${
                isActive(item.path) ? "text-primary" : "hover:text-[#0FAE96]"
              } transition duration-200 transform hover:scale-105`}>
              <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="hidden sm:flex items-center space-x-4">
        <button className="text-sm sm:text-base hover:text-primary transform transition duration-200 hover:scale-105" onClick={checkCurrentUser}>
          User
        </button>
        <Link href="/sign-in">
          <button className="text-sm sm:text-base hover:text-primary transform transition duration-200 hover:scale-105">
            Login
          </button>
        </Link >
        <Link href= "sign-up">
        <button className="bg-primary text-black px-4 py-2 rounded-md hover:bg-[#0FAE96CC] transform transition duration-200 hover:scale-105 text-sm sm:text-base">
          Sign Up
        </button>        
        </Link>
      </div>
  </nav>
  );
};

export default Navbar;
