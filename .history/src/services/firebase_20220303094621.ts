import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.,
    projectId: "letmeask-aulas-426ec",
    storageBucket: "letmeask-aulas-426ec.appspot.com",
    messagingSenderId: "351664443386",
    appId: "1:351664443386:web:ce804b7a36fb18e56d9e43"
  };

  firebase.initializeApp(firebaseConfig);

  //export const auth = firebase.auth();
  //export const database = firebase.database();