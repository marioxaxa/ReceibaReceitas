function mostrarSenha1(){
    var inputPass = document.getElementById('senha1')
    var btnShowPass = document.getElementById('btn-senha1')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
    
}

function mostrarSenha2(){
    var inputPass = document.getElementById('senha2')
    var btnShowPass = document.getElementById('btn-senha2')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
    
}

function mostrarSenha3(){
    var inputPass = document.getElementById('senha3')
    var btnShowPass = document.getElementById('btn-senha3')

    if (inputPass.type === 'password') {
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute('type','password')
        btnShowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
    
}