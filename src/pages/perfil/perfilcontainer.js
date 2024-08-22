import getCookie from "../../../src/utils/getCookie";

// Importar as funções necessárias dos SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

export default async function initializeContainer() {
    // Inicializar o Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    const userCookie = getCookie("userid");

    const userQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", userCookie)
    );

    var userData = null;

    const userSnapshot = await getDocs(userQuery);
    userSnapshot.forEach((doc) => {
        userData = doc.data();
    });

    const h1username = document.querySelector("#h1-username");

    h1username.innerHTML = userData.usuario;

    const receitasQuery = query(
        collection(db, "receitas"),
        where("usuario", "==", userCookie)
    );

    var receitasDoUser = [];

    const receitaSnapshot = await getDocs(receitasQuery);
    receitaSnapshot.forEach((doc) => {
        receitasDoUser.push(doc.data());
    });

    const pReceitas = document.querySelector("#p-receitas");
    pReceitas.innerHTML = receitasDoUser.length;

    const pCurtidas = document.querySelector("#p-curtidas");

    var curtidas = 0;
    receitasDoUser.forEach((receita) => {
        curtidas += receita.curtidas;
    });

    pCurtidas.innerHTML = curtidas;

}
