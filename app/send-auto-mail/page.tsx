"use client";
import { useState, useEffect, useRef } from "react";
import { FaBriefcase } from 'react-icons/fa';
import CompanyCard from '@/components/companies/CompanyCard';
import { toast } from "react-toastify";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app, { auth } from "@/firebase/config";
import { getDatabase, ref, set, get } from "firebase/database";

const Page = () => {
  const [isSending, setIsSending] = useState(true);
  const [isSent, setIsSent] = useState(false);
  const [emailArray, setEmailArray] = useState<string[]>([]);
  const [companies, setCompanies] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState("")
  const hasRun = useRef(false);
  const auth = getAuth()
  const db = getDatabase(app)


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user?.email)
      } else {
        toast.error("No user loged-in!")
        window.location.href = "./sign-in"
      }
    });


  })

  useEffect(() => {
    const DB_email = userEmail.replace(/\./g, ",")

    const userRef = ref(db, "users/" + DB_email);
    get(userRef).then(async (snapshot) => {

      if (!snapshot.exists()) {
        window.location.href = "/email_auth"
      }
    })


    const fetchCompany = async () => {
      try {
        const response = await fetch("http://localhost:3002/job_search", {
          method: "POST",
          body: JSON.stringify({
            jobTitle: "node js",
            location: "remote",
            experience: "2-5",
            geminiKey: "AIzaSyCWrDQ8yQCWHk66jFLqh0D8cOWfht52pjU"
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const responseData = await response.json();
        const jobData = responseData.data;

        console.log("Job search successful!", responseData, jobData);

        setCompanies(jobData);

        const emails = jobData.map((company: any) => company.recruiter_email);
        setEmailArray(emails);
        console.log("Recruiter Emails:", emails);
      } catch (err) {
        console.error("Error fetching companies:", err.message);
      }
    };

    fetchCompany();
  }, [userEmail]);

  useEffect(() => {
    if (emailArray.length === 0 || hasRun.current) return; // Prevent double execution

    hasRun.current = true; // Mark as executed

    const sendEmails = async () => {
      try {
        for (const email of emailArray) {
          let response = await fetch("http://localhost:3001/send-job-application", {
            method: "POST",
            body: JSON.stringify({
              sender_email: "suman85bera@gmail.com",
              company_email: "saurabhbelote112@gmail.com",  // Dynamically use recruiter email
              resume_link: "https://firebasestorage.googleapis.com/v0/b/jobform-automator-website.appspot.com/o/Resume%2FResume_suman.pdf?alt=media&token=6384e8a7-bdfb-4522-a95d-e1f73099768c",
              sender_name: "Suman Bera",
              text: "hello"
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          console.log(`Email sent to ${email}`);

          // Wait for 5 seconds before sending the next email
          if (response.ok) {
            const data = await response.json();
            toast.success(data.message);
          } else {
            const data = await response.json();
            console.error("Error from server:", data.error);

            if (response.status === 401) {
              // Redirect to EmailAuth component (or your authentication route)
              toast.error("Authentication is required. Redirecting to sign-in.");
              setTimeout(() => {
                window.location.href = "/email_auth"; // Adjust route as needed
              }, 2000); // Give the user a moment to see the toast
            } else {
              toast.error(`Error: ${data.error}`); // Display other errors
            }
            await new Promise((resolve) => setTimeout(resolve, 5000));
          }
        }
        setIsSending(false);
        setIsSent(true);
      } catch (err) {
        console.error("Error sending emails:", err.message);
      }
    };

    sendEmails();
  }, [emailArray]);



  return (
    <div className="min-h-screen py-12">
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
