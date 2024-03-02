// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCauN-vsgUfQJXc5b41NoCnYzi6FIn86MQ",
  authDomain: "linkshare-eb70b.firebaseapp.com",
  databaseURL: "https://linkshare-eb70b-default-rtdb.firebaseio.com",
  projectId: "linkshare-eb70b",
  storageBucket: "linkshare-eb70b.appspot.com",
  messagingSenderId: "284502085616",
  appId: "1:284502085616:web:3f24e3fb844320eef85735",
  measurementId: "G-VQ0J98LXYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;