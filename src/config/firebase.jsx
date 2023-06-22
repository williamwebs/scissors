import { FirebaseError, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvfbfIxs0pP31zrHcWexRXzfz4PWaWHw0",
  authDomain: "random-user-2c98e.firebaseapp.com",
  projectId: "random-user-2c98e",
  storageBucket: "random-user-2c98e.appspot.com",
  messagingSenderId: "930964684970",
  appId: "1:930964684970:web:326edc2cf55f86e20990d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, db };
