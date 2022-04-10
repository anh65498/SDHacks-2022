import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Required for side-effects
// require("firebase/firestore");
// require("firebase/storage");
// global.XMLHttpRequest = require("xhr2");

// Your web app's Firebase configuration
let db = firebase.initializeApp({});

export const provider2 = new firebase.auth.GoogleAuthProvider();

export default db;
