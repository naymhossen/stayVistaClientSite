// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMvc6ArzOBkk8vyf1muH8gtKiE0A_T1Bg",
  authDomain: "stayvistanew.firebaseapp.com",
  projectId: "stayvistanew",
  storageBucket: "stayvistanew.appspot.com",
  messagingSenderId: "415856807570",
  appId: "1:415856807570:web:3c7d1145e252c962c9e04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
