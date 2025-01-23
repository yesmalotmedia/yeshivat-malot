// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAtmNbGOwx2TimTwYprQixfs-C19X2Uvw",
  authDomain: "mizughatalmudim.firebaseapp.com",
  projectId: "mizughatalmudim",
  storageBucket: "mizughatalmudim.appspot.com",
  messagingSenderId: "625715550418",
  appId: "1:625715550418:web:70f5a970a03a55f13b750b",
  measurementId: "G-L3RZ8TESQD",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
