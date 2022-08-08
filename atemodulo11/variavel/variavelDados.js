// Variáveis e tipos de dados
// declaração or declaration
var name

// assingment or atribuição de valores
name = "Matheus"

// que tipo de dado foi colocado na variável
console.log(typeof name)

//let

// let age = 20
// let isHuman = true
// podemos fazer assim agrupar declarações
let age, isHuman
age = 22
isHuman = true

// Múltiplos argumentos
console.log(name, age,"is human?" + isHuman)

// Múltiplos argumentos na função + escrita de texto + variáveis
console.log('O ' + name + ' tem ' + age +' anos.')

// interpolando valores com template literals or template string
console.log(`o ${name} tem ${age} anos.`)