import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDf6Lu6vVWbfELfA18rnHs0WmgqjY6kkzc",
    authDomain: "crwn-db-da1bc.firebaseapp.com",
    databaseURL: "https://crwn-db-da1bc.firebaseio.com",
    projectId: "crwn-db-da1bc",
    storageBucket: "crwn-db-da1bc.appspot.com",
    messagingSenderId: "753521919020",
    appId: "1:753521919020:web:8c45fbbdaa64bfd6247d89",
    measurementId: "G-Z95E3RMSCK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;