// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBQ_3Fwi00n_7BSzX0vIQTIYEW2-veRYJk",
  authDomain: "website-kelax-xl8.firebaseapp.com",
  projectId: "website-kelax-xl8",
  storageBucket: "website-kelax-xl8.appspot.com",
  messagingSenderId: "986976124075",
  appId: "1:986976124075:web:0121de755f8916742c0bee",
  measurementId: "G-JQ875R39S4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();