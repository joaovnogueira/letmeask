import firebase from 'firebase/app'

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "351664443386",
    appId: "1:351664443386:web:ce804b7a36fb18e56d9e43"
  };

  firebase.initializeApp(firebaseConfig);

  //export const auth = firebase.auth();
  //export const database = firebase.database();