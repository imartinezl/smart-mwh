import firebase from 'firebase';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: 'AIzaSyBmwDTEe5RDGsMlok_yamocVe5Vx_OT5iI',
  authDomain: 'auracoin-30be4.firebaseapp.com',
  databaseURL: 'https://auracoin-30be4.firebaseio.com',
  storageBucket: 'auracoin-30be4.appspot.com',
  messagingSenderId: '449717242543'
};
var fire = firebase.initializeApp(config);
export default fire;
