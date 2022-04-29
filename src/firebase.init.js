// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB11ZObP9Tuz9Bw-h4efT2PPsXjS2Y_0Vs",
  authDomain: "genious-car-services-d5087.firebaseapp.com",
  projectId: "genious-car-services-d5087",
  storageBucket: "genious-car-services-d5087.appspot.com",
  messagingSenderId: "550638841450",
  appId: "1:550638841450:web:99186bee5aac37c8d6a413"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

