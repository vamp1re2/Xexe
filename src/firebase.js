// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkVa2zvJdmYEEvihBZ0U4isHVou6sHDCg",
  authDomain: "xexe-8db12.firebaseapp.com",
  projectId: "xexe-8db12",
  storageBucket: "xexe-8db12.firebasestorage.app",
  messagingSenderId: "293759268034",
  appId: "1:293759268034:web:52b42103c9d3fbc786f75b",
  measurementId: "G-QJJ2HRBZSV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
