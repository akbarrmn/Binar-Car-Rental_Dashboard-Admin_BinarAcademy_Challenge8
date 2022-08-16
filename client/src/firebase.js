import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "binar-444a0.firebaseapp.com",
  projectId: "binar-444a0",
  storageBucket: "binar-444a0.appspot.com",
  messagingSenderId: "116075098057",
  appId: "1:116075098057:web:4e860df2b2162a51e64218"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app);