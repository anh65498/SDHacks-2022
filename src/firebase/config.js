import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Required for side-effects
// require("firebase/firestore");
// require("firebase/storage");
// global.XMLHttpRequest = require("xhr2");

// Your web app's Firebase configuration
let db = firebase.initializeApp({
  apiKey: "AIzaSyBAUWX7kQFZq8rcMNIWm4SydySupwxCE34",
  authDomain: "sdhacks-41262.firebaseapp.com",
  projectId: "sdhacks-41262",
  storageBucket: "sdhacks-41262.appspot.com",
  messagingSenderId: "186712232722",
  appId: "1:186712232722:web:f649e5d0158717434999cb",
  measurementId: "G-9HFPWDD5YT",
});

export const provider2 = new firebase.auth.GoogleAuthProvider();

export default db;
