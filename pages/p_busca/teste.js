// Importar as funções necessárias dos SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    collection,
    getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import {
    getStorage,
    ref,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID",
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

let receitas = [];

async function listarReceitas() {
    const listaReceitas = document.getElementById("listaReceitas");

    try {
        const querySnapshot = await getDocs(collection(db, "receitas"));
        querySnapshot.forEach((doc) => {
            receitas.push(doc.data());
        });
        exibirReceitas(receitas);
    } catch (e) {
        console.error("Erro ao buscar receitas: ", e);
    }
}

function exibirReceitas(receitas) {
    const listaReceitas = document.getElementById("listaReceitas");
    listaReceitas.innerHTML = "";

    receitas.forEach(async (receita) => {
        

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <h2>${receita.nome}</h2>
            <p><strong>Tipo:</strong> ${receita.tipo}</p>
            <p><strong>Tempo de Preparo:</strong> ${receita.tempo}</p>
            <p><strong>Porções:</strong> ${receita.porcoes}</p>
            <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
            <p><strong>Modo de Preparo:</strong> ${receita.preparo}</p>
            <img src="${url}" alt="Imagem da receita">
        `;
        listaReceitas.appendChild(listItem);
    });
}

function filtrarReceitas() {
    const nomeFiltro = document
        .getElementById("pesquisarNome")
        .value.toLowerCase();
    const tiposFiltro = Array.from(
        document.querySelectorAll(".filtroTipo:checked")
    ).map((checkbox) => checkbox.value);

    const receitasFiltradas = receitas.filter((receita) => {
        const nomeMatch = receita.nome.toLowerCase().includes(nomeFiltro);
        const tipoMatch =
            tiposFiltro.length === 0 || tiposFiltro.includes(receita.tipo);
        return nomeMatch && tipoMatch;
    });

    exibirReceitas(receitasFiltradas);
}

document.addEventListener("DOMContentLoaded", () => {
    listarReceitas();

    document
        .getElementById("pesquisarNome")
        .addEventListener("input", filtrarReceitas);
    document.querySelectorAll(".filtroTipo").forEach((checkbox) => {
        checkbox.addEventListener("change", filtrarReceitas);
    });
});
