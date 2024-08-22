// src/pages/EnviarReceita/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar o Firestore e o Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc };
