import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCKcqPW-ceGylF65hMgGX9T0lafy31sE7E",
  authDomain: "my-magazine-b79c9.firebaseapp.com",
  projectId: "my-magazine-b79c9",
  storageBucket: "my-magazine-b79c9.appspot.com",
  messagingSenderId: "748912101177",
  appId: "1:748912101177:web:ce64d5dcfed742fcdb8ae8",
  measurementId: "G-2W7PDPQW7Y",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const apiKey = firebaseConfig.apiKey;
const storage = firebase.storage();
const realtime = firebase.database();

export { auth, firestore, apiKey, storage, realtime };
