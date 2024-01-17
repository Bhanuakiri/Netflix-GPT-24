// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXUvK842rOR7NIEj6CmjRaxVXpMKBUYbQ",
  authDomain: "netflix-gpt-4e082.firebaseapp.com",
  projectId: "netflix-gpt-4e082",
  storageBucket: "netflix-gpt-4e082.appspot.com",
  messagingSenderId: "364645417474",
  appId: "1:364645417474:web:78e3f079f8745280cd5d1b",
  measurementId: "G-6PXSYB1BW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
