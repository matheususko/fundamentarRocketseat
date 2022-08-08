// for...in
// Criar um loop encima de um objeto, pegando as propriedade do objeto

let person = {
    name: 'Matt',
    age: 30,
    weight: 60.5
}

for(let property in person){
    console.log(property)
    console.log(person["name"])
    console.log(person.name)
    console.log(person[property])
}