function criar_receita() {

 


var input1 = document.getElementById('nome_receita').value;
var input2 = document.getElementById('tipo').value;
var input3 = document.getElementById('tempo').value;
var input4= document.getElementById('porções').value;
var input5 = document.getElementById('imagem').value;
var input6= document.getElementById('ingredientes').value;
var input7 = document.getElementById('como_fazer').value;


var erro1 = document.getElementById('erro_nome');
var erro2 = document.getElementById('erro_tipo');
var erro3 = document.getElementById('erro_tempo');
var erro4 = document.getElementById('erro_porção');
var erro5 = document.getElementById('erro_imagem');
var erro6 = document.getElementById('erro_ingredientes');
var erro7 = document.getElementById('erro_como_fazer');

var envio = document.getElementById('receita_enviada');


 // Resetando mensagens de erro
 erro1.textContent = '';
 erro2.textContent = '';
 erro3.textContent = '';
 erro4.textContent = '';
 erro5.textContent = '';
 erro6.textContent = '';
 erro7.textContent = '';

envio.textContent = '';


// Testagens

var aceita = true;

if (!(input1.length > 0 && input1.length < 20)) {
    erro1.textContent = 'O nome deve ter entre 1 e 19 caracteres.';
    aceita = false;
}

if (input2 == "Escolha o tipo") {
    erro2.textContent = 'Selecione um tipo';
    aceita = false;
}

if (input3 == "") {
    erro3.textContent = 'Preencha o campo';
    aceita = false;
}

if (input4 == "") {
    erro4.textContent = 'Preencha o campo';
    aceita = false;
}

if (input5 == "") {
    erro5.textContent = 'Selecione uma imagem';
    aceita = false;
}

if (input6 == "") {
    erro6.textContent = 'Preencha o campo';
    aceita = false;
}

if (input7 == "") {
    erro7.textContent = 'Preencha o campo';
    aceita = false;
}

    if (aceita) {
    
        envio.textContent = 'Receita enviada com sucesso!';

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





}

//(document.getElementById("nome_receita").value)
