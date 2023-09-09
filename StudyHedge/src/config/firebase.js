// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmWrfM3Ef3agZUy_90xNeSncx-YWaZzAc",
  authDomain: "studyhedge-59986.firebaseapp.com",
  projectId: "studyhedge-59986",
  storageBucket: "studyhedge-59986.appspot.com",
  messagingSenderId: "30590262915",
  appId: "1:30590262915:web:b82d1da2c7b147ce0ec5b6",
  measurementId: "G-D2MZHTRMFQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);