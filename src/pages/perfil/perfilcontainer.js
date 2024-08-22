import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import getCookie from "../../../src/utils/getCookie";

import app from "../../services/firebaseapp";


export default async function initializeContainer(userId) {


    // Inicializar o Firebase
    const db = getFirestore(app);


    const userQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", userId)
    );

    var userData = null;

    const userSnapshot = await getDocs(userQuery);
    userSnapshot.forEach((doc) => {
        userData = doc.data();
    });

    const h1username = document.querySelector("#h1-username");

    //h1username.innerHTML = userData.usuario;

    const receitasQuery = query(
        collection(db, "receitas"),
        where("usuario", "==", userId)
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
