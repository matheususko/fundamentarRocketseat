// throw = disparar/lançar

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário")
    }

    console.log(name)
}

//try...catch = tentar...pegar ... uncaught ('nao pego')



try {
    sayMyName('Math')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')