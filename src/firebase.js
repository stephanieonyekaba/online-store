import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5Wy1I4O5OqN4y0xgg-BIYK7NCuea_hg",
  authDomain: "online-store-9aa1a.firebaseapp.com",
  projectId: "online-store-9aa1a",
  storageBucket: "online-store-9aa1a.appspot.com",
  messagingSenderId: "448052643592",
  appId: "1:448052643592:web:bb1a5d22c3d62caada8ebd",
  measurementId: "G-Q14VG7F8RT"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };