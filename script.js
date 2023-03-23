// DOM - document object model
// DOM – это объектное представление исходного HTML-кода документа.
// Процесс формирования DOM происходит так: браузер получает HTML-код, парсит его и строит DOM.

const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')
const buttonMultiplication = document.querySelector('.multiplication')
const buttonDivision = document.querySelector('.division')
const res = document.querySelector('#result')
const NumbersButton = document.querySelectorAll('[data-button]')
const buttonReset = document.querySelector('.btn-reset')
const buttonEqual = document.querySelector('.btn-equal')
const buttonClear = document.querySelector('.btn-clear')


let num = "0"
res.innerText = num

buttonClear.addEventListener('click', () => {
    num = '0'
    res.innerText = num
    buttonPlus.disabled = false
    buttonMinus.disabled = false
})


NumbersButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (num === '0') {
            res.innerText = button.innerText
        } else {
            res.innerText = res.innerText +  button.innerText
        }
        num = res.innerText
    })
})

buttonReset.addEventListener('click', () => {
    if (num !== '0'){
        if (num.length > 1){
            num = num.slice(0, -1)
            res.innerText = num
        } else {
            num = '0'
            res.innerText = num
            buttonPlus.disabled = false
            buttonMinus.disabled = false
        }
    }
})


buttonEqual.addEventListener('click', () => {
    if (res.innerText.includes('-')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('-')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('-')+1, res.innerText.length))
        res.innerText = a - b
    } else if (res.innerText.includes('+')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('+')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('+'), res.innerText.length))
        res.innerText = a + b
    } else if (res.innerText.includes('*')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('*')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('*')+1, res.innerText.length))
        res.innerText = a * b
    } else if (res.innerText.includes('/')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('/')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('/')+1, res.innerText.length))
        res.innerText = a / b
    }

})



buttonPlus.addEventListener('click', () => {
    if (res.innerText.includes('+')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('+')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('+'), res.innerText.length))
        res.innerText = a + b
    } else {
        res.innerText = res.innerText + buttonPlus.innerText
    }
})

buttonMinus.addEventListener('click', () => {
    if (res.innerText.includes('-')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('-')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('-'), res.innerText.length))
        res.innerText = `${a}-${b}`
    } else {
        res.innerText = `${res.innerText}${buttonMinus.innerText}`
    }
})


buttonMultiplication.addEventListener('click', () => {
    if (res.innerText.includes('*')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('*')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('*'), res.innerText.length))
        res.innerText = `${a}*${b}`
    } else {
        res.innerText = `${res.innerText}${buttonMultiplication.innerText}`
    }
})



buttonDivision.addEventListener('click', () => {
    if (res.innerText.includes('/')){
        let a = Number(res.innerText.slice(0, res.innerText.indexOf('/')))
        let b = Number(res.innerText.slice(res.innerText.indexOf('/'), res.innerText.length))
        res.innerText = `${a}/${b}`
    } else {
        res.innerText = `${res.innerText}${buttonDivision.innerText}`
    }
})




// TODO: fix minus, umnojenie - если сразу два минуса ломается 9--9