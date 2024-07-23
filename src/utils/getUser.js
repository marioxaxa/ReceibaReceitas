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

export default async function getUserData() {
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

    const userCookie = getCookie("userid");

    console.log(userCookie);

    const testQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", userCookie)
    );

    var userData = null;

    const testSnapshot = await getDocs(testQuery);
    testSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        userData = doc.data();
    });

    return userData;
}
