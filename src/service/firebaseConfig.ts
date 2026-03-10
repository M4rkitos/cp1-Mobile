import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG5fck3MMuRNjUshCwIZ3fwl1-m7ln8ng",
  authDomain: "cp1mobile-b63ab.firebaseapp.com",
  projectId: "cp1mobile-b63ab",
  storageBucket: "cp1mobile-b63ab.firebasestorage.app",
  messagingSenderId: "871754105283",
  appId: "1:871754105283:web:f3b6142827db39f165bd76",
  measurementId: "G-Y6LVN9Y7MP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);