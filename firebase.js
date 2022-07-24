import firebase from "firebase/compat/app";
import "firebase/compat/database";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAFiOmduqT4-gMO58LUCahy9MlCFCetLXo",
    authDomain: "schedule-dae0c.firebaseapp.com",
    databaseURL: "https://schedule-dae0c-default-rtdb.firebaseio.com",
    projectId: "schedule-dae0c",
    storageBucket: "schedule-dae0c.appspot.com",
    messagingSenderId: "920291555808",
    appId: "1:920291555808:web:766a48a47131e7407a1385",
    measurementId: "G-6T794E35E5"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };
