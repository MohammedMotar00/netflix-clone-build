import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDntLaUCf2SogqZDhmFQITKnCikrvqYc-I",
  authDomain: "netflix-clone-build-4519a.firebaseapp.com",
  projectId: "netflix-clone-build-4519a",
  storageBucket: "netflix-clone-build-4519a.appspot.com",
  messagingSenderId: "535483349607",
  appId: "1:535483349607:web:972d444b7d7cc3977672c2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
