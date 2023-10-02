// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD63lH6ECwLVJHzTS5gTOONMCXpUoLEd5g",
    authDomain: "doctors-portal-43cd8.firebaseapp.com",
    projectId: "doctors-portal-43cd8",
    storageBucket: "doctors-portal-43cd8.appspot.com",
    messagingSenderId: "763763127704",
    appId: "1:763763127704:web:fcef556df48725cbe1e7ed",
    measurementId: "G-C54N79JGG6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

const auth = getAuth(app);
export default auth
