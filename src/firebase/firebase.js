import * as firebase from 'firebase';
// Add additional services that you want to use
// require("firebase/database");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseConfig = {
    apiKey: "AIzaSyAC3UgTIuxUjvcUA79P97hfmbB-VUTDTi0",
    authDomain: "controlasistenciaorgana.firebaseapp.com",
    databaseURL: "https://controlasistenciaorgana.firebaseio.com",
    projectId: "controlasistenciaorgana",
    storageBucket: "controlasistenciaorgana.appspot.com",
    messagingSenderId: "1025261164858",
    appId: "1:1025261164858:web:30cb65062cdca2de"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
