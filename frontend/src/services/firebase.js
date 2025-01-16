// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDBPxQOUTrGqSgRmGZGX1CNzHxRgUod0do",
    authDomain: "recipebook-a910a.firebaseapp.com",
    projectId: "recipebook-a910a",
    storageBucket: "recipebook-a910a.firebasestorage.app",
    messagingSenderId: "495611537815",
    appId: "1:495611537815:web:0579fe52175f64fd067cd2",
    measurementId: "G-BE3S2FV52H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);