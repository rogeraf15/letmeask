import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyDEp5AaJWitmVIrRK4_DovxmembMSg-b0o",
  authDomain: "letmeask-e2c1d.firebaseapp.com",
  databaseURL: "https://letmeask-e2c1d-default-rtdb.firebaseio.com",
  projectId: "letmeask-e2c1d",
  storageBucket: "letmeask-e2c1d.appspot.com",
  messagingSenderId: "501760822665",
  appId: "1:501760822665:web:cb2cebed314b7929a4a558",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database, firebase};