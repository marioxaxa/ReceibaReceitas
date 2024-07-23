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

import setCookie from "../../../src/utils/setCookie";

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
const auth = getAuth(app);

// Função para verificar se e-mail ou nome de usuário já estão em uso
async function isUserAlreadyExists(email, usuario) {
    const emailQuery = query(
        collection(db, "usuarios"),
        where("email", "==", email)
    );
    const usuarioQuery = query(
        collection(db, "usuarios"),
        where("usuario", "==", usuario)
    );

    const [emailSnapshot, usuarioSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(usuarioQuery),
    ]);

    return !emailSnapshot.empty || !usuarioSnapshot.empty;
}

// Adicionar evento para o botão de registro
document.getElementById("btnRegistrar").addEventListener("click", async (e) => {
    e.preventDefault();
    const login = document.getElementById("loginRegistro").value;
    const email = document.getElementById("emailRegistro").value;
    const senha = document.getElementById("senha2").value;

    // Verificar se o e-mail ou nome de usuário já estão em uso
    if (await isUserAlreadyExists(email, login)) {
        alert("E-mail ou nome de usuário já está em uso.");
        return;
    }

    try {
        await addDoc(collection(db, "usuarios"), {
            email: email,
            img: "",
            usuario: login,
            senha: senha,
        });
        alert("Usuário adicionado.");
    } catch (error) {
        console.error("Erro ao adicionar usuário: ", error);
    }
});

// Adicionar evento para o botão de login
document.getElementById("btnLogar").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha1").value;
    let naoCadastrado = true;

    try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        querySnapshot.forEach((doc) => {
            if (email === doc.data().email) {
                if (senha === doc.data().senha) {
                    setCookie('userid', doc.id, 1);
                    alert("Logado com sucesso");
                    window.location.href = "../p_perfil/p_perfil.html";
                } else {
                    alert("Senha diferente");
                }
                naoCadastrado = false;
            }
        });

        if (naoCadastrado) {
            alert("Usuário não encontrado");
        }
    } catch (error) {
        console.error("Erro ao obter documentos: ", error);
    }
});
