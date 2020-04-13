import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCDjxKk6XKGYCgS-toiWTi2zWXP50LGRvA",
    authDomain: "crwn-db-431dc.firebaseapp.com",
    databaseURL: "https://crwn-db-431dc.firebaseio.com",
    projectId: "crwn-db-431dc",
    storageBucket: "crwn-db-431dc.appspot.com",
    messagingSenderId: "376326576882",
    appId: "1:376326576882:web:4d7656f7257c7aefdb4e6b",
    measurementId: "G-QX0738KH4Q"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;