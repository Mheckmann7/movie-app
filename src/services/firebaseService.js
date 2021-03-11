import firebase from 'firebase/app';
import 'firebase/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDfziUqULjhJeac1mwXytU9yBuRC_4rr5Q",
    authDomain: "react-movies-19d56.firebaseapp.com",
    projectId: "react-movies-19d56",
    storageBucket: "react-movies-19d56.appspot.com",
    messagingSenderId: "726407780168",
    appId: "1:726407780168:web:3c866adb5c6702c932c57d",
    measurementId: "G-TRF73F89FE"
};
  
firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export {
    login,
    logout,
    auth
}