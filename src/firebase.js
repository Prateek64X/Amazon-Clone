// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwrR_3oCYKXV0KAjjFKt6X_KFjVAza4XI",
  authDomain: "mystore-5be00.firebaseapp.com",
  projectId: "mystore-5be00",
  storageBucket: "mystore-5be00.appspot.com",
  messagingSenderId: "754539022128",
  appId: "1:754539022128:web:40abbf4a8902101ca5aaf5",
  measurementId: "G-FLTNK4DSE5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
