// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5nZmbEjhds0BDnQOTpCZ5VeiTPrCH2I",
  authDomain: "stayvista-1dd39.firebaseapp.com",
  projectId: "stayvista-1dd39",
  storageBucket: "stayvista-1dd39.appspot.com",
  messagingSenderId: "765691162043",
  appId: "1:765691162043:web:8ab1ad91a6904211aa689e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;