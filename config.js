import firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyC7-b5wFxwCwrwntu68W58fzoLyq6eTqI4",
    authDomain: "barter-system-92160.firebaseapp.com",
    projectId: "barter-system-92160",
    storageBucket: "barter-system-92160.appspot.com",
    messagingSenderId: "87877940496",
    appId: "1:87877940496:web:e6e0467e73025a4ef4a195"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();