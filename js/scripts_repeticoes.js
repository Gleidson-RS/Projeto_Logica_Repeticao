//ESTRUTURA DE REPETIÇÃO FOR
const divFor = document.querySelector('#div-for')

for(i = 0;i < 10; i++ ){
    console.log(i, 'Amor')
    divFor.innerHTML += `${i} - Amor <br>`
}

//CONTADOR/ACUMULADOR 
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> A SOMA DOS NÚMEROS É: ${acum}`

    inputNum.value = ''
})

//CONTROLADOR FOR

const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', evt => {
   let NumRepeticao = Number(inputNumRepeticao.value)
   let frase = inputFrase.value

   for (i = 0;i < NumRepeticao; i++ ){
    divFrase.innerHTML += `${i + 1} - ${frase} <br>`
   }
})
//COLEÇÃO DE DADOR ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa Do Mengão','Doleira', 'Tênis da Abibas']

const divArray = document.querySelector('#div-array')

for(i = 0;i < 5; i++){
    divArray.innerHTML += `${presentes[i]} <br>`
}

//FOR IN
const divForIn = document.querySelector('#div-forin')

for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`
}
//FOR OF
const divForOF = document.querySelector('#div-forof')

for (let elemento of presentes){
 divForOF.innerHTML += `${elemento} <br>`
}

//FOREACH
const divForeach = document.querySelector('#div-foraech')

presentes.forEach((elemento, posicao) =>{
    divForeach.innerHTML += `${posicao} - ${elemento} <br>`
})


const pessoas = [
    {nome: 'Maria Flor', idade: 25, renda:1800},
    {nome: 'Joerdson Souza', idade: 75, renda:5000},
    {nome: 'Taoca', idade: 28, renda:500},
    {nome: 'Chicó', idade: 36, renda:100},
    {nome: 'João Grilo', idade: 36, renda:80},

]
