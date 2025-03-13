"use client";
import { useState, useEffect } from "react";
import { FaBriefcase, FaEnvelope, FaKey } from 'react-icons/fa';
import CompanyCard from '@/components/companies/CompanyCard';
import { companies } from '@/data/companies';

const Page = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    // Check for existing permission on mount
    const hasStoredPermission = localStorage.getItem('emailPermissionGranted') === 'true';
    setHasPermission(hasStoredPermission);
  }, []);

  const handleGrantPermission = () => {
    setHasPermission(true);
    localStorage.setItem('emailPermissionGranted', 'true');
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaBriefcase className="text-blue-500" />
            {!hasPermission ? 'Email Permission Required' : 
              isSending ? 'Sending Applications...' : 'Applications Status'}
          </h1>
        </div>

        {!hasPermission ? (
          <div className="max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-700">
            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaKey className="text-blue-500 text-3xl" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Grant Email Access
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              To automatically send applications to multiple companies, we need your permission.
              Your credentials will be handled securely and encrypted.
            </p>
            <button
              onClick={handleGrantPermission}
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
            >
              <FaEnvelope />
              <span>Grant Permission</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {companies.map((company, index) => (
              <CompanyCard
                key={index}
                {...company}
                isSending={isSending}
                isSent={isSent}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
