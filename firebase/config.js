 import { initializeApp, getApps, getApp } from "firebase/app";
 import {getAuth} from 'firebase/auth'
//  import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

 const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FIREBASE_Project_ID,
   databaseURL: "https://job-form-automator-default-rtdb.firebaseio.com",
   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
   measurementId: "G-3WCJTHH2RP"
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

