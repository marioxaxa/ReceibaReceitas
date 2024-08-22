import React from 'react'
import Header from '../../components/Header/Header'
import './EnviarReceita.css'

export default function EnviarReceita() {



  return (
    <div>
        <Header >
            
        </Header>
        <main>


            
            <section>
                <div id="nos-mande">
                    <h1>Nos mande sua receita</h1>
                </div>
                <div id="form-receita">
                    <form action="">
                        <div className="mb-1 row">
                            <div className="mb-0 col-8">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                    >Nome da Receita</label
                                >
                                <input
                                    type="text"
                                    className="form-control bg-secondary-subtle border border-secondary-subtle rounded-3"
                                    id="nome_receita"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-0 col">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label mb-6"
                                    >Tipo</label
                                >
                                <select
                                    id="tipo"
                                    className="form-select bg-secondary-subtle border border-secondary-subtle rounded-3 mt-2 form-control-lg"
                                    aria-label="Default select example"
                                >
                                    <option selected>Escolha o tipo</option>
                                    <option value="Ave">Ave</option>
                                    <option value="Bebida">Bebida</option>
                                    <option value="Carne">Carne</option>
                                    <option value="Fruto do Mar">
                                        Fruto do Mar
                                    </option>
                                    <option value="Lanche">Lanche</option>
                                    <option value="Massa">Massa</option>
                                    <option value="Salada">Salada</option>
                                    <option value="Sobremesa">Sobremesa</option>
                                    <option value="Sopa">Sopa</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-1 row">
                            <div className="mb-3 col-8">
                                <p id="erro_nome" className="error"></p>
                            </div>

                            <div className="mb-3 col">
                                <p id="erro_tipo" className="error"></p>
                            </div>
                        </div>
                        <div id="detalhes-receita" className="row">
                            <div className="mb-3 col">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                    >Tempo de Preparo</label
                                >
                                <input
                                    type="text"
                                    className="form-control bg-secondary-subtle border border-secondary-subtle rounded-3"
                                    id="tempo"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3 col">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                    >Número de Porções</label
                                >
                                <input
                                    type="text"
                                    className="form-control bg-secondary-subtle border border-secondary-subtle rounded-3"
                                    id="porções"
                                    placeholder=""
                                />
                            </div>
                            <div className="mb-3 col">
                                <label
                                    for="exampleFormControlInput1"
                                    className="form-label"
                                    >Imagem</label
                                >
                                <input
                                    className="form-control col bg-secondary-subtle border border-secondary-subtle rounded-3 mt-2"
                                    type="file"
                                    id="imagem"
                                />
                            </div>
                        </div>
                        <div className="mb-1 row">
                            <div className="col">
                                <p id="erro_tempo" className="error"></p>
                            </div>

                            <div className="col">
                                <p id="erro_porção" className="error"></p>
                            </div>

                            <div className="col">
                                <p id="erro_imagem" className="error"></p>
                            </div>
                        </div>
                        <div id="preparo-receita" className="row">
                            <div className="col-4">
                                <label
                                    for="exampleFormControlTextarea1"
                                    className="form-label"
                                    >Ingredientes</label
                                >
                                <textarea
                                    className="form-control bg-secondary-subtle border border-secondary-subtle rounded-3"
                                    id="ingredientes"
                                    rows="7"
                                ></textarea>
                            </div>
                            <div className="col-8">
                                <label
                                    for="exampleFormControlTextarea1"
                                    className="form-label"
                                    >Como fazer</label
                                >
                                <textarea
                                    className="form-control bg-secondary-subtle border border-secondary-subtle rounded-3"
                                    id="como_fazer"
                                    rows="7"
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <p id="erro_ingredientes" className="error"></p>
                            </div>

                            <div className="col-8">
                                <p id="erro_como_fazer" className="error"></p>
                            </div>
                        </div>

                        <button
                            id="botão_enviar_receita"
                            type="button"
                            className="btn btn-success d-flex align-items-center m-auto"
                        >
                            Enviar
                        </button>

                        <p id="receita_enviada" className="text-center"></p>
                    </form>
                </div>
            </section>
        </main>



    </div>
  )
}
