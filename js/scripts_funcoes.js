
function mensagem() {
    console.log('Uma mensagem')
}

mensagem()

function mensagemlinda(txt) {
    console.log(txt)
}

mensagemlinda('Brasil vai dar um pau no Haiti')

function somaNumeros(num1, num2) {
    return num1 + num2
}

console.log('A soma dos numeros ', somaNumeros(10, 58))

const multiplicacao = function (num1, num2) {
    return num1 * num2
}

console.log('A multiplicação dos numero ', multiplicacao(64, 5))

console.log('-----> ARROW FUNCTION <-----')

const msgArrow = () => {
    console.log(' Outra mensagem na Arrow function')

}

msgArrow()

const divisaoNum = (valor1, valor2) => {

let respostas

    if(valor1 > 0 && valor2 > 0){
        respostas = valor1 / valor2
    }else{
    respostas = 'não é possivel fazer uma divisão por 0'
    }

return respostas

}

console.log(divisaoNum(10,2))

console.log(Math.random())

console.log('Numero Sorteado', parseInt(Math.random() * 100))
/*

setTimeout(() => {
    console.log('Executou apos 5s')
    console.log('Numero Sorteado 2', parseInt(Math.random() * 100))
}, 5000);

let cont = 0

const intervalo = setInterval(() => {
    cont++
    console.log(cont, 'Repetição de setInterval')


if (cont == 5){
    clearInterval(intervalo)
}

}, 3000)
*/


let contVolta = 0, numSorteado = 0

const sorteo = setInterval(() => {
    contVolta++ 

numSorteado = parseInt(Math.random() * 10)

console.log(`${contVolta}º número sorteado ${numSorteado}`)

divNumSorteio.innerHTML += (`${contVolta}º número sorteado ${numSorteado} <br>`)


if (numSorteado == 9){
    console.log('SORTEIO INCERRADO')
    clearInterval(sorteo)
    contVolta = 0
    numSorteado = 0


}
}, 2);

const divNumSorteio = document.querySelector('#div-num-sorteio')

