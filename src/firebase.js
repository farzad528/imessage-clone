import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwpMnmoc2t5XQo2dA8AnoaJyPHFAQrO34",
  authDomain: "imessage-clone-f3625.firebaseapp.com",
  databaseURL: "https://imessage-clone-f3625.firebaseio.com",
  projectId: "imessage-clone-f3625",
  storageBucket: "imessage-clone-f3625.appspot.com",
  messagingSenderId: "595853697130",
  appId: "1:595853697130:web:5923b0ac23fa47be1f2a13",
  measurementId: "G-HHHRVE6B2K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
