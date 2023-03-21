const form = document.getElementById('comparation-form')
const value_a = document.getElementById('value_A')
const value_b = document.getElementById('value_B')

function checkValue(value_a, value_b) {
    if (value_a < value_b) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', (event) => {

        event.preventDefault()

        let valueIsTrue = false
        const sucessMensagem = `O valor de "B" igual a ${value_b.value} é maior do que o valor de "A" que é ${value_a.value}`

        valueIsTrue = checkValue(value_a.value , value_b.value) 

        if (valueIsTrue) {
            const containerSucessMessage = document.querySelector('.sucess-message')
            containerSucessMessage.innerHTML = sucessMensagem
            containerSucessMessage.style.display = 'block'

            value_a.value = ''
            value_b.value = ''

        } else {
            value_b.style.border = '1px solid red'
            document.querySelector('.error-message').style.display = 'block'
        }
    })