"use strict";

import {validate, emailValidate} from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');
const $campos = document.querySelectorAll('.form > input');
const $tr = document.querySelectorAll('tr');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibirModal');
const fecharModal =  () => document.querySelector('.conteiner-modal').classList.remove('exibirModal')
const salvarAluno = () =>{
fecharModal();
}

validate (document.getElementById('form'));
// emailValidate(document.getElementById('email'));

const dataLoad = (data) =>{
    const $registros = document.getElementById('registros');

    data.forEach(element => {
        
        const $tr = document.createElement('tr');
        $tr.innerHTML = `
            <td>${element.codigo}</td>
            <td>${element.aluno}</td>
            <td>${element.email}</td>
            <td>${element.celular}</td>
            <td>${element.cidade}</td>
            <td>${element.acoes}</td>
        `;
    });

$registros.appendChild($tr);

}

const alunos = [
{
    'codigo':'1',
    'aluno':'Everson',
    'email':'tutinha296@gmail.com',
    'celular':'(11)9684-45789',
    'cidade':'Sâo paulo',
    'acoes':''
},
{
    'codigo':'2',
    'aluno':'fonso',
    'email':'fonso296@gmail.com',
    'celular':'(11)9684-45789',
    'cidade':'Sâo paulo',
    'acoes':''
}
]

dataLoad( alunos );

$novo.addEventListener('click',exibirModal);
$fechar.addEventListener('click', fecharModal);
$salvar.addEventListener('click', salvarAluno);

