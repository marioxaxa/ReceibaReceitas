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
import {
    getStorage,
    ref,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

export default function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

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
const db = getFirestore(app);

const receitaCookie = getCookie("receita");
console.log(receitaCookie);
const receitaQuery = query(
    collection(db, "receitas"),
    where("__name__", "==", receitaCookie)
);

var receitaSelecionada = null;

const receitaSnapshot = await getDocs(receitaQuery);
receitaSnapshot.forEach((doc) => {
    const obj = doc.data();
    obj.id = doc.id;
    receitaSelecionada = obj;
});

document.querySelector("#receita-nome").innerHTML = receitaSelecionada.nome;
document.querySelector("#receita-tempo").innerHTML = receitaSelecionada.tempo;
document.querySelector("#receita-tipo").innerHTML = receitaSelecionada.tipo;
document.querySelector("#receita-porcoes").innerHTML =
    receitaSelecionada.porcoes;

const lista = document.querySelector("#receita-ingredientes");

const ingredintesArray = receitaSelecionada.ingredientes
    .replaceAll("\n", "")
    .split(",");
ingredintesArray.forEach((ingrediente) => {
    const newChild = document.createElement("li");
    newChild.innerHTML = ingrediente;
    lista.appendChild(newChild);
});

document.querySelector("#receita-preparo").innerHTML =
    receitaSelecionada.preparo;

/*
const userCookie = getCookie("userid");

console.log(userCookie);

const userQuery = query(
    collection(db, "usuarios"),
    where("__name__", "==", userCookie)
); */

const userQuery = query(
    collection(db, "usuarios"),
    where("__name__", "==", receitaSelecionada.usuario)
);

var userData = null;

const userSnapshot = await getDocs(userQuery);
userSnapshot.forEach((doc) => {
    userData = doc.data();
});

document.querySelector("#receita-autor").innerHTML =
    "autor: " + userData.usuario;

const storage = getStorage(app);

const pathReference = ref(storage, receitaSelecionada.imagemReceita);

const url = await getDownloadURL(pathReference);

console.log(url);

document.querySelector("#receita-img").src = url;
