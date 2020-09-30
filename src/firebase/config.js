import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCFz2IUlIvaviwpBdWyrEc0h_9XQsi4StQ",
  authDomain: "firegram-ff6ad.firebaseapp.com",
  databaseURL: "https://firegram-ff6ad.firebaseio.com",
  projectId: "firegram-ff6ad",
  storageBucket: "firegram-ff6ad.appspot.com",
  messagingSenderId: "648908206060",
  appId: "1:648908206060:web:bf33af647ce53b996d1ac9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
