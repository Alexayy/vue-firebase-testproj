import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyABVH7rpj5z3xpPicoK4FDH_cbdEHoowS8",
    authDomain: "ninja-members-e2d17.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-e2d17.firebaseio.com",
    projectId: "ninja-members-e2d17",
    storageBucket: "ninja-members-e2d17.appspot.com",
    messagingSenderId: "129588412468",
    appId: "1:129588412468:web:48fc81e09e3551cc"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
