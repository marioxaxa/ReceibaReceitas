// src/pages/EnviarReceita/firebase.js

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "../../services/firebaseapp";


// Inicializar o Firestore e o Storage
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc };
