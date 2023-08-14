import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "omarfathy-portfolio.firebaseapp.com",
  projectId: "omarfathy-portfolio",
  storageBucket: "omarfathy-portfolio.appspot.com",
  messagingSenderId: "262062398526",
  appId: "1:262062398526:web:4f7d869133b3e54645056f",
  measurementId: "G-JR6TQS94E3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);