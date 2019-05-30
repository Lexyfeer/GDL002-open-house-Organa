import * as firebase from 'firebase';
// Add additional services that you want to use
// require("firebase/database");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var firebaseConfig = {
  apiKey: "AIzaSyBVwMSxoh4jwZDa_GKoPpeLNTltVpIE3lA",
  authDomain: "organa-1020.firebaseapp.com",
  databaseURL: "https://organa-1020.firebaseio.com",
  projectId: "organa-1020",
  storageBucket: "organa-1020.appspot.com",
  messagingSenderId: "893591829196",
  appId: "1:893591829196:web:faa21b24f9907250"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
