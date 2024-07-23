import {
  initializeApp,
  getApps,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  query,
  where,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID",
};

// Inicializar o Firebase se ainda não estiver inicializado
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();
const auth = getAuth();

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function init() {
  const receitaCookie = getCookie("receita");
  const receitaQuery = query(
    collection(db, "receitas"),
    where("__name__", "==", receitaCookie)
  );

  var receitaSelecionada = null;

  const receitaSnapshot = await getDocs(receitaQuery);
  receitaSnapshot.forEach((doc) => {
    receitaSelecionada = doc;
  });

  if (!receitaSelecionada) {
    console.error("Receita não encontrada");
    return;
  }

  async function like() {
    const ref = doc(db, "receitas", receitaSelecionada.id);
    await setDoc(
      ref,
      { curtidas: receitaSelecionada.data().curtidas + 1 },
      { merge: true }
    );
  }

  document.querySelector("#amei-div").addEventListener("click", like);

  const userCookie = getCookie("userid");
  if (userCookie) {
    const userQuery = query(
      collection(db, "usuarios"),
      where("__name__", "==", userCookie)
    );

    var userSelecionada = null;

    const userSnapshot = await getDocs(userQuery);
    userSnapshot.forEach((doc) => {
      userSelecionada = doc;
    });

    if (!userSelecionada) {
      console.error("Usuário não encontrado");
      return;
    }

    async function salvar() {
      const ref = doc(db, "usuarios", userSelecionada.id);

      var salvosArray = [];

      if (userSelecionada.data().salvos) {
        salvosArray = userSelecionada.data().salvos;
      }

      salvosArray.push(receitaSelecionada.id);
      await setDoc(ref, { salvos: salvosArray }, { merge: true });
    }

    document.querySelector("#salvar-div").addEventListener("click", salvar);

    // Funções para comentários
    async function adicionarComentario() {
      const comentarioInput = document.querySelector("#comment-input");
      const comentarioTexto = comentarioInput.value.trim();
      const usuarioId = getCookie("userid"); // Supondo que você armazena o ID do usuário em um cookie

      if (comentarioTexto === "" || !usuarioId) {
        alert("Digite um comentário e certifique-se de que está logado.");
        return;
      }

      try {
        const comentariosRef = collection(db, "comentarios");
        await addDoc(comentariosRef, {
          texto: comentarioTexto,
          receitaId: receitaSelecionada.id,
          usuarioId: userSelecionada.id,
          timestamp: new Date(),
        });
        comentarioInput.value = ""; // Limpar o campo de comentário
        carregarComentarios(); // Atualizar a lista de comentários
      } catch (error) {
        console.error("Erro ao adicionar comentário: ", error);
      }
    }

    // Adiciona o evento ao botão de adicionar comentário
    document
      .querySelector("#comment-submit")
      .addEventListener("click", adicionarComentario);

    async function removerComentario(comentarioId) {
      await deleteDoc(doc(db, "comentarios", comentarioId));
      carregarComentarios();
    }

    async function carregarComentarios() {
      const comentariosQuery = query(
        collection(db, "comentarios"),
        where("receitaId", "==", receitaSelecionada.id)
      );

      const comentariosSnapshot = await getDocs(comentariosQuery);
      const comentariosList = document.getElementById("comentarios-list");
      comentariosList.innerHTML = ""; // Limpa a lista de comentários

      for (const doc of comentariosSnapshot.docs) {
        const comentario = doc.data();
        const usuarioQuery = query(
          collection(db, "usuarios"),
          where("__name__", "==", comentario.usuarioId)
        );

        const usuarioSnapshot = await getDocs(usuarioQuery);
        let usuarioNome = "Desconhecido";

        usuarioSnapshot.forEach((userDoc) => {
          console.log(userDoc.data());
          usuarioNome = userDoc.data().usuario || "Desconhecido"; // Supondo que você armazena o nome do usuário
        });

        const comentarioDiv = document.createElement("div");
        comentarioDiv.className = "comment-card"; // Adiciona a classe de estilo
        comentarioDiv.innerHTML = `
                        <div class="card mb-3 text-left" style="max-width: 540px;">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <svg
                        width="80"
                        height="80"
                        viewBox="0 0 101 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M50.5 0C22.624 0 0 22.4 0 50C0 77.6 22.624 100 50.5 100C78.376 100 101 77.6 101 50C101 22.4 78.376 0 50.5 0ZM50.5 20C60.2465 20 68.175 27.85 68.175 37.5C68.175 47.15 60.2465 55 50.5 55C40.7535 55 32.825 47.15 32.825 37.5C32.825 27.85 40.7535 20 50.5 20ZM50.5 90C40.2485 90 28.1285 85.9 19.493 75.6C28.0275 69 38.784 65 50.5 65C62.216 65 72.9725 69 81.507 75.6C72.8715 85.9 60.7515 90 50.5 90Z"
                            fill="black"
                        />
                    </svg>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Comentado por: ${usuarioNome}</h5>
                                    <p class="card-text">${comentario.texto}</p>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                `;
        comentariosList.appendChild(comentarioDiv);

        const todosOsBotoes = document.querySelectorAll(".comment-card");
        todosOsBotoes.forEach((btn) => {
          if (userSelecionada.id == comentario.usuarioId) {
            console.log(userSelecionada.id);
            console.log(comentario.usuarioId);
            console.log(btn);
            if (!comentarioDiv.querySelector(".remover-comentario")) {
              const nvbtn = document.createElement("button");
              nvbtn.innerHTML = `<button class="remover-comentario" data-id="${doc.id}">Remover</button>`;
              comentarioDiv.querySelector(".card-body").appendChild(nvbtn);
            }
          }
        });
      }

      // Adiciona o evento de remover para cada botão
      document.querySelectorAll(".remover-comentario").forEach((button) => {
        button.addEventListener("click", (e) => {
          const comentarioId = e.target.getAttribute("data-id");
          removerComentario(comentarioId);
        });
      });
    }

    // Carregar comentários iniciais
    carregarComentarios();
  } else {
    document.querySelector("#salvar-div").remove();
    document.querySelector("#amei-div").remove();
    document.getElementById("comment-input").remove();
    document.getElementById("comment-submit").remove();
  }

  document.getElementById("receita-nome").innerText =
    receitaSelecionada.data().nome;
  document.getElementById("receita-img").src =
    receitaSelecionada.data().imagemReceita;
}

document.addEventListener("DOMContentLoaded", init);
