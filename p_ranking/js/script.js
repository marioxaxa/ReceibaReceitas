// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, query, orderBy, limit, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqfNOpVNGAzorp5_0tuaI1QDd0WDZXqSo",
  authDomain: "receibareceitas.firebaseapp.com",
  projectId: "receibareceitas",
  storageBucket: "receibareceitas.appspot.com",
  messagingSenderId: "21963335608",
  appId: "1:21963335608:web:6ad28cb59e8e253b13d14d",
  measurementId: "G-KQKYLWV1Z9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function fetchAndDisplayTopRecipes() {
  const receitasContainer = document.getElementById('receitas-container');
  receitasContainer.innerHTML = ''; 

  try {
    const q = query(collection(db, "receitas"), orderBy("curtidas", "desc"), limit(6));
    const querySnapshot = await getDocs(q);
    
    querySnapshot.forEach((doc) => {
      const receita = doc.data();
      
      const colDiv = document.createElement('div');
      colDiv.className = 'col-md-4';

      const cardDiv = document.createElement('div');
      cardDiv.className = 'card mb-5';

      const imgElement = document.createElement('img');
      imgElement.src = receita.img;
      imgElement.className = 'card-img-top';
      imgElement.alt = receita.nome;

      const cardBodyDiv = document.createElement('div');
      cardBodyDiv.className = 'card-body';

      const tipoP = document.createElement('p');
      tipoP.className = 'card-text';
      tipoP.textContent = receita.tipo || 'Tipo não especificado';

      const titleH5 = document.createElement('h5');
      titleH5.className = 'card-title';
      titleH5.textContent = receita.nome;

      const likesP = document.createElement('p');
      likesP.className = 'card-text';
      likesP.innerHTML = `<span><i class="bi bi-heart-fill" style="color: #de702b;"></i> ${receita.curtidas || 0} pessoas curtiram</span>`;

      cardBodyDiv.appendChild(tipoP);
      cardBodyDiv.appendChild(titleH5);
      cardBodyDiv.appendChild(likesP);

      cardDiv.appendChild(imgElement);
      cardDiv.appendChild(cardBodyDiv);

      colDiv.appendChild(cardDiv);
      receitasContainer.appendChild(colDiv);
    });
  } catch (error) {
    console.error("Erro ao obter receitas: ", error);
  }
}

fetchAndDisplayTopRecipes();