

let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()

    let inputNome = document.forms['formCadastro'] ['nome']

    if(!inputNome.value){
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Escreva seu nome corretamente'
    }else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }

    
    let inputNome = document.forms['formCadastro'] ['nome']

    if(!inputNome.value){
        inputNome.classList.add('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = 'Escreva seu nome corretamente'
    }else {
        inputNome.classList.remove('inputError')

        let span = inputNome.nextSibling.nextSibling
        span.innerText = ''
    }
}