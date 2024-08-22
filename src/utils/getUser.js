import getCookie from "../../../src/utils/getCookie";

// Importar as funções necessárias dos SDKs
import app from "../../services/firebaseapp";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    where,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

export default async function getUserData() {

    const db = getFirestore(app);

    const userCookie = getCookie("userid");


    const testQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", userCookie)
    );

    var userData = null;

    const testSnapshot = await getDocs(testQuery);
    testSnapshot.forEach((doc) => {
        userData = doc.data();
    });

    return userData;
}
