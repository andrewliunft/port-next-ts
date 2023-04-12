import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAqfbLcY00Uw2glCwmGdy7NYaJz93H7BSU",
    authDomain: "next-port-1c7c3.firebaseapp.com",
    projectId: "next-port-1c7c3",
    storageBucket: "next-port-1c7c3.appspot.com",
    messagingSenderId: "236280648860",
    appId: "1:236280648860:web:2498bb08a492f9e018c959",
    measurementId: "G-D9M79DF8RH"
};

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp)
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(firebaseApp);