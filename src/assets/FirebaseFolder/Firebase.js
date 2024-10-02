// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw_HxN4kiJL4UzIw-7EHk1BzzxUmbawBM",
  authDomain: "react-final-exam-16802.firebaseapp.com",
  projectId: "react-final-exam-16802",
  storageBucket: "react-final-exam-16802.appspot.com",
  messagingSenderId: "1098407300090",
  appId: "1:1098407300090:web:744166e6d0fed58dd27243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)