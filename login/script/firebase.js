// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, setDoc, addDoc, doc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


btnRegistrar.addEventListener('click', (e)=>{
    var login = document.getElementById('loginRegistro').value;
    var email = document.getElementById('emailRegistro').value;
    var senha = document.getElementById('senha2').value;

    addDoc(collection(db, "usuarios"), {
        email: email,
        img:"",
        usuario: login,
        senha: senha
      });
    
    alert("Usuario adicionado.")
});

btnLogar.addEventListener('click', (e)=>{
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha1').value;
    var naoCadastrado = true;

    getDocs(collection(db, "usuarios")).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (email == doc.data().email) {
                if(senha == doc.data().senha){
                    alert('Logado com sucesso')
                    window.location.href = "../p_perfil/p_perfil.html";
                }else{
                    alert('Senha diferente')
                }
                naoCadastrado = false;
            }
        });

        if (naoCadastrado) {
            alert('Usuario não encontrado')
        }
    }).catch((error) => {
        console.error("Erro ao obter documentos: ", error);
    });
});