// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const reactNativeFirebaseConfig = {
//const firebaseConfig = {
  apiKey: "AIzaSyARfO3qXc9Hi8oMhEUHG5PfpHFDPA5tjj4",
  authDomain: "gre-inclusao-firebase.firebaseapp.com",
  databaseURL: "https://gre-inclusao-firebase-default-rtdb.firebaseio.com",
  projectId: "gre-inclusao-firebase",
  storageBucket: "gre-inclusao-firebase.appspot.com",
  messagingSenderId: "583507153973",
  appId: "1:583507153973:web:bad74d3e2a32f9aac18d7c",
  measurementId: "G-7PYLS7KCNF"
};

// Initialize Firebase
/*let app;
if (firebase.apps.lenght === 0) {
  app =firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}*/

if (firebase.apps.length === 0) {
  firebase.initializeApp(reactNativeFirebaseConfig);
}

firebase.firestore();

const auth = firebase.auth();

export { auth };