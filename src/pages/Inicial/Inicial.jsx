import React from 'react';
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header/Header";
import './style.css'; 

function Inicial() {
    return (
        <div>
            <Header />
            <div className="imgs">
                <img className="cozinheiros" src="/imagens/cozinheiros.png" alt="" />
                <img className="vetor1" src="/imagens/vetor1.png" alt="" />
                <img className="vetor2" src="/imagens/vetor2.png" alt="" />
            </div>

            <div className="conteudo">
                <p>Nossas receitas mais perto de você</p>
                <h1>IMPRESSIONE SEUS AMIGOS!</h1>
                <p>
                    Acesse nosso site e descubra novas receitas para inovar seus pratos,
                    tudo que você precisa para aprender a fazer refeições, sobremesas,
                    drinks e muito mais, está aqui.
                </p>
                <a href="/pages/p_ranking/index.html" style={{ textDecoration: 'none' }}>
                    <button>
                        <h2>Descobrir</h2>
                        <img src="/imagens/icone.png" alt="" />
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Inicial;