// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXATLTHdnPJAR4ON9GGyNy4XXQq0lIn0I",
  authDomain: "fir-project-12ae0.firebaseapp.com",
  projectId: "fir-project-12ae0",
  storageBucket: "fir-project-12ae0.appspot.com",
  messagingSenderId: "959392234499",
  appId: "1:959392234499:web:eecbef9784c7854faa2236",
  measurementId: "G-HV42LPGK0V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
