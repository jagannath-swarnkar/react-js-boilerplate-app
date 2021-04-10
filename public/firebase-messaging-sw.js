importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
    .then(function(registration) {
      // console.log('Registration successful, scope is:', registration.scope);
    }).catch(function(err) {
      // console.log('Service worker registration failed, error:', err);
    });
  }

firebase.initializeApp({
    apiKey: "AIzaSyCbvaCdFnZT1gXz_4ljsPY9kT9VSxn5868",
    authDomain: "react-bolerplate-app.firebaseapp.com",
    projectId: "react-bolerplate-app",
    storageBucket: "react-bolerplate-app.appspot.com",
    messagingSenderId: "458336720923",
    appId: "1:458336720923:web:ce80d9881a97a0043f40be",
    measurementId: "G-B7YRSXZSCN"
})

const initMessaging = firebase.messaging()