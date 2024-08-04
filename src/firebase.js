// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
   apiKey: "AIzaSyAuiygVWELZBlzpCd6s-FCcO2qUgC4JAI8",
  authDomain: "webkelas-935dc.firebaseapp.com",
  projectId: "webkelas-935dc",
  storageBucket: "webkelas-935dc.appspot.com",
  messagingSenderId: "316685454018",
  appId: "1:316685454018:web:4c6eee0d4d45543852895b",
  measurementId: "G-RB5CHFKG3J"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
