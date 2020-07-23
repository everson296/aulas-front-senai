"use strict";
const $card = document.getElementById('conteudo');
const $adicionar = document.getElementById('adicionar');
const $editar = document.getElementById('editar');
const $excluir = document.getElementById('excluir');
const $limpar = document.getElementById('limparTudo');

const atualizarLista = () => {
    var nome = localStorage.getItem( 'nome' );
    $card.innerHTML = ``;
    if( verificarNomes() ){
        var json = arrayNomes( 'nomes' );
        json.forEach( key => {
            $card.innerHTML += `<div id="itensConteudo">${ key.nome }</div>`;
        });
    }
}

const adicionar = () => {
    let nomes = new Array();
    var nome = prompt( "Insira o nome que será adicionado:" );
    if( verificarNomes() ){
        nomes = arrayNomes( 'nomes' );
    }
    nomes.push( { 'nome' : nome } );
    localStorage.setItem( 'nomes', transformaEmString( nomes ) );
    atualizarLista();
}

const remover = () => {
    if( !verificarNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será removido:" );
        var nomes = arrayNomes( 'nomes' );
        var nomesAtualizados = nomes.filter( n => n.nome != nome );
        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );
    }
    atualizarLista();
}

const atualizar = () => {
    if( !verificarNomes() ){
        alert('Não há nenhum nome na lista');
    }
    else{
        var nome = prompt( "Insira o nome que será alterado:" );
        var novoNome = prompt( "Insira o novo nome:" );
        var nomes = arrayNomes( 'nomes' );
        var nomesAtualizados = nomes.map( n => { if( n.nome == nome ){
                    return n = {'nome' : novoNome };
                }
                else{
                    return n
                }
            }
        );
        localStorage.setItem( 'nomes', transformaEmString( nomesAtualizados ) );
    }
    atualizarLista();
}

const limpar = () => {
    localStorage.clear();
    atualizarLista();
}

const verificarNomes = () => {
    return localStorage.hasOwnProperty( 'nomes' );
}

const arrayNomes = ( key ) => {
    return JSON.parse( localStorage.getItem( key ) );
}

const transformaEmString = ( json ) => {
    return JSON.stringify( json );
}

const inicializaPagina = () => {
    if( verificarNomes() ){
        atualizarLista();
    }
}

inicializaPagina();

$adicionar.addEventListener('click', ()=>{ adicionar() })
$excluir.addEventListener('click', ()=>{ remover() })
$editar.addEventListener('click', ()=>{ atualizar() })
$limpar.addEventListener('click', ()=>{ limpar() })