import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAqfbLcY00Uw2glCwmGdy7NYaJz93H7BSU",
    authDomain: "next-port-1c7c3.firebaseapp.com",
    projectId: "next-port-1c7c3",
    storageBucket: "next-port-1c7c3.appspot.com",
    messagingSenderId: "236280648860",
    appId: "1:236280648860:web:2498bb08a492f9e018c959",
    measurementId: "G-D9M79DF8RH"
};
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();