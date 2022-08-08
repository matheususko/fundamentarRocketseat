// Criando e adicionando elementos

// createElement
const div = document.createElement('div')
div.innerText = "Olá devs!"
// append prepend

const body = document.querySelector('body')

//apprend adiciona depois
body.append(div)
//apprend adiciona antes
body.prepend(div)