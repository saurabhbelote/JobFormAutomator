"use client";
import CompaniesSection from '@/components/home/CompaniesSection';
import FAQSection from '@/components/home/FAQSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import HeroSection from '@/components/home/HeroSection';
import HowItWorks from '@/components/home/HowItWorks';
import ResumeATSChecker from '@/components/home/ResumeATSChecker';
<<<<<<< HEAD
import Navbar from "@/components/Navbar";

export default function Mainpage() {

  return (
    <>
      <Navbar />
=======
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '@/firebase/config';
// import Resume from '@/app/Resume/page'
// import Signup from '@/app/sign-up/page'
// import SignupPage from "./sign-up/page";

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
    <>
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
      <HeroSection />
      <FeaturesSection />
      <CompaniesSection />
      <HowItWorks />
      <ResumeATSChecker />
      <FAQSection />
<<<<<<< HEAD
  
=======
      {/* <SignupPage/> */}
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
    </>
  );
}