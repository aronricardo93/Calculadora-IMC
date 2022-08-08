
function calcularIMC(){
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let idade = Number.parseInt(document.getElementsByTagName('input')[2].value)
    let altura = Number.parseFloat(document.getElementsByTagName('input')[3].value)
    let peso = Number.parseFloat(document.getElementsByTagName('input')[4].value)
    let calculo = peso / (altura ** 2)

    if(sexo == 'masculino'){
        if(calculo < 20){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Abaixo do normal)</strong>`
        }else if(calculo > 20 && calculo <= 24.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Normal)</strong>`
        }else if(calculo >= 25 && calculo <= 29.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Sobrepeso)</strong>`
        }else if(calculo >= 30 && calculo <= 39.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Obesidade Moderada)</strong>`
        }else{
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Obesidade Mórbida)</strong>`
        }
    }else{
        if(calculo < 19){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Abaixo do normal)</strong>`
        }else if(calculo > 19 && calculo <= 23.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Normal)</strong>`
        }else if(calculo >= 24 && calculo <= 28.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Sobrepeso)</strong>`
        }else if(calculo >= 29 && calculo <= 38.9){
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Obesidade Moderada)</strong>`
        }else{
            document.querySelector('p').innerHTML = `<strong>O seu IMC é: ${calculo.toFixed(2)} (Obesidade Mórbida)</strong>`
        }
    }


}