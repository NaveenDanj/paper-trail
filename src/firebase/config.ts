// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-CRixjLKBQ02DDLqSklJQ77RVRIQPG5w",
  authDomain: "paper-trail-82f32.firebaseapp.com",
  projectId: "paper-trail-82f32",
  storageBucket: "paper-trail-82f32.appspot.com",
  messagingSenderId: "504467825130",
  appId: "1:504467825130:web:28d950d949a9656c3e9293",
  measurementId: "G-0Z5CJCBWD6"
};

// Initialize Firebase only if there are no apps initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
