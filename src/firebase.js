// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBn3M0d3P0ZAauJUXiUGo79vAR2q5BqR28",
    authDomain: "slack-clone-yt-abc5f.firebaseapp.com",
    projectId: "slack-clone-yt-abc5f",
    storageBucket: "slack-clone-yt-abc5f.appspot.com",
    messagingSenderId: "71518701397",
    appId: "1:71518701397:web:f00c4e74bdc609ae94d1dc",
    measurementId: "G-EQDFSRPR1L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();

  export { auth, provider, db }