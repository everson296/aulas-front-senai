"use strict";

// const numero = [2,8,15,20,8];
// numeros.pop();       exclui o ultimo numero;
// numero.push("200");  adiciona na ultima casa do array o valor que desejar;

// console.log(numero);

const notas = [2,8,15,20,8];
const clientes = [
    { nome: "Everson", idade: 17, cidade: "jandira", },
    { nome: "fonso", idade: 19, cidade: "lugar nenhum", },
    { nome: "erick", idade: 16, cidade: "gabriela", },
    { nome: "chiquititas", idade: 16, cidade: "orfanato", }


];

const nome = prompt ("Digite seu nome");
const idade = prompt ("Digite sua idade");
const cidade = prompt ("Digite sua cidade");

clientes.push ( {"nome": nome, "idade": idade, "cidade": cidade});

// let notasAtualizadas = [];
// const limite =notas.length - 1;

// for(let i = 0 ; i<= limite ; i++ ){
//     notasAtualizadas.push( notas [i] * 10);

// }

// notas.push (confim("digite uma nota"));

const notasAtualizadas = notas.map ((nota) => nota * 20);
//## pode ser criada um metodo e mandar para os parenteses so metodo "map";
//map = retorna um novo array do mesmo tamanho modificado ou não;
/* 
    argumento :
        1° elemento;
        2° indice / i;
        3° array


*/
// const multiplicar10 = ( numero ) => numero * 10;
// const notasAtualizadas = notas.map (multiplicar10);

const notasAcimaDaMedia = notas.filter ( notas => notas >= 5);
//filter = retorna um novo array filtrado pela condição;
/* 
    argumento :
        1° elemento;
        2° indice / i;
        3° array


*/

const notasTotal = notas.reduce( (acc,notas) => acc + notas, 0 );
//reduce = retorna um unico valor;
/* 
    argumento :
        1° acumular;
        2° elemento;
        3° indice / i;
        4° array
*/

const notasPares100 = notas.filter(notas => notas % 2 == 0)
                           .map ( notas => notas + 100);

const exibirDados = (el, cliente, arr) => {
    el.innerHTML += `
        <div class="card text-white bg-info mb-3"> 
            <div class="card-header"> ${cliente.nome}</div> 
            <div class="card-body"> 
                <p>${cliente.cidade}</p>
                <p>${cliente.idade}</p>
            </div>  
        </div>`;
}

const $resultados = document.getElementById('resultados');

// exibirDados( $resultados, clientes[0]);
clientes.forEach (cliente => exibirDados ($resultados, cliente));


// exibirDados( $resultados, notas);
// exibirDados( $resultados, notasPares100);


