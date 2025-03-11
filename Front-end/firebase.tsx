// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_FxXCPtlgz9MCrIpFNBSqr2NxdUmM7v8",
  authDomain: "finance-your-life-32121.firebaseapp.com",
  projectId: "finance-your-life-32121",
  storageBucket: "finance-your-life-32121.firebasestorage.app",
  messagingSenderId: "110014432678",
  appId: "1:110014432678:web:2aa3cdded4f7ed89003b67",
  measurementId: "G-73MEWT53WZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}