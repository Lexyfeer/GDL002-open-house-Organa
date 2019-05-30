import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
// Add additional services that you want to use
// require("firebase/database");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
firebase.initializeApp ({
    apiKey: "AIzaSyAC3UgTIuxUjvcUA79P97hfmbB-VUTDTi0",
    authDomain: "controlasistenciaorgana.firebaseapp.com",
    databaseURL: "https://controlasistenciaorgana.firebaseio.com",
    projectId: "controlasistenciaorgana",
    storageBucket: "controlasistenciaorgana.appspot.com",
    messagingSenderId: "1025261164858",
    appId: "1:1025261164858:web:30cb65062cdca2de"
});
let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});
export default db;
