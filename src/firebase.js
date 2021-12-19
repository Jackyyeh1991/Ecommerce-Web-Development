import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4KeU60_vzUk0fDwhGuKEO4dWZzL8fAJk",
  authDomain: "version-1c4aa.firebaseapp.com",
  projectId: "version-1c4aa",
  storageBucket: "version-1c4aa.appspot.com",
  messagingSenderId: "571235344028",
  appId: "1:571235344028:web:d06c5fa496a778dbb8d759",
  measurementId: "G-LSKSTF0W5H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };