
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

function getCookie(cname) {
  console.log("cookie pego");
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

async function getUserData() {
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

async function criar_receita() {
  var input1 = document.getElementById("nome_receita").value;
  var input2 = document.getElementById("tipo").value;
  var input3 = document.getElementById("tempo").value;
  var input4 = document.getElementById("porções").value;
  var input5 = document.getElementById("imagem").value;
  var input6 = document.getElementById("ingredientes").value;
  var input7 = document.getElementById("como_fazer").value;

  var erro1 = document.getElementById("erro_nome");
  var erro2 = document.getElementById("erro_tipo");
  var erro3 = document.getElementById("erro_tempo");
  var erro4 = document.getElementById("erro_porção");
  var erro5 = document.getElementById("erro_imagem");
  var erro6 = document.getElementById("erro_ingredientes");
  var erro7 = document.getElementById("erro_como_fazer");
  var envio = document.getElementById("receita_enviada");

  // Resetando mensagens de erro
  erro1.textContent = "";
  erro2.textContent = "";
  erro3.textContent = "";
  erro4.textContent = "";
  erro5.textContent = "";
  erro6.textContent = "";
  erro7.textContent = "";
  envio.textContent = "";

  // Testagens
  var aceita = true;

  if (!(input1.length > 0 && input1.length < 20)) {
    erro1.textContent = "O nome deve ter entre 1 e 19 caracteres.";
    aceita = false;
  }

  if (input2 == "Escolha o tipo") {
    erro2.textContent = "Selecione um tipo";
    aceita = false;
  }

  if (input3 == "") {
    erro3.textContent = "Preencha o campo";
    aceita = false;
  }

  if (input4 == "") {
    erro4.textContent = "Preencha o campo";
    aceita = false;
  }

  if (input5 == "") {
    erro5.textContent = "Selecione uma imagem";
    aceita = false;
  }

  if (input6 == "") {
    erro6.textContent = "Preencha o campo";
    aceita = false;
  }

  if (input7 == "") {
    erro7.textContent = "Preencha o campo";
    aceita = false;
  }

  if (aceita) {
    envio.textContent = "Receita enviada com sucesso!";

    var receita_criada = {
      nome: input1,
      tipo: input2,
      tempo: input3,
      porcoes: input4,
      imagemReceita: input5,
      ingredientes: input6,
      preparo: input7,
      curtidas: 0,
      usuario: getCookie('userid'),
    };

    try {
      const docRef = await addDoc(collection(db, "receitas"), receita_criada);
      console.log("Documento escrito com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar documento: ", e);
    }
  }

  return false; // Prevenir o envio do formulário
}

document.addEventListener("DOMContentLoaded", () => {
    
  document
    .getElementById("botão_enviar_receita")
    .addEventListener("click", criar_receita);
});

//(document.getElementById("nome_receita").value)
