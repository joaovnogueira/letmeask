import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyCsLNeWjAPQZ9BOoaM2IhZ7-vCevWTeSUs",
    authDomain: "letmeask-aulas-426ec.firebaseapp.com",
    databaseURL: "https://letmeask-aulas-426ec-default-rtdb.firebaseio.com",
    projectId: "letmeask-aulas-426ec",
    storageBucket: "letmeask-aulas-426ec.appspot.com",
    messagingSenderId: "351664443386",
    appId: "1:351664443386:web:ce804b7a36fb18e56d9e43"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth