// if...else
// let temperature = 36.5

// if(temperature >= 37) {
//     console.log('Febre')
// } else {
//     console.log('Saúdavel')
// }

let temperature = 38
let hightTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(hightTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}