import React from 'react';

const AtsScorePage: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">Your Score</h1>
        <p className="text-5xl font-bold text-center my-4">60/100</p>
        <p className="text-lg text-center text-gray-600">23 Issues</p>
      </div>

      {/* ATS Parse Rate Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">ATS PARSE RATE</h2>
        <p className="mt-2 text-gray-700">
          An Applicant Tracking System commonly referred to as ATS is a system used by employers and recruiters to quickly scan a large number of job applications.
        </p>
        <p className="mt-2 text-gray-700">
          A high parse rate of your resume ensures that the ATS can read your resume, experience, and skills. This increases the chance of getting your resume seen by recruiters.
        </p>
      </div>

      {/* Quantifying Impact Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Quantifying Impact</h2>
        <p className="mt-2 text-gray-700">
          Any good resume will show the impact you've had in previous positions you've held. Quantifying your impact on your resume is the key to building a strong application that will get recruiters to pick up the phone and invite you to an interview.
        </p>
        <p className="mt-4 text-red-500 font-semibold">Oh, no! Your experience section lacks quantifiable achievements from previous positions you've held.</p>
      </div>

      {/* Repetition Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Repetition</h2>
        <p className="mt-2 text-gray-700">
          Using the same words over and over again in your resume can be perceived as a sign of poor language understanding. Instead, use synonyms and active verbs that increase the impact of your achievements.
        </p>
        <p className="mt-4 text-green-500 font-semibold">Good job! No frequently repeated words found in your resume.</p>
      </div>

      {/* Spelling & Grammar Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Spelling & Grammar</h2>
        <p className="mt-2 text-gray-700">
          Having an error-free resume is key to making a good first impression on the hiring manager. Ensure that your resume is free from spelling and grammatical errors by reading it aloud a few times.
        </p>
        <p className="mt-4 text-red-500 font-semibold">We found the following spelling mistakes in your resume:</p>
      </div>

      {/* Format & Brevity Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Format & Brevity</h2>
        <p className="mt-2 text-gray-700">
          When you're uploading your resume in platforms like Indeed, you're likely to meet a file size limit. Ideally, your resume should be less than 2MB in size. Anything larger will most likely not be accepted on majority of platforms.
        </p>
        <p className="mt-4 text-green-500 font-semibold">Good job! Your resume file is 52 KB and your file type is PDF.</p>
      </div>

      {/* Resume Length Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Resume Length</h2>
        <p className="mt-2 text-gray-700">
          The length of your resume should be based on the relevant experience you have for a job, the number of years of experience, and the job you're applying for.
        </p>
        <p className="mt-4 text-red-500 font-semibold">Oh, no! Your resume is too short. The ideal resume size is between 400 and 800 words, anything below 400 is considered too short.</p>
      </div>

      {/* Style Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Style</h2>
        <p className="mt-2 text-gray-700">
          The design of your resume is crucial. Well-designed resume templates give you the opportunity to communicate information in different ways - graphs, bullets, achievements, and more.
        </p>
        <p className="mt-4 text-red-500 font-semibold">Oh, no! Your resume is using a generic layout and has little chance of standing out.</p>
      </div>

      {/* Email Address Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Email Address</h2>
        <p className="mt-4 text-green-500 font-semibold">Good job! Your email address seems professional.</p>
      </div>

      {/* Active Voice Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Active Voice</h2>
        <p className="mt-4 text-green-500 font-semibold">Good job! You're using active voice in your experience section.</p>
      </div>

      {/* Buzzwords & Cliches Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Buzzwords & Cliches</h2>
        <p className="mt-4 text-red-500 font-semibold">Oh, no! We've found some bullets containing buzzwords and cliches in your resume.</p>
      </div>

      {/* Contact Information Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <p className="mt-4 text-red-500 font-semibold">Although, you are missing essential contact information: LinkedIn</p>
      </div>

      {/* Essential Sections Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Essential Sections</h2>
        <p className="mt-2 text-gray-700">We've found the following essential sections in your resume:</p>
      </div>

      {/* Personality Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Personality</h2>
        <p className="mt-4 text-red-500 font-semibold">We couldn't find any personality sections in your resume.</p>
      </div>

      {/* Hard Skills Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Hard Skills</h2>
        <p className="mt-2 text-gray-700">We've found the following hard skills in your resume:</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>algorithms</li>
          <li>artificial intelligence</li>
          <li>chrome</li>
          <li>computer vision</li>
          <li>css</li>
          <li>django</li>
          <li>docker</li>
          <li>excel</li>
          <li>html</li>
          <li>javascript</li>
          <li>keras</li>
          <li>machine learning</li>
          <li>numpy</li>
          <li>pandas</li>
          <li>python</li>
          <li>pytorch</li>
          <li>rest</li>
          <li>scikit-learn</li>
          <li>selenium</li>
          <li>tensorflow</li>
        </ul>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Soft Skills</h2>
        <p className="mt-2 text-gray-700">We've found the following soft skills in your resume:</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>innovation</li>
        </ul>
      </div>
    </div>
  );
};

export default AtsScorePage;