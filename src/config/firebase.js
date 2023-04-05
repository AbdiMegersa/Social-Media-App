// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {firebase} from 'firebase/app'
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4wbXkhmdu3roX8NVTyyscMiGeRcHLr4",
  authDomain: "sm-app-c21f7.firebaseapp.com",
  projectId: "sm-app-c21f7",
  storageBucket: "sm-app-c21f7.appspot.com",
  messagingSenderId: "280920349449",
  appId: "1:280920349449:web:c65edac165c0484b83d1d8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// firebase.firestore().setting({timeStampInSnapShot : true})
export const db = getFirestore(app)
