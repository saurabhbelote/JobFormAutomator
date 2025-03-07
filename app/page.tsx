"use client";
import CompaniesSection from '@/components/home/CompaniesSection';
import FAQSection from '@/components/home/FAQSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ResumeATSChecker from '@/components/home/ResumeATSChecker';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '@/firebase/config';
import { useRouter } from "next/navigation";
// import Resume from '@/app/Resume/page'
// import Signup from '@/app/sign-up/page'
// import SignupPage from "./sign-up/page";
import { useEffect } from "react";

export default function Mainpage() {

  // const [user]= useAuthState(auth);
  // const router= useRouter();
  // const user = null; 
  

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/sign-up");
  //   }
  // }, [user, router]);

  // if(!user){
  //   router.push('/sign-up')
  // }

 // console.log(user); 
  return (
    <div className='bg-[#11011E]'>
      <HeroSection />
      <FeaturesSection />
      <CompaniesSection />
      <HowItWorks />
      <ResumeATSChecker />
      <FAQSection />
      {/* <SignupPage/> */}
    </div>
  );
}