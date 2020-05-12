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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exits) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set ({
           displayName,
           email,
           createdAt,
           ...additionalData
         })
       } catch (error) {
         console.log ('error creating user', error.message);
       }
    }

    return userRef;


  }


  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;