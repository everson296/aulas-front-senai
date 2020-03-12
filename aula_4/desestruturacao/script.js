"use strict"

const alunoA = ['everson', '10', '8', '6'];

// const nota1 = aluno[1] ? aluno[1] : 0; tratamento de erros
const [nomeA, n1, n2, n3] = alunoA;

// console.log (nomeA);

const aluno = {
    nota:"Everson",
    nota1: '5',
    nota2: '8',
    nota3: '10',
    turma: "DS52M"
};

// const { turma:t, nota3} = aluno;

// console.log ( t, nota3 );

const [ cliente, ...valores] = alunoA;
console.log (valores);

const maior = Math.max(valores);
console.log (maior);

const soma = (...numeros) => numeros.reduce ( (arr,num ) => arr + num);
console.log (soma ( 100, 55, 30, 40, 50, -230));














