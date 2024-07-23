import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDocs,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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

function getCookie(cname) {
    console.log("cookie pego");
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

const receitaCookie = getCookie("receita");
console.log(receitaCookie);
const receitaQuery = query(
    collection(db, "receitas"),
    where("__name__", "==", receitaCookie)
);

var receitaSelecionada = null;

const receitaSnapshot = await getDocs(receitaQuery);
receitaSnapshot.forEach((doc) => {
    receitaSelecionada = doc;
});

async function like() {
    const ref = doc(db, "receitas", receitaSelecionada.id);
    console.log(receitaSelecionada.data().curtidas + 1);
    await setDoc(
        ref,
        { curtidas: receitaSelecionada.data().curtidas + 1 },
        { merge: true }
    );
}

document.querySelector("#amei-div").addEventListener("click", like);

const userCookie = getCookie("userid");
console.log("aaaaaa");
console.log(userCookie);
if (userCookie) {
    console.log(userCookie);
    const userQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", userCookie)
    );

    var userSelecionada = null;

    const userSnapshot = await getDocs(userQuery);
    userSnapshot.forEach((doc) => {
        userSelecionada = doc;
    });

    async function salvar() {
        const ref = doc(db, "usuarios", userSelecionada.id);

        var salvosArray = [];

        if (userSelecionada.data().salvos) {
            salvosArray = userSelecionada.data().salvos;
        }

        salvosArray.push(receitaSelecionada.id);
        console.log("salvar");
        await setDoc(ref, { salvos: salvosArray }, { merge: true });
    }

    document.querySelector("#salvar-div").addEventListener("click", salvar);
} else {
    document.querySelector("#salvar-div").remove()
    document.querySelector("#amei-div").remove()
}
