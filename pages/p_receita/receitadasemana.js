// Importar as funções necessárias dos SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getStorage,
    ref,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

document.querySelector("#a-semana").addEventListener("click", () => {
    document.cookie = "receita=" + "XwaGajm7ZB3GJvWImz55" + ";path=/";
});

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAqfNOpVNGAzorp5_0tuaI1QDd0WDZXqSo",
    authDomain: "receibareceitas.firebaseapp.com",
    projectId: "receibareceitas",
    storageBucket: "receibareceitas.appspot.com",
    messagingSenderId: "21963335608",
    appId: "1:21963335608:web:7437d657904cda9c13d14d",
    measurementId: "G-TTF55ZV2K0",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const pathReference = ref(storage, 'perunatalino.jpg');

const url = await getDownloadURL(pathReference);

document.querySelector("#img-semana").src = url;
