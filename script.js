const form = document.getElementById('form')
const resposta = document.getElementById('resposta')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const count = document.getElementById('count-value')


let contador = 0
resposta.addEventListener('keydown', function(event) {
    let total = parseInt(num1.textContent) * parseInt(num2.textContent)

    if (event.key === 'Enter') {
        console.log(contador)
        if (parseInt(resposta.value) === total) {

            event.preventDefault();
            console.log('acertou')
            resposta.value = ''
            let ale1 = parseInt(Math.random() * 10)
            let ale2 = parseInt(Math.random() * 10)
            num1.textContent = ale1
            num2.textContent = ale2
            document.body.style.backgroundColor = '#1B9C85'
            contador++
            count.textContent = contador
        }
        else {
            event.preventDefault();
            console.log('errou')
            resposta.value = ''
            document.body.style.backgroundColor = '#FF0060'
            contador = 0
            count.textContent = contador
        }
    }
})



