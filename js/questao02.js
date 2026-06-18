const inputdivnum = document.querySelector('#num1')
const divNum = document.querySelector('#div-num')

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let Num = Number(inputdivnum.value)

    console.log(Num)


for(i = 0;i < Num; i++){
    if(Num % i == 0){
        console.log(Num)
        divNum.innerHTML +=  `${i} <br>`
    }
}

})





