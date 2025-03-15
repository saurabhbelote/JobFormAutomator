"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
export default function Home() {

  const [user]= useAuthState(auth);
    const router= useRouter();
    console.log(user)

    useEffect(() => {
    if (!user) {
      router.push("/sign-up");
    }
  }, [user, router]);
  return (
    <>
    <section className="bg-[#f1f3f5] text-black">
      <div className="flex flex-row w-full h-96">
        <div className="w-1/2 flex flex-col justify-center items-center font-bold text-5xl">
        <button onClick={()=>{signOut(auth)}}>Log Out </button>
          <span className="">Hello,</span>
          <span>Mahaprasad Prusty</span>
        </div>
        <div className="w-1/2">
          <DotLottieReact
            src="https://lottie.host/57da2129-152a-4c35-a033-41f5a689f628/UwseBxDJhS.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="flex flex-col px-10 py-10">
        <span>Explore the features of jobformautomator</span>
        <div className="grid grid-cols-3 gap-4 pl-10">
          <div className="w-96 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] my-10">
            <Image
              src="/home/atsScore.jpg"
              alt="ATS"
              height={300}
              width={300}
            />
            <span className="text-2xl font-semibold">ATS Score Check</span>
            <span className="text-lg text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio impedit quibusdam dolore atque laudantium autem!
            </span>
          </div>
          <div className="w-96 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] my-10">
            <Image
              src="/home/resume.jpg"
              alt="ATS"
              height={300}
              width={300}
            />
            <span className="text-2xl font-semibold">Build your Resume</span>
            <span className="text-lg text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio impedit quibusdam dolore atque laudantium autem!
            </span>
          </div>
          <div className="w-96 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] my-10">
            <Image
              src="/home/coverLetter.jpg"
              alt="ATS"
              height={300}
              width={300}
            />
            <span className="text-2xl font-semibold">
              Build your cover letter
            </span>
            <span className="text-lg text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio impedit quibusdam dolore atque laudantium autem!
            </span>
          </div>
          <div className="w-96 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] my-10">
            <Image
              src="/home/aiInterviewer.jpg"
              alt="ATS"
              height={300}
              width={300}
            />
            <span className="text-2xl font-semibold">AI Interviewer</span>
            <span className="text-lg text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio impedit quibusdam dolore atque laudantium autem!
            </span>
          </div>
          <div className="w-96 h-96 border-2 flex flex-col items-center rounded-lg shadow-xl bg-[#f2f4f6] my-10">
            <Image
              src="/home/skills.jpg"
              alt="ATS"
              height={300}
              width={300}
            />
            <span className="text-2xl font-semibold">Skills Suggestion</span>
            <span className="text-lg text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias odio impedit quibusdam dolore atque laudantium autem!
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
