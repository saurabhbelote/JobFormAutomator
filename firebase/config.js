<<<<<<< HEAD
 import { initializeApp, getApps } from "firebase/app";
=======
 import { initializeApp, getApps, getApp } from "firebase/app";
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
 import {getAuth} from 'firebase/auth'
//  import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDDrfKs64q7t2bZibGgjnylPDbZxf5hoig",
  authDomain: "jobform-automator-website.firebaseapp.com",
  databaseURL: "https://jobform-automator-website-default-rtdb.firebaseio.com",
  projectId: "jobform-automator-website",
  storageBucket: "jobform-automator-website.appspot.com",
  messagingSenderId: "741162222470",
  appId: "1:741162222470:web:debef6d2d8e2befaca2207",
  measurementId: "G-X9649YYRVT"
=======
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_Project_ID,
   databaseURL: "https://job-form-automator-default-rtdb.firebaseio.com",
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   measurementId: "G-3WCJTHH2RP"
>>>>>>> 997d0552bf75fc1556cef6c0a4338a8a3f61de73
 };
 // Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApps()[0];
// const analytics = getAnalytics(app);
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const storage = getStorage(app)

export const auth= getAuth(app) 

export default app;

