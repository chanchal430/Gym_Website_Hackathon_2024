import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "gymantrum-gym.firebaseapp.com",
  projectId: "gymantrum-gym",
  storageBucket: "gymantrum-gym.appspot.com",
  messagingSenderId: "20785252533",
  appId: "1:20785252533:web:7c83c9ce2053997e5996fc",
  measurementId: "G-7HPKETRDGT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
