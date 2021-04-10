import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCbvaCdFnZT1gXz_4ljsPY9kT9VSxn5868",
    authDomain: "react-bolerplate-app.firebaseapp.com",
    projectId: "react-bolerplate-app",
    storageBucket: "react-bolerplate-app.appspot.com",
    messagingSenderId: "458336720923",
    appId: "1:458336720923:web:ce80d9881a97a0043f40be",
    measurementId: "G-B7YRSXZSCN"
  };

  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
