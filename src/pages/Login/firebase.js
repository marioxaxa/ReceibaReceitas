// Importar as funções necessárias dos SDKs

import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../../services/firebaseapp";

const db = getFirestore(app);

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


    const querySnapshot = await getDocs(collection(db, "usuarios"));
    for (const doc of querySnapshot.docs) {
        const data = doc.data();
        if (email === data.email && password === data.senha) {
            return doc.id; // Usuário autenticado com sucesso
        }
    }
};
