import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBBxRtuCy4sg9W9_hc93kXCZvGr9Cg96cU",
    authDomain: "e-library-625c9.firebaseapp.com",
    projectId: "e-library-625c9",
    storageBucket: "e-library-625c9.appspot.com",
    messagingSenderId: "628661897362",
    appId: "1:628661897362:web:b0d15144cfe0f52d033e4b"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();