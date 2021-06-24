// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDabfgt_UrcM6mXUFFS5ooUOcQ3L7bj08g",
    authDomain: "clone-fb43f.firebaseapp.com",
    projectId: "clone-fb43f",
    storageBucket: "clone-fb43f.appspot.com",
    messagingSenderId: "974883967973",
    appId: "1:974883967973:web:2fa221a45a0e557034150c",
    measurementId: "G-3BMJX350PP"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};