/** @format */

"use client";
import { useState } from "react";
import StepOne from "@/components/Loop-Form/stepOne";
import StepTwo from "@/components/Loop-Form/stepTwo";
import StepThree from "@/components/Loop-Form/stepThree";
import EmailPermission from "@/components/permission/EmailPermission";

export default function StepperForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    experience: "",
    jobType: "",
    recruiterEmailTemplate: "Hello,I came across your job posted here: {{JOB_URL}} regarding an opportunity in {{JOB_LOCATION}}.I am interested in applying for the position of {{JOB_TITLE}} at {{COMPANY_NAME}}. After reading the job description and requirements and matching it with my own experiences, I know that it fits great with my profile. I have attached my resume for your consideration. Please take a moment to go through it to get a better picture of who I am. I would love to talk to you in more detail regarding this opportunity. Sincerely,{{USER_FIRSTNAME}} {{USER_LASTNAME}}w",
    phoneNumber: "",
    coverLetter: "The role is very appealing to me, and I believe that my experience and education make me a highly competitive candidate for this position. Please see my resume for additional information on my experience. Thank you for your time and consideration. I look forward to speaking with you about this employment opportunity.",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleEmailPermissionGranted = () => {
    // Auto advance to next step when permission is granted
    nextStep();
  };

  const TOTAL_STEPS = 4;
  const progressPercentage = ((step / TOTAL_STEPS) * 100).toFixed(0);

  return (
    <div className="bg-gradient-to-b from-[#11011E] via-[#35013e] to-[#11011E] min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full p-6 sm:p-10  shadow-2xl border border-[#ffffff17] rounded-2xl ">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-6">Step {step} of {TOTAL_STEPS}</h2>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        {step === 1 && <EmailPermission onPermissionGranted={handleEmailPermissionGranted} />}  
        {step === 2 && <StepOne formData={formData} handleChange={handleChange} />}
        {step === 3 && <StepTwo formData={formData} handleChange={handleChange} />}
        {step === 4 && <StepThree formData={formData} />}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button 
              onClick={prevStep} 
              className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all">
              Back
            </button>
          )}
          {step < TOTAL_STEPS && (
            <button 
              onClick={nextStep} 
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}