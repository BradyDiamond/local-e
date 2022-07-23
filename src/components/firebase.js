import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5WBGToZk_EjS1agSPrylZYlXtXgsJHjg",
  authDomain: "locale-86b21.firebaseapp.com",
  projectId: "locale-86b21",
  storageBucket: "locale-86b21.appspot.com",
  messagingSenderId: "1042748309795",
  appId: "1:1042748309795:web:c1c4ca245f2833cb4ecc96",
  measurementId: "G-Z5H6SZHN94"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };