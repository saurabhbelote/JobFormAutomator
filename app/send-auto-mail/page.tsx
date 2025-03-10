"use client";
import { useState, useEffect } from "react";
import { FaBriefcase } from 'react-icons/fa';
import CompanyCard from '@/components/companies/CompanyCard';
import { companies } from '@/data/companies';

const Page = () => {
  const [isSending, setIsSending] = useState(true);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    // Only simulate email sending
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaBriefcase className="text-blue-500" />
            {isSending ? 'Sending Applications...' : 'Applications Status'}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <CompanyCard
              key={index}
              {...company}
              isSending={isSending}
              isSent={isSent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
