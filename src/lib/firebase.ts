// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBsdXahPE0QFBjqkii8FeGrv7U5jt6sQ6U",
    authDomain: "lasem-bdbe0.firebaseapp.com",
    projectId: "lasem-bdbe0",
    storageBucket: "lasem-bdbe0.appspot.com",
    messagingSenderId: "1002457586670",
    appId: "1:1002457586670:web:1844c2f1cff29d341accff"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
// const analytics = getAnalytics(app);