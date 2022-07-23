import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpl5qHicOpqCNoNMrE6mFk0pCEb7crtAQ",
  authDomain: "local-e-c40b8.firebaseapp.com",
  projectId: "local-e-c40b8",
  storageBucket: "local-e-c40b8.appspot.com",
  messagingSenderId: "784395729503",
  appId: "1:784395729503:web:bec27180f320589495b9ea",
  measurementId: "G-DP6E2MG8BW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };