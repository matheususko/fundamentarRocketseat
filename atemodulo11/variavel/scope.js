// console.log("sobre scope:")
// {
//  let x = 0
//  console.log(x)
// }
// var é global e, também local
// console.log("var é global e, também local")

// console.log('> existe x antes do global? ', x)
// {
//     var y = 0
// }

// hoisting = elevação essa app é a mesma de cima
// var y
// console.log('> existe x antes do global? ', x)
// {
//     y = 0
// }
// console.log('> existe x depois do blocl? ', y)

// const e let são locais e só funcionam no escopo onde foi criado
// console.log("const e let são locais e só funcionam no escopo onde foi criado");

// {
//     let y = 0
//     console.log('> existe y ', y)
// }

// console.log('> existe y depois do bloco? ', y)
let y = 1;
{
    y = 0
    console.log('> existe y ', y)
}

console.log('> existe y depois do bloco? ', y)

const x = 1;
{
   const  x = 0
    console.log('> existe x ', x)
}

console.log('> existe x depois do bloco? ', x)