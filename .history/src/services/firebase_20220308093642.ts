
import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import firebase from 'firebase/app';

//import 'firebase/auth';
//import 'firebase/firestore';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  firebase.initializeApp(firebaseConfig);


//const auth = firebase.auth();
const database = firebase.database();

const auth = firebase.auth();

//export {auth, database, firebase}
export {firebase}
export {auth}
export {firebase}