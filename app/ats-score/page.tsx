"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import app from "@/firebase/config";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { toast } from "react-toastify";
import { ref, get, getDatabase } from "firebase/database";
import { pdfjs,Document,Page } from "react-pdf";

// const pdfjsLib = dynamic(() => import("/pdfjs/pdf.worker.min.js"), { ssr: false });

pdfjs.GlobalWorkerOptions.workerSrc = `/pdfjs/pdf.worker.min.js`;

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [pdfText, setPdfText] = useState("");
    const [ats,setAts] = useState(null);
    const [loading,setLoading] = useState(false)


    const db = getDatabase(app);
    const auth = getAuth();

    useEffect(() => {
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
            const response = await fetch("http://localhost:3001/get_ats_score", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ resumeText: resumeText })  // Make sure backend expects "text"
            });

            const data = await response.json();
            console.log("ATS Score Analysis Response:", data.atsScore?.score);
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
        console.log(pdfText,"text")
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
