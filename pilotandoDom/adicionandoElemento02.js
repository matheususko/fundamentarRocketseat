// Adicionando elementos
const div = document.createElement("div");
div.innerText = "Olá dev!"

// innerBefore
// const body = document.querySelector('body')
// const script = body.querySelector('script')
// body.insertBefore(div, script)


// innerAfter, temos que fazer uma gambearra pq nao tem um metodo pra isso
const body = document.querySelector('body')
const header = body.querySelector('header')
body.insertBefore(div, header.nextElementSibling)