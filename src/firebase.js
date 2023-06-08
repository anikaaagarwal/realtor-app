// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa62wshTZLlx6bv6j4-W0VeEZhNzXW67Y",
    authDomain: "realtor-2e4d3.firebaseapp.com",
    projectId: "realtor-2e4d3",
    storageBucket: "realtor-2e4d3.appspot.com",
    messagingSenderId: "984124227439",
    appId: "1:984124227439:web:c044369128618e5748b29a",
    measurementId: "G-G53SF7PDV3"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()