import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAjoaEDgmiUgRC87JXms_oHNUD7EZHInsA",
    authDomain: "personal-website-f8042.firebaseapp.com",
    projectId: "personal-website-f8042",
    storageBucket: "personal-website-f8042.appspot.com",
    messagingSenderId: "612797621641",
    appId: "1:612797621641:web:66d84985b6a9ef82242d58",
    measurementId: "G-W3CQMYFLEQ"
});

export const auth = app.auth()
export default app;