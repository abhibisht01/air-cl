// Initialize Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCXoGAMA3CqWmFFW0DLNGKwa0AJ0lQaX0g",
    authDomain: "air-cl.firebaseapp.com",
    projectId: "air-cl",
    storageBucket: "air-cl.appspot.com",
    messagingSenderId: "92931222500",
    appId: "1:92931222500:web:3ff181ca864188c108f5f1",
    measurementId: "G-07FY62RVGX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Initialize Firebase
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
// const storage = firebase.storage(); //for storage in the databse.
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication

export { auth, provider };
export default db;
