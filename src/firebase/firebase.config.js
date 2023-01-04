// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo4_Hix8TwKzr-KDSgvq5Pa1yGyGP1OYQ",
    authDomain: "mobile-mela-client-side.firebaseapp.com",
    projectId: "mobile-mela-client-side",
    storageBucket: "mobile-mela-client-side.appspot.com",
    messagingSenderId: "125105654018",
    appId: "1:125105654018:web:420d92c538804e6bb0da1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;