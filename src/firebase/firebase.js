// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbcghPj8dGnZ0-nXSC-deJFjhM5rs2kpA",
  authDomain: "proyecto-4-95567.firebaseapp.com",
  projectId: "proyecto-4-95567",
  storageBucket: "proyecto-4-95567.appspot.com",
  messagingSenderId: "308375830623",
  appId: "1:308375830623:web:f35e6624f1e0fb90d49bea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
