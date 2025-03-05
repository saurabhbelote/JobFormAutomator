"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import app from "@/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDatabase, ref, get } from "firebase/database";
import { auth } from "@/firebase/config";

export default function Home() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const db = getDatabase(app);

  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const loginStatus = localStorage.getItem("IsLogin");
      setIsLogin(loginStatus === "true");

      const userId = localStorage.getItem("UID");
      if (userId) {
        const findUser = ref(db, `user/${userId}`);
        get(findUser).then((snapshot) => {
          let Name = snapshot.val()?.name;
          let fname = snapshot.val()?.fname;
          let lname = snapshot.val()?.lname;
          let user = Name ? Name : `${fname} ${lname}`;
          setFullName(user);
        });
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-lg bg-white/30 shadow-lg flex items-center justify-between px-6 md:px-10 py-4 z-50 border-b border-white/20">
        <div className="text-xl md:text-2xl font-bold">JobFormAutomator</div>
        <div className="relative">
          <button onClick={toggleDropdown} className="bg-blue-500 hover:bg-teal-400 text-white text-lg font-semibold px-4 py-2 rounded-full">Profile</button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
              <ul>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black">Settings</li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer text-black">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <section className="bg-[#f1f3f5] text-black">
        <div className="flex flex-row w-full h-96">
          <div className="w-1/2 flex flex-col justify-center items-center font-bold text-5xl">
            <span className="">Hello!!</span>
            <span>{fullName}</span>
          </div>
          <div className="w-1/2">
            <DotLottieReact
              src="https://lottie.host/57da2129-152a-4c35-a033-41f5a689f628/UwseBxDJhS.lottie"
              loop
              autoplay
            />
          </div>
        </div>
        <div className="flex flex-col px-6 md:px-10 py-10">
          <h3 className="text-2xl md:text-3xl font-semibold">Explore the Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { src: "/home/atsScore.jpg", title: "ATS Score Check", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio impedit quibusdam dolore atque laudantium autem! " },
              { src: "/home/resume.jpg", title: "Build your Resume", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio impedit quibusdam dolore atque laudantium autem! "  },
              { src: "/home/coverLetter.jpg", title: "Build your Cover Letter", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio impedit quibusdam dolore atque laudantium autem! "  },
              { src: "/home/aiInterviewer.jpg", title: "AI Interviewer", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio impedit quibusdam dolore atque laudantium autem! "  },
              { src: "/home/skills.jpg", title: "Skills Suggestion", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias odio impedit quibusdam dolore atque laudantium autem! "  }
            ].map((feature, index) => (
              <div key={index} className="relative w-full sm:w-80 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] overflow-hidden p-4 cursor-pointer hover:scale-105 transition-transform">
                <Image src={feature.src} alt={feature.title} height={250} width={250} className="relative z-10" />
                <span className="relative z-10 text-xl font-semibold mt-4">{feature.title}</span>
                <span className="mt-2 text-gray-600">{feature.content}</span>
                <div className="mt-5">
                  <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
