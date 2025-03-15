"use client";
import { useState, useEffect } from "react";
import app from "@/firebase/config";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { toast } from "react-toastify";
import { ref, get, getDatabase } from "firebase/database";
import { pdfjs, Document, Page } from "react-pdf";
import { GoogleGenerativeAI } from "@google/generative-ai";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.js`;

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [pdfText, setPdfText] = useState("");
    const [ats, setAts] = useState(null);
    const [loading, setLoading] = useState(false)
    const [apiKey,setApiKey] = useState("")


    const db = getDatabase(app);
    const auth = getAuth();

    useEffect(() => {
        let api_key = localStorage.getItem("api_key")
        console.log(api_key)
        setApiKey(api_key)
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log("User signed in:", currentUser.uid);
            } else {
                setUser(null);
                console.log("No user signed in");
                toast.error("You need to be signed in to upload your resume.");
                window.location.href = "/sign-in";
            }
        });

  

        return () => unsubscribe();
    }, []);
    console.log(apiKey)

    const geminiClient = new GoogleGenerativeAI(apiKey);


    async function analyzeResumeForATS(resumeText:any) {
        const prompt = `
        Analyze the following resume text for *Applicant Tracking System (ATS) compatibility*.
    
        *Objectives:*
    
        1. *Provide an ATS Score (0-100):*
           * Evaluate overall ATS compatibility, considering keyword density, formatting quality, section completeness, and overall readability by an ATS.  Base the score on the specific content of the resume.
           * Score from 0 (very poor) to 100 (excellent). A resume with no job-related keywords, poor formatting, and missing sections should score very low.  A resume with many job-related keywords, excellent formatting, and all sections should score very high. Be nuanced in the scoring.
    
        2. *Detailed ATS Compatibility Evaluation:*
           * Assess *strengths and weaknesses* regarding ATS readability in the description.
           * Consider these key factors, assigning relative weights to each:
              * *Keyword Optimization (40%):* Relevance of job-related keywords, keyword density, and placement within the resume (e.g., skills section, job descriptions). Analyze if the resume uses synonyms and variations of keywords relevant to common job descriptions.
              * *Formatting & Structure (30%):* Proper use of headings, bullet points, font consistency, and overall visual structure that is conducive to ATS parsing. Penalize the use of tables, images, and unusual fonts.
              * *Readability (15%):*  Ease for an ATS to parse the text, considering sentence structure, use of jargon, and overall clarity. Shorter sentences and clearly defined terms are preferred.
              * *Section Organization (15%):* Clear separation of Experience, Skills, and Education. Evaluate the completeness and relevance of each section. Note any missing or incomplete sections.
    
        3. *Generate Actionable Suggestions for Improvement:*
           * Provide specific and actionable suggestions to enhance ATS compatibility.  Prioritize suggestions that will have the greatest impact on the ATS score.
           * Categorize suggestions into these areas:
              * *Keywords:* Identify missing keywords, suggest synonyms, and advise on keyword density.
              * *Formatting:* Recommend specific formatting changes for better ATS readability.  Address issues like font choices, bullet point styles, and the use of tables or images.
              * *Sections:* Suggest adding missing sections or reorganizing existing sections for clarity and completeness.
              * *Content Clarity:* Advise on simplifying language, avoiding jargon, and ensuring that all information is presented clearly.
    
        *Instructions for Output:*
    
        Respond *ONLY* with valid JSON enclosed in triple backticks (json ...). Do not include any text outside of the triple backticks.  Make sure the description of the ATS score is detailed, explaining WHY the resume received that score.
    
        The JSON should have the following structure:
    
        \ \ \json
        {
          "atsScore": {
            "score": NUMBER,
            "description": "STRING"
          },
          "suggestions": [
            {
              "category": "STRING",
              "suggestion": "STRING"
            }
          ]
        }
        \ \ \
    
        Resume Text:
        ${resumeText}
        `;
        try {
            const model = geminiClient.getGenerativeModel({ model: "gemini-2.0-flash" });
     // 🔹 Correct model initialization
            const response = await model.generateContent(prompt);  // 🔹 Correct method to call
            const textResponse = response.response.text();  // Extract text response
    
            // Extract JSON output enclosed in triple backticks
            const regex = /```json\s*([\s\S]*?)\s*```/;
            const match = textResponse.match(regex);
            if (!match) {
                return { message: "No valid JSON output found in Gemini API response." };
            }
    
            return JSON.parse(match[1]);  // Return parsed JSON
        } catch (error) {
            return { message: "Failed to process Gemini API response.", error: error.message };
        }
    }

    const handleGetExistingResume = async () => {
        console.log("Fetching existing resume...");

        if (!user) {
            console.warn("User not signed in! Cannot fetch resume.");
            toast.error("You need to be signed in to access your resume.");
            return;
        }

        const userId = user.uid;
        console.log("User ID:", userId);

        try {
            const userDocRef = ref(db, `user/${userId}/forms/keyvalues/URD`);
            const snapshot = await get(userDocRef);

            if (snapshot.exists()) {
                let resumeText = snapshot.val();
                console.log("Retrieved Resume Data:", resumeText);

                if (resumeText && resumeText.trim().length > 0) {
                    setPdfText(resumeText);
                } else {
                    console.warn("Fetched resume is empty.");
                }
            } else {
                console.log("No resume data found in database.");
            }
        } catch (error) {
            console.error("Error fetching resume:", error);
        }
    };

    useEffect(() => {
        if (pdfText && pdfText.trim().length > 0) {
            console.log("Sending text for ATS analysis:", pdfText);
            sendResumeForAnalysis(pdfText);
        } else {
            console.warn("Skipping ATS analysis: No valid resume text.");
        }
    }, [pdfText]);

    const sendResumeForAnalysis = async (resumeText: string) => {
        console.log("Preparing to send resume text:", resumeText);

        if (!resumeText || resumeText.trim().length === 0) {
            console.error("Error: Cannot send empty resume text.");
            return;
        }

        try {
            // const response = await fetch("http://localhost:3001/get_ats_score", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ resumeText: resumeText })  // Make sure backend expects "text"
            // });

            // const data = await response.json();
            // console.log("ATS Score Analysis Response:", data.atsScore?.score);


            let get_score = async function () {
                try {


                    const analysisResult = await analyzeResumeForATS(resumeText);
                    console.log(analysisResult.atsScore.score);
                } catch (error) {
                    toast.error(error.message)
                }
            };
            get_score()
        } catch (error) {
            console.error("Error analyzing resume:", error);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            console.log("File uploaded!");
            const uploadedFile = e.target.files[0];
            setFile(uploadedFile);

            const reader = new FileReader();
            reader.onload = async (event) => {
                if (!event.target?.result) return;

                try {
                    const typedarray = new Uint8Array(event.target.result as ArrayBuffer);
                    const pdfDocument = await pdfjs.getDocument({ data: typedarray }).promise;
                    let fullText = "";

                    for (let i = 1; i <= pdfDocument.numPages; i++) {
                        const page = await pdfDocument.getPage(i);
                        const textContent = await page.getTextContent();
                        const pageText = textContent.items
                            .map((item: any) => ("str" in item ? item.str : "")) // Type safety
                            .join(" ");
                        fullText += pageText + "\n";
                    }

                    setPdfText(fullText);
                } catch (error) {
                    console.error("Error reading PDF:", error);
                }
            };

            reader.readAsArrayBuffer(uploadedFile);
        }
        console.log(pdfText, "text")
    };



    return (
        <div className="min-h-screen bg-[#1A1533] text-white flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl px-4 py-8 flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-2 text-center">Get your resume score now!</h1>
                <p className="mb-8 text-center">
                    Upload your resume and you'll get a personalized email with an actionable tasklist.
                </p>

                <div
                    className={`w-full max-w-md bg-[#2D2A3F] p-8 rounded-lg mb-8 ${isDragging ? "border-2 border-dashed border-purple-400" : ""}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-4 opacity-70">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 15V3M12 3L7 8M12 3L17 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 15V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <button
                            onClick={() => document.getElementById("file-upload")?.click()}
                            className="bg-[#16D5BF] hover:bg-[#13BBA8] text-white font-medium py-2 px-4 rounded transition duration-300 mb-6"
                        >
                            Upload Your Resume
                        </button>

                        <input id="file-upload" type="file" accept=".pdf,.docx" onChange={handleFileChange} className="hidden" />

                        <p className="text-center text-sm text-gray-300 mb-4">
                            Drag your resume here or choose a file.<br />
                            PDF & DOCX only. Max 2MB file size.
                        </p>

                        {file && <div className="bg-[#3D3A50] rounded px-3 py-1 text-sm mb-4">{file.name}</div>}


                        <div className="mt-2">
                            <button
                                className="bg-[#16D5BF] hover:bg-[#13BBA8] text-white font-medium py-2 px-4 rounded transition duration-300 mb-6"
                                onClick={handleGetExistingResume}
                            >
                                Use Uploaded Resume
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-400 mb-4">Loved by interviewees at</div>
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    <div className="text-gray-300 opacity-80">Google</div>
                    <div className="text-gray-300 opacity-80">TESLA</div>
                    <div className="text-gray-300 opacity-80">Facebook</div>
                    <div className="text-gray-300 opacity-80">Spotify</div>
                    <div className="text-gray-300 opacity-80">Amazon</div>
                </div>
            </div>
        </div>
    );
}
