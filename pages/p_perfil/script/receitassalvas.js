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
import getCookie from "../../../src/utils/getCookie";

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
const storage = getStorage(app);

const userCookie = getCookie("userid");

const receitasQuery = query(collection(db, "receitas"));

const userQuery = query(
    collection(db, "usuarios"),
    where("__name__", "==", userCookie)
);

var userSelecionado = null;

const userSnapshot = await getDocs(userQuery);
userSnapshot.forEach((doc) => {
    userSelecionado = doc;
});

var receitasSalvas = [];

if (userSelecionado.data().salvos) {
    if (userSelecionado.data().salvos.length >= 1) {
        const receitasSnapshot = await getDocs(receitasQuery);
        receitasSnapshot.forEach((doc) => {
            if (
                userSelecionado.data().salvos.some((receitaDoUser) => {
                    return receitaDoUser == doc.id;
                })
            ) {
                receitasSalvas.push(doc);
            }
        });
    }
}

const cardHolder = document.querySelector("#card-holder");

receitasSalvas.forEach(async (receita) => {
    const receitaDados = receita.data();

    const newChild = document.createElement("div");

    const pathReference = ref(storage, receitaDados.imagemReceita);

    const url = await getDownloadURL(pathReference);

    newChild.addEventListener("click", () => {
        document.cookie = "receita=" + receita.id + ";path=/";
        window.location.href = "../p_receita/p_receita.html";
    });

    newChild.innerHTML = `
    <div class="receita-salva-card">
                        <img src=${url} alt="" />
                        <div>
                            <h4>${receitaDados.nome}</h4>
                            <div class="amei-comment">
                                <div>
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_15_503)">
                                            <path
                                                d="M11.4105 17.6917L10.2021 16.5917C5.91048 12.7 3.07715 10.1333 3.07715 6.98333C3.07715 4.41667 5.09382 2.4 7.66048 2.4C9.11048 2.4 10.5021 3.075 11.4105 4.14167C12.3188 3.075 13.7105 2.4 15.1605 2.4C17.7271 2.4 19.7438 4.41667 19.7438 6.98333C19.7438 10.1333 16.9105 12.7 12.6188 16.6L11.4105 17.6917Z"
                                                fill="black"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_503">
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p>${receitaDados.curtidas}</p>
                                </div>
                            </div>
                        </div>
                    </div>
    `;

    cardHolder.appendChild(newChild);
});
