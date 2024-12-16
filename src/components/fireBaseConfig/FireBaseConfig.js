// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth and GoogleAuthProvider from firebase/auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAipy1H2LSXhWqfa1sPs0ep6oapQJ7wP-Q",
  authDomain: "quickvacancy-8f837.firebaseapp.com",
  projectId: "quickvacancy-8f837",
  storageBucket: "quickvacancy-8f837.appspot.com",
  messagingSenderId: "411845610663",
  appId: "1:411845610663:web:2f693a078842e45dc35f82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Authentication
const googleProvider = new GoogleAuthProvider(); // Create a Google Auth Provider instance

export { app, auth, googleProvider }; // Export the app, auth, and googleProvider instances