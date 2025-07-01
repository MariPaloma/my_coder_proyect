// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBuo6X5SVuiXBGTq5Qp1GWoYsNLoUBMiQ",
  authDomain: "mycoder-ecommerce.firebaseapp.com",
  projectId: "mycoder-ecommerce",
  storageBucket: "mycoder-ecommerce.firebasestorage.app",
  messagingSenderId: "1013275648537",
  appId: "1:1013275648537:web:ed94919f27f9e6165d0088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);