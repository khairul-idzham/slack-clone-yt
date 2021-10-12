import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBn3M0d3P0ZAauJUXiUGo79vAR2q5BqR28",
    authDomain: "slack-clone-yt-abc5f.firebaseapp.com",
    projectId: "slack-clone-yt-abc5f",
    storageBucket: "slack-clone-yt-abc5f.appspot.com",
    messagingSenderId: "71518701397",
    appId: "1:71518701397:web:f00c4e74bdc609ae94d1dc",
    measurementId: "G-EQDFSRPR1L"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore(firebaseApp);

  export { auth, provider, db }