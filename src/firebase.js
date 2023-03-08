import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "web-p-a3977.firebaseapp.com",
  projectId: "web-p-a3977",
  storageBucket: "web-p-a3977.appspot.com",
  messagingSenderId: "523414110457",
  appId: "1:523414110457:web:8b28dfe7f5c31324626228"

  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
