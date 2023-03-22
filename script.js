// DOM - document object model
// DOM – это объектное представление исходного HTML-кода документа.
// Процесс формирования DOM происходит так: браузер получает HTML-код, парсит его и строит DOM.

const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonMultiplication = document.querySelector('.multiplication')
const buttonDivision = document.querySelector('.division')
const res = document.querySelector('#result')


let num = 0
res.innerText = num

buttonPlus.addEventListener('click', () => {
    if (num < 10)  res.innerText = num += 1
    buttonPlus.disabled = true
})

buttonMinus.addEventListener('click', () => {
    if (num > 0) {
        res.innerText = num -= 1
        buttonMinus.disabled = false
    }
})

buttonMultiplication.addEventListener('click', () => {
    num *= num
    res.innerText = num
})

buttonDivision.addEventListener('click', () => {
    num /= 2
    res.innerText = num
})