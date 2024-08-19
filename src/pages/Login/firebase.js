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

// Função para registrar usuário
export const registerUser = async (email, password, userName) => {
    if (await isUserAlreadyExists(email, userName)) {
        throw new Error("E-mail ou nome de usuário já está em uso.");
    }

    await addDoc(collection(db, "usuarios"), {
        email,
        img: "",
        usario: userName,
        senha: password,
    });
};

// Função para fazer login
export const loginUser = async (email, password) => {
    try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        for (const doc of querySnapshot.docs) {
            const data = doc.data();
            if (email === data.email && password === data.senha) {
                return doc.id; // Usuário autenticado com sucesso
            }
        }
        throw new Error("Usuário não encontrado ou senha incorreta.");
    } catch (error) {
        throw error;
    }
};
