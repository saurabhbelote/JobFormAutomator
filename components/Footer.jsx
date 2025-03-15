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
      ref={footerRef}
      className={`text-gray-300 py-12 sm:py-16 transition-all duration-700 ease-in-out 
      bg-gradient-to-b from-[#11011E] to-[#1A0435] border-t border-gray-800/30 
      ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col items-start space-y-6">
            <Image 
              src="/images/Logo.png" 
              alt="Logo" 
              width={45} 
              height={45} 
              className="hover:opacity-80 transition-opacity filter drop-shadow-lg" 
            />
            <div className="flex flex-wrap gap-5">
              {['instagram', 'facebook', 'twitter', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={`Follow us on ${social}`}
                  className="text-gray-400 hover:text-white transform hover:scale-110 
                  transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                >
                  {social === 'instagram' && <FaInstagram size={22} />}
                  {social === 'facebook' && <FaFacebook size={22} />}
                  {social === 'twitter' && <FaTwitter size={22} />}
                  {social === 'youtube' && <FaYoutube size={22} />}
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-400 font-light">
              © 2024 JobFormAutomator. <span className="hidden sm:inline">All rights reserved.</span>
            </p>
          </div>

          {/* Navigation Sections */}
          {['Quick Links', 'Features', 'Help'].map((section, index) => (
            <div key={section} className="flex flex-col space-y-4">
              <h3 className="text-lg font-bold text-white relative inline-flex items-center group">
                {section}
                <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500/80 
                group-hover:w-full transition-all duration-300"></span>
              </h3>
              <ul className="space-y-3 mt-2">
                {section === 'Quick Links' && [
                  { name: 'Home', path: '/' },
                  { name: 'Pricing', path: '/pricing' },
                  { name: 'My Profile', path: '/auth' }
                ].map((item) => (
                  <FooterLink key={item.name} href={item.path} text={item.name} />
                ))}
                {section === 'Features' && [
                  { name: 'My Forms', path: '/loop-form' },
                  { name: 'Templates', path: '/atsresume' },
                  { name: 'Applications', path: '/atsresume' }
                ].map((item) => (
                  <FooterLink key={item.name} href={item.path} text={item.name} />
                ))}
                {section === 'Help' && [
                  { name: 'Help Center', path: '/about' },
                  { name: 'Settings', path: '/settings' }
                ].map((item) => (
                  <FooterLink key={item.name} href={item.path} text={item.name} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Add a new FooterLink component for consistent link styling
const FooterLink = ({ href, text }) => (
  <li>
    <Link 
      href={href}
      className="text-gray-400 hover:text-white transition-all duration-200 flex items-center group
      hover:translate-x-1 relative overflow-hidden"
    >
      <span className="absolute left-0 w-full h-[1px] bg-purple-500/30 -translate-x-full 
      group-hover:translate-x-0 transition-transform duration-300"></span>
      <span className="opacity-0 group-hover:opacity-100 mr-2 transition-opacity">›</span>
      {text}
    </Link>
  </li>
);

export default Footer;
