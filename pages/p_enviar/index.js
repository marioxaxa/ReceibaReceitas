function criar_receita() {

 


var receita_criada = {
nome: (document.getElementById("nome_receita").value),
tipo: (document.getElementById("tipo").value),
tempo: (document.getElementById("tempo").value),
porcoes: (document.getElementById("porções").value),
imagemReceita: (document.getElementById("imagem").value),
ingredientes: (document.getElementById("ingredientes").value),
preparo : (document.getElementById("como_fazer").value)
}

console.log(JSON.stringify(receita_criada))

}

//(document.getElementById("nome_receita").value)
