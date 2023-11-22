// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC55nQam4aE6L56ahKnqlhdGvv-R4VMzM4",
  authDomain: "react-testing-cb4eb.firebaseapp.com",
  projectId: "react-testing-cb4eb",
  storageBucket: "react-testing-cb4eb.appspot.com",
  messagingSenderId: "585767460450",
  appId: "1:585767460450:web:02459a9f1ec728ba227b3b",
  measurementId: "G-3X17QSFN0M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
