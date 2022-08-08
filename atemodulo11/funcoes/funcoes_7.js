// callback function - chamar de volta

function sayMyName(name) {
    console.log('Antes de executar a função callback')

    name()

    console.log('depois de executar a callback')
}

// callback é uma função passada como parametro em uma função
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)