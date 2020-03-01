import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCX-uHwSXZ_zVKzdrIgzXFnBnl7G0zLWvs",
  authDomain: "crwn-db-11ec4.firebaseapp.com",
  databaseURL: "https://crwn-db-11ec4.firebaseio.com",
  projectId: "crwn-db-11ec4",
  storageBucket: "crwn-db-11ec4.appspot.com",
  messagingSenderId: "454314170118",
  appId: "1:454314170118:web:658d039ba336892d26b087",
  measurementId: "G-YQV5YP6WKH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (userAuth) {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({ displayName, email, createdAt, ...additionalData });
      } catch (error) {
        console.log("error while creating user", error.message);
      }
    }
    return userRef;
  } else {
    return;
  }
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export default firebase;
