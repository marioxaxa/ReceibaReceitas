

import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import app from "../services/firebaseapp";

export default async function getUserInfo(id) {

    const db = getFirestore(app);

    const testQuery = query(
        collection(db, "usuarios"),
        where("__name__", "==", id)
    );

    var userData = null;

    const testSnapshot = await getDocs(testQuery);
    testSnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        userData = doc.data();
    });

    return userData;
}
