"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBriefcase, FaBuilding, FaEnvelope, FaSpinner } from 'react-icons/fa';

interface JobListing {
  title: string;
  company: string;
  email: string;
  description: string;
  location?: string;
  salary?: string;
}

const Page = () => {
  const [jobListings, setJobListings] = useState<JobListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    const prompt = `
      List 8 job openings for software developers with the following details for each:
      - Job Title (focus on JavaScript, React, Node.js roles)
      - Company Name
      - Location (mix of remote and on-site)
      - Recruiter Email
      - Salary Range (in USD)
      - Brief Job Description (50 words)
      
      Format as structured data with clear sections.
      Include modern tech stack requirements and company benefits.
    `;

    try {
      const result = await axios.post(
        "https://api.perplexity.ai/chat/completions",
        {
          model: "llama-3.1-sonar-large-128k-online",
          messages: [
            { 
              role: "system", 
              content: "You are a specialized job search assistant focusing on software development roles." 
            },
            { role: "user", content: prompt },
          ],
        },
        {
          headers: {
            Authorization: `Bearer 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`,
            "Content-Type": "application/json",
          },
        }
      );

      const responseContent = result.data.choices[0]?.message?.content || "";
      const parsedJobs = parseJobListings(responseContent);
      setJobListings(parsedJobs);
    } catch (err) {
      console.error("Error fetching job listings:", err);
      setError("Failed to fetch job listings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const parseJobListings = (content: string): JobListing[] => {
    try {
      const sections = content.split(/(?=Job Title:|Position:)/i);
      return sections
        .filter(section => section.trim())
        .map(section => ({
          title: section.match(/(?:Job Title|Position):\s*([^\n]+)/i)?.[1] || "",
          company: section.match(/Company(?:\sName)?:\s*([^\n]+)/i)?.[1] || "",
          location: section.match(/Location:\s*([^\n]+)/i)?.[1] || "",
          salary: section.match(/Salary(?:\sRange)?:\s*([^\n]+)/i)?.[1] || "",
          email: section.match(/(?:Recruiter\s)?Email:\s*([^\n]+)/i)?.[1] || "",
          description: section.match(/Description:\s*([^\n]+(?:\n[^\n]+)*)/i)?.[1]?.trim() || ""
        }));
    } catch (err) {
      console.error("Error parsing job listings:", err);
      return [];
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-500 mx-auto mb-4" />
          <div className="text-white text-xl">Loading job opportunities...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaBriefcase className="text-blue-500" />
            Latest Job Openings
          </h1>
          <button
            onClick={fetchJobs}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2"
          >
            <FaBriefcase />
            Refresh Listings
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg mb-6 text-red-100">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobListings.map((job: JobListing, index: number) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-all"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{job.title}</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-300">
                  <FaBuilding className="text-blue-500" />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <FaEnvelope className="text-blue-500" />
                  <a
                    href={`mailto:${job.email}`}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    {job.email}
                  </a>
                </div>
                {job.location && (
                  <div className="text-gray-400">
                    📍 {job.location}
                  </div>
                )}
                {job.salary && (
                  <div className="text-green-400">
                    💰 {job.salary}
                  </div>
                )}
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  {job.description}
                </p>
                <button
                  onClick={() => window.location.href = `mailto:${job.email}?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
