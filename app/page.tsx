"use client";
import CompaniesSection from '@/components/home/CompaniesSection';
import FAQSection from '@/components/home/FAQSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ResumeATSChecker from '@/components/home/ResumeATSChecker';
import Navbar from "@/components/Navbar";

export default function Mainpage() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CompaniesSection />
      <HowItWorks />
      <ResumeATSChecker />
      <FAQSection />
  
    </>
  );
}