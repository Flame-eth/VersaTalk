// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_LiWRXEAdZwpfq8vSo0rbz2spuM9bAtI",
  authDomain: "versatalk-b2c41.firebaseapp.com",
  projectId: "versatalk-b2c41",
  storageBucket: "versatalk-b2c41.appspot.com",
  messagingSenderId: "770307459353",
  appId: "1:770307459353:web:02fc975c6a7e084e6c9d88"
};

// Initialize Firebase
const app = getApps().length ? getApp : initializeApp(firebaseConfig);
const auth = getAuth(app as FirebaseApp);
const db = getFirestore(app as FirebaseApp);
const functions = getFunctions(app as FirebaseApp);

export { auth, db, functions };