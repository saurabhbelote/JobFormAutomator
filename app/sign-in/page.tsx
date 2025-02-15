"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import app, { auth } from "@/firebase/config";
import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";
import { getDatabase, get, ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const db = getDatabase(app);
  const router = useRouter()

  function notifyExtensionOnLogin(uid) {
    const event = new CustomEvent('userLoggedIn', { detail: { uid } });
    document.dispatchEvent(event);
  }

  useEffect(() => {
    const uid =  localStorage.getItem("UID");
    const apiKey =  localStorage.getItem("api_key");
    const IsLogin =  localStorage.getItem("IsLogin")
    console.log(IsLogin, "login", !IsLogin, "uid", uid)


    const subscriptionType = localStorage.getItem("SubscriptionType");
    
    console.log(uid,"user Id",typeof(uid))


    if (uid) {
      const redirectUser = async () => {
        try {
          const user = auth.currentUser;
          // console.log(user, uid)

          if (uid && IsLogin) {
            // console.log("hi")
            notifyExtensionOnLogin(uid);
            if (user && !user.emailVerified) {
              toast.error("Email is not verified.Please Verify your email, then try to login again!", {
                position: "bottom-center",
              });
              // window.location.href = "/login";
              return;
            }



            if (apiKey !== 'null' && apiKey !== null) {
              if (subscriptionType && subscriptionType === "FreeTrialStarted") {
                window.location.href = "/demo";
              } else {
                window.location.href = "/gemini";
              }
            } else {
              window.location.href = "/gemini";
              // console.log("gemini")

            }
          } else {
            // window.location.href = "/login";
            // console.log("login")

          }
        } catch (error) {
          console.error("Error fetching data from Firebase:", error);
          toast.error("An error occurred. Please try again.", {
            position: "bottom-center",
          });
        }
      };

      redirectUser();
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      
      if (user && user.emailVerified) {
        localStorage.setItem("UID", user.uid);
        localStorage.setItem("IsLogin", true);
        localStorage.setItem("UserName", user.displayName);

        notifyExtensionOnLogin(user.uid);

        const getReferralCodeFromCookie = () => {
            const cookie = document.cookie.split('; ').find(row => row.startsWith('referral='));
            return cookie ? cookie.split('=')[1] : null;
          };

        const referralCode = getReferralCodeFromCookie()
        console.log(referralCode, "code", typeof (referralCode))

        const currentDate = new Date();
        const formattedDateTime = currentDate.toISOString().replace("T", " ").split(".")[0];
        let currentUser = auth.currentUser.uid;

        if (referralCode) {
            console.log("Save in database/firebase")
            const newDocRef = ref(db, `/referrals/${referralCode}/${currentUser}`);
            console.log(newDocRef, typeof (newDocRef), "referrals");
            get(newDocRef).then((snapshot) => {
              if (!snapshot.exists()) {
                // If the referral code doesn't exist, create a new entry
                set(newDocRef, {
                  signupDate: formattedDateTime,
                  amount: 0,
                }).then(() => {
  
                })
              }
            })
          }


        toast.success("User logged in Successfully", { position: "top-center" });

        const subscriptionRef = ref(db, `user/${user.uid}/Payment/SubscriptionType`);
        const subscriptionSnapshot = await get(subscriptionRef);
        const subscriptionType = subscriptionSnapshot.val();
        localStorage.setItem("SubscriptionType", subscriptionType);


        const apiRef = ref(db, `user/${user.uid}/API/apikey`);
        const apiSnapshot = await get(apiRef);
        const apiKey = apiSnapshot.val();
        localStorage.setItem("api_key", apiKey);


        if (apiKey) {
            if (subscriptionType === "FreeTrialStarted" || subscriptionType === "Premium") {
              window.location.href = "/demo";
            } else {
              window.location.href = "/resume";
            }
          } else {
            window.location.href = "/gemini";
          }
        } else {
          toast.error("Email is not verified.Please Verify your email, then try to login again!", { position: "bottom-center" });
        }
      } catch (error) {
        console.error("Login error:", error.message);
        toast.error(error.message, { position: "bottom-center" });
      } finally {
        setLoading(false);
      }
    };
//         setEmail('');
//         setPassword('');
//         router.push('/gemini');
//       } else {
//         toast.error("Email is not verified. Please verify your email, then try to login again!", { position: "bottom-center" });
//       }
//     } catch (error) {
//       toast.error(error.message, { position: "bottom-center" });
//     } finally {
//       setLoading(false);
//     }
//   };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-30"></div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Get your Dream Job with Us</h2>
          <p className="text-gray-500">Land your perfect job with ease! Try Job Form Automator today!</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex justify-between items-center text-sm text-gray-600">
            <a href="/passwordReset" className="text-purple-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition">
            {loading ? "Signing in..." : "Sign in"}
          </button>
          {/* <SignInwithGoogle /> */}
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/sign-up" className="text-purple-600 hover:underline">Sign up</a>
        </p>
      </div>
    </main>
  );
}

export default Login;
