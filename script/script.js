
function calcularIMC(){
    let altura = Number.parseFloat(document.getElementsByTagName('input')[1].value)
    let peso = Number.parseFloat(document.getElementsByTagName('input')[2].value)
    let calculo = peso / (altura ** 2)

    document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)}</strong>`
}