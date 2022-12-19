// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnN-rbmzXOAnLr5n1TPPB0oE4KpjqTR00",
  authDomain: "jvalley-bootcamp.firebaseapp.com",
  projectId: "jvalley-bootcamp",
  storageBucket: "jvalley-bootcamp.appspot.com",
  messagingSenderId: "345199947795",
  appId: "1:345199947795:web:92bc8db2a83a39755fcfe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);