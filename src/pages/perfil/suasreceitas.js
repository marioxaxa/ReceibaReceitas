import { getDownloadURL, getStorage, ref } from "firebase/storage";
import app from "../../services/firebaseapp";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";



export default async function suasReceitas(userId){

    const db = getFirestore(app);


    const testQuery = query(
        collection(db, "receitas"),
        where("usuario", "==", userId)
    );
    
    var receitasDoUser = [];
    
    const testSnapshot = await getDocs(testQuery);
    testSnapshot.forEach((doc) => {
        const obj = doc.data();
        obj.id = doc.id;
        receitasDoUser.push(obj);
    });
    
    const storage = getStorage(app);

    
    const suasReceitas = document.querySelector("#suas-receitas-card");
    
    receitasDoUser.forEach(async (receita) => {

        console.log(receita)

        const pathReference = ref(storage, receita.imagemReceita);
    
        const url = await getDownloadURL(pathReference);

        receita.url = url
    
        /*
        const newChild = document.createElement("a");
        newChild.innerHTML = `<a href="../p_receita/p_receita.html" id=${receita.id}>
                                <div class="sua-receita-card">
                                    <img
                                        src="${url}"
                                        alt=""
                                    /> 
                                    <div>
                                        <h4>${receita.nome}</h4>
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
                                                <p>${receita.curtidas}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>`;
    
        newChild.addEventListener("click", () => {
            document.cookie = "receita=" + receita.id + ";path=/";
        });
    
        suasReceitas.appendChild(newChild);
        */
    });
    console.log(receitasDoUser)
    return receitasDoUser
}
