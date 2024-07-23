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
import {
    getStorage,
    ref,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

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

const testQuery = query(collection(db, "receitas"));

var receitas_armazenadas = [];

const testSnapshot = await getDocs(testQuery);
testSnapshot.forEach((doc) => {
    receitas_armazenadas.push(doc);
});

function fazerList(receitasArray) {

    

    const suasReceitas = document.querySelector("#receita_listada");

    suasReceitas.innerHTML = "";

    receitasArray.forEach(async (receitaDoc) => {
        const receita = receitaDoc.data();

        const newChild = document.createElement("a");
        const pathReference = ref(storage, receita.imagemReceita);

        const url = await getDownloadURL(pathReference);
        newChild.innerHTML = `
                <div class="receita">
                    <div class="receita-info">
                        <h3>${receita.nome}</h3>
                        
                        <div class="tempo-porção">
                            <div>
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7.7 7.1225V4.9C7.7 4.70167 7.63303 4.5353 7.4991 4.4009C7.3647 4.26697 7.19833 4.2 7 4.2C6.80167 4.2 6.63553 4.26697 6.5016 4.4009C6.3672 4.5353 6.3 4.70167 6.3 4.9V7C6.3 7.23333 6.34083 7.44917 6.4225 7.6475C6.50417 7.84583 6.62667 8.02667 6.79 8.19L8.2775 9.6775C8.4175 9.8175 8.58387 9.8875 8.7766 9.8875C8.96887 9.8875 9.135 9.8175 9.275 9.6775C9.40333 9.5375 9.4675 9.37137 9.4675 9.1791C9.4675 8.98637 9.40333 8.82583 9.275 8.6975L7.7 7.1225ZM7 1.4C6.80167 1.4 6.63553 1.46697 6.5016 1.6009C6.3672 1.7353 6.3 1.90167 6.3 2.1C6.3 2.29833 6.3672 2.4647 6.5016 2.5991C6.63553 2.73303 6.80167 2.8 7 2.8C7.19833 2.8 7.3647 2.73303 7.4991 2.5991C7.63303 2.4647 7.7 2.29833 7.7 2.1C7.7 1.90167 7.63303 1.7353 7.4991 1.6009C7.3647 1.46697 7.19833 1.4 7 1.4ZM12.6 7C12.6 6.80167 12.5328 6.6353 12.3984 6.5009C12.2645 6.36697 12.0983 6.3 11.9 6.3C11.7017 6.3 11.5355 6.36697 11.4016 6.5009C11.2672 6.6353 11.2 6.80167 11.2 7C11.2 7.19833 11.2672 7.36447 11.4016 7.4984C11.5355 7.6328 11.7017 7.7 11.9 7.7C12.0983 7.7 12.2645 7.6328 12.3984 7.4984C12.5328 7.36447 12.6 7.19833 12.6 7ZM7 11.2C6.80167 11.2 6.63553 11.2672 6.5016 11.4016C6.3672 11.5355 6.3 11.7017 6.3 11.9C6.3 12.0983 6.3672 12.2645 6.5016 12.3984C6.63553 12.5328 6.80167 12.6 7 12.6C7.19833 12.6 7.3647 12.5328 7.4991 12.3984C7.63303 12.2645 7.7 12.0983 7.7 11.9C7.7 11.7017 7.63303 11.5355 7.4991 11.4016C7.3647 11.2672 7.19833 11.2 7 11.2ZM2.8 7C2.8 6.80167 2.73303 6.6353 2.5991 6.5009C2.4647 6.36697 2.29833 6.3 2.1 6.3C1.90167 6.3 1.7353 6.36697 1.6009 6.5009C1.46697 6.6353 1.4 6.80167 1.4 7C1.4 7.19833 1.46697 7.36447 1.6009 7.4984C1.7353 7.6328 1.90167 7.7 2.1 7.7C2.29833 7.7 2.4647 7.6328 2.5991 7.4984C2.73303 7.36447 2.8 7.19833 2.8 7ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0811 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.183867 8.87833 0 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.918867 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918633 4.27 0.5509C5.12167 0.183633 6.03167 0 7 0C7.96833 0 8.87833 0.183633 9.73 0.5509C10.5817 0.918633 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0811 3.41833 13.4484 4.27C13.8161 5.12167 14 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0811 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0811 9.73 13.4484C8.87833 13.8161 7.96833 14 7 14Z"
                                        fill="black"
                                    />
                                </svg>
                                <p>${receita.tempo}</p>
                            </div>
                            <div>
                                <svg
                                    width="23"
                                    height="19"
                                    viewBox="0 0 23 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 0H23V19H0V0Z"
                                        fill="url(#pattern0_118_755)"
                                    />
                                    <defs>
                                        <pattern
                                            id="pattern0_118_755"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlink:href="#image0_118_755"
                                                transform="matrix(0.00860507 0 0 0.0104167 0.0869565 0)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_118_755"
                                            width="96"
                                            height="96"
                                            xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEMElEQVR4nO2cTYsdRRSGn0lINgl+YRJxlTjqJhuTiIJGYtyIK+MkjqAgiMQ/EAU1oCYiqCOIuNaFjgFdxbWJg6ARv3bBmfFzowuNKE5EM0IsKTgXZpJ7u6vura6uvnkfOJue29XnPafrVHVV94AQQgghhBBCCCGEEEIIIUQ5TAC7gKPAHLAA/GU2b8eOADvbdnQcAz8NLAIu0HxyDti5YgQmgc8iAn+hfQpsUwaGYzfwywjB79lvwF1KQhx7gX8TBL9ny8AeJSGMbcCvCYO/sidcryRUMzFiza+zUxqYq3mgweD3bL96weC7fzFDAvwzg+jDzRmC37MdysDFPJ8xAc8pARczlzEBJ7uegPU2YB67YE1mwY5N229iWMyYgIUC9A6Nn0V8HyDyO2Aqot2ljAlYKkBvNGuBV4YQOwOs6WAC1jasN5phnOnZS4WVoPkC9EaxP4HofTXX+LCgQTiH3mDWW30b1aEfagaqIxkT8EwBeltZHri/4jo7MybgpgL0BnMsoUOzNUsRCxmC/3UheoP5JuP8+0CGBNxXkN4gljJO/yZsG7Gp4H8csBydU28QZxM69GfA9bY2uCEzWaDerPPz0C65x7YRU13Xt3VHwXqzDUpvR1z39oSb8ns7oHcg0wkd8oNs7P7wqRFr/tYO6W30weRbYN0Q15+wJ9P5yKnmVEf19mUqgUP3JvBjh22mnLSEnDWbt2PP1jxkdU3vKmZGcOZFusdMaXr9EuvLQ64MNrI82zDF6t1n9S2kBibvhi1QpN51ttA026cWz9ron2wAKoBLTa8QQgjB1cCdwEGbl78PfGmviZwBzpmdsWP+b8fttwdtUc+3IQK51mYbr1kw/0vwROosOW8BjwHb9Yr6arbb8kLMWs+o9qMl2X8GdUmyBTgMnM4Y9EF22nzZTEe4BngIeBW4JfLc64A3rW67wsz79MYQX1XearF40G6sRvB3x+O2Nn/eHPaDXSiXA68n3uVyDdmylafLIvQdt3N9bD4BDgGbSMAu2yFa7rPZHNpl7wF+LiCwLtJ+Au4O1Li5z16y71HvDPvl/o3AexWzkNB3H59e0WO6aOeBJwO1Dlo59TF8F7ghpJE1VmqqavS5wFr3QgEBdInMf71Tx5aaEvuPlaaBS9VXBL4g+0GAM48UEDSX2B4O0H0ioJ0TNiau4irgi0BHDgXcCX8UEDCX2H4PGPeeCGzrc+DKlR8ifBThyG01ThwuIFiuIXuqRvvuiLbmLPY8GumEn8tX8VUBgXINma8SVUxGtudLdfS/BthQ48Q4lh9n5rVVsTGyPf8eLH9HnlSHG3OrI6YtH/tWHXAdtNT6W3fAdcyUAJQA9YAKVIJQCWq9TjuNAe0HymkQbj9YTrOg8bM6ottr2wHXMVMCUALUAypQCaJjJUgIIYQQQgghhBBCCCGEEIw1/wM0UiIvl4A7TAAAAABJRU5ErkJggg=="
                                        />
                                    </defs>
                                </svg>
                                <p>${receita.porcoes}</p>
                            </div>
                        </div>
                    </div>
                    <div class="receita-img">
                        <img src="${url}" alt="" />
                    </div>
                </div>
            `;

        newChild.href = "../p_receita/p_receita.html"; // Atualize para o link correto, se necessário

        newChild.addEventListener("click", () => {
            document.cookie = "receita=" + receitaDoc.id + ";path=/";
        });

        suasReceitas.appendChild(newChild);
    });
}

function filterList(types, text) {
    var filterByType = receitas_armazenadas;
    if (types.length > 0) {
        
        filterByType = receitas_armazenadas.filter((receita) => {
            return types.some((type) => {
                return type == receita.data().tipo;
            });
        });
    }
    
    var filterByText = filterByType;
    if (filterByText != "") {
        filterByText = filterByType.filter((receita) => {
            return receita.data().nome.includes(text);
        });
    }
    fazerList(filterByText);
}

var selectedTypes = [];

let valorpesquisado = "";

filterList(selectedTypes, valorpesquisado)

document.querySelectorAll(".checkbox-tipo").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
        if (
            selectedTypes.some((type) => {
                return type == checkbox.getAttribute("name");
            })
        ) {
            selectedTypes = selectedTypes.filter((type) => {
                return type != checkbox.getAttribute("name")
            })
            console.log("removido");
            filterList(selectedTypes, valorpesquisado);

        } else {
            selectedTypes.push(checkbox.getAttribute("name"));
            console.log("adicionado");
            filterList(selectedTypes, valorpesquisado);
        }
    });
});

const pesquisado = document.getElementById("pesquisar-input");

function atualizarPesquisa(event) {
    valorpesquisado = event.target.value;
    console.log(valorpesquisado);
    filterList(selectedTypes, valorpesquisado);
}
pesquisado.addEventListener("input", (event) => {
    atualizarPesquisa(event);
});

