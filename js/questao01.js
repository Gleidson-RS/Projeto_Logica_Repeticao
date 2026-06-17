//ESTRUTURA DE REPETIÇÃO FOR
/*
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
*/


const divfor = document.querySelector('#div-Num7')

let NumDiv7 = 0

let acum = 0.0
acum += NumDiv7

for(i = 0;i < 1000; i++){
if(i % 7 == 0){
    console.log(i)
    divfor.innerHTML +=  `${i} <br>`
}
}



