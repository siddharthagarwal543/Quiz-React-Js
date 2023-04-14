import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA8k_oBLky8gab0SVMACTvAGakojiUxzcs",
  authDomain: "quiz-app-58bb7.firebaseapp.com",
  projectId: "quiz-app-58bb7",
  storageBucket: "quiz-app-58bb7.appspot.com",
  messagingSenderId: "252928325036",
  appId: "1:252928325036:web:d17317bd2306135a317609",
  measurementId: "G-N01DEDR0RM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);

