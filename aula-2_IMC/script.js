"use strict";

const calcularIMC = (peso, altura) => peso / (altura * altura);

const definirEstado = (imc) => {
    let msg;

    if(imc <= 18.5){
        msg = "baixo do peso. Atenção";
    }else if(imc <= 24.9){
        msg = "peso ideal";
    }else if(imc <= 29.9){  
        msg = "levemente acima do peso";
    }else if(imc <= 34.9){
        msg = "obesidade gra I";
    }else if(imc <= 39.9){
        msg = "obesidade grau II. Atenção"; 
    }else{
        msg = "obesidade grau III. Morbida";
    }

    return msg;
}

const exibirResultado = () => {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const $resultado = document.getElementById('resultado');
    const imc = calcularIMC(peso, altura);
    const estado = definirEstado (imc);

    $resultado.innerHTML = `${nome} seu IMC foi de ${imc} voce esta ${estado}`;
}



document.getElementById('calcular')
    .addEventListener ('click', exibirResultado);
