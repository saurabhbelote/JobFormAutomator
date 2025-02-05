
"use client";
import Link from 'next/link'
import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const footerRef = useRef(null); // Ref for the footer
  const [isInView, setIsInView] = useState(false); // State to track visibility

  // Set up Intersection Observer to detect when the footer is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true); // Footer is in view
          } else {
            setIsInView(false); // Footer is out of view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the footer is in view
    );

    if (footerRef.current) {
      observer.observe(footerRef.current); // Observe the footer
    }

    // Cleanup observer on component unmount
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef} // Assign the ref to the footer
      className={`text-gray-400 py-10 transition-all duration-700 ease-in-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-10 md:px-0 lg:px-0 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-start space-y-8">
            <Image src="/images/Logo.png" alt="Logo" width={32} height={32} />
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                aria-label="Follow us on Instagram"
                className="hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Follow us on Facebook"
                className="hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Follow us on Twitter"
                className="hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Follow us on YouTube"
                className="hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
            <p className="mt-4 text-sm">© 2021 CoinMarketCap. All rights reserved.</p>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="/careers" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/policy" className="hover:text-white">
                  Policy
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white">
                  Legal & Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Applications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Buy Crypto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Institutional Services
                </a>
              </li>
            </ul>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  What is Cryptocurrency?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Crypto Basics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tips and Tutorials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Market Update
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
