"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaBriefcase, FaBuilding, FaEnvelope, FaSpinner } from "react-icons/fa";


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
  const jobTitle  = "backend developer"

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    setError("");

    // Updated prompt for markdown output
    const prompt = `
List **eight** job openings for the position of **"${jobTitle}"** with the following details:
- **Job Title**: "${jobTitle}" (Required)
- **Company Name** (Required)
- **Location** (Required)
- **Email** (Required, if unavailable, use company HR email)
- **Salary Range** (Required)
- **Job Description** (Required)

💡 Ensure every job listing **contains an email**. If the recruiter email is unavailable, use the official company contact email. **Do NOT omit emails.**

Return **ONLY the formatted job listings**, no extra text.
  `;


    try {
      const result = await axios.post(
        "https://api.perplexity.ai/chat/completions",
        {
          model: "sonar-reasoning",
          messages: [
            {
              role: "system",
              content:
                "You are a specialized job search assistant focusing on software development roles.",
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
    



      let responseContent = result.data.choices[0]?.message?.content || "";
      console.log("Raw API Response:", responseContent);

      // Remove markdown code fences if present
      responseContent = responseContent.replace(/```(json)?/g, "").trim();
      console.log("Cleaned API Response:", responseContent);

      let parsedJobs: JobListing[] = [];
      const trimmed = responseContent.trim();

      // Only attempt JSON parsing if the response starts with "{" or "["
      if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
        try {
          parsedJobs = JSON.parse(responseContent);
        } catch (jsonError) {
          console.error("JSON parse failed, using markdown parser:", jsonError);
          parsedJobs = parseJobListings(responseContent);
        }
      } else {
        parsedJobs = parseJobListings(responseContent);
      }
      console.log("Parsed Jobs:", parsedJobs);

      if (parsedJobs.length === 0) {
        setError("No jobs were found in the API response. Please check the API output or prompt.");
      } else {
        setJobListings(parsedJobs);
      }
    } catch (err) {
      console.error("Error fetching job listings:", err);
      setError("Failed to fetch job listings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const parseJobListings = (content: string): JobListing[] => {
    const jobBlocks = content.split(/\d+\.\s\*\*/).slice(1); // Split jobs based on numbering
  
    return jobBlocks.map((block) => {
      const job: JobListing = {
        title: "", 
        company: "",
        email: "",
        description: "",
        location: "",
        salary: "",
      };
  
      const lines = block.split("\n").map((line) => line.trim());
  
      lines.forEach((line) => {
        if (/\*\*Company\*\*:/.test(line)) {
          job.company = line.replace(/\*\*Company\*\*:\s*/, "").trim();
        } else if (/\*\*Location\*\*:/.test(line)) {
          job.location = line.replace(/\*\*Location\*\*:\s*/, "").trim();
        } else if (/\*\*Email\*\*:/.test(line)) {
          job.email = line.replace(/\*\*Email\*\*:\s*/, "").trim();
        } else if (/\*\*Salary Range\*\*:/.test(line)) {
          job.salary = line.replace(/\*\*Salary Range\*\*:\s*/, "").trim();
        } else if (/\*\*Job Description\*\*:/.test(line)) {
          job.description = line.replace(/\*\*Job Description\*\*:\s*/, "").trim();
        }
      });
  
      return job;
    });
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
              <h2 className="text-xl font-semibold text-white mb-2">
                {job.title}
              </h2>
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
                  <div className="text-gray-400">📍 {job.location}</div>
                )}
                {job.salary && (
                  <div className="text-green-400">💰 {job.salary}</div>
                )}
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  {job.description}
                </p>
                <button
                  onClick={() =>
                  (window.location.href = `mailto:${job.email}?subject=Application for ${encodeURIComponent(
                    job.title
                  )}`)
                  }
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
