//let nome = "ana"; // imutavel, não podera mudar 
//const nome2 = "fernando"; // imutavel, não podera mudar 

//  if(true){
//     const nome = "fernando";
// }
// const nome = "gabriel";

// n1 = 3, n2 = 5;

// resultado = n1 +n2

// console.log(resultado);
// alert (nome); 

// ============ Function ============

// function msg() {
//     if(true){
//         var nome = "fernando";
//     }
// }

// alert(msg);

// ============ Tipos de variaveis ============

// const nome = "fernando";
// const idade = 12;
// const teste = true;
// const produto= {produto: "mouse", quantidade:"45"};

// const somar = () => 3 + 3;

// console.log( typeof (nome) );
// console.log( typeof (idade) );
// console.log( typeof (teste) );
// console.log( typeof (produto) );
// console.log( typeof (somar) );

// const cidade = "São Paulo";
// const estado = 'SP';
// const pais = `BR`;

// // const pais = `BR ${variavel}`; só pode ser usada na templat strinks

// console.log("minha cidade é: " + cidade + " meu estado é: " + estado + " meu pais é: " +pais);

// let nota1 = 0;
// let nota2 = 0;

// console.log(nota1++); // ele adiciona/incrementa depois de usar, ou seja no caso nota1 será = 0; depois será 1;
// console.log(++nota2); // ele adiciona/incrementa antes de usar, ou seja no caso nota2 será = 1; depois será 2;

// const $nome = document.getElementById('nome').value;


// const $exibir = document.getElementById('exibir');
// const $calcular = document.getElementById('calcular');
// const $container = document.querySelector('.container');
// const $ocultar = document.

// const calcularMedia = (n1,n2) => (parseInt(n1) + parseInt(n2)) /2;
// const verificarSituacao = (media) => media >= 5 ? "Aprovado" : "Reprovado" ;


// // console.log($nome);

// const exibirMedia = () => {
//     const $nome = document.getElementById('nome');
//     const nota1 = document.getElementById('nota1').value;
//     const nota2 = document.getElementById('nota2').value;
//     const $media = document.getElementById('media');
//     const $situacao = document.getElementById('situacao');
    

//     const media= calcularMedia( nota1, nota2);
//     $situacao.value = verificarSituacao(media);
    
//     if(media >= 5){
//         $situacao.value = "aprovado";
//         // $situacao.classList.remove('reprovado');
//         // $situacao.classList.add('aprovado');
//          $situacao.style.color = 'green'; //posso fazer um "style" assim e tbm de outra maneira;
//     }else{
//         $situacao.value = "reprovado";
//         // $situacao.classList.remove('aprovado');
//         // $situacao.classList.add('reprovado');
//         $situacao.style.color = 'red'; //posso fazer um "style" assim e tbm de outra maneira;
//     }

//     // meu jeito, funciona !!

//     // if($nota1 > 10 || $nota1 < 0 ){
//     //     media.value = "erro, nota invalida";
//     // }

//     // if($nota2 > 10 || $nota2 < 0 ){
//     //     media.value = "erro, nota invalida";
//     // }
    
//     // if(media > 10 || media < 0){
//     //         $conceito.value = "erro, notas invalidas";
//     //     }else{
//     // }if(media == 0 || media < 3){
//     //     $conceito.value = "E"
//     // }else {
//     //     if(media == 3 || media < 5){
//     //         $conceito.value = "D"
//     //     }else{
//     //         if(media == 5 || media < 8){
//     //             $conceito.value = "C"
//     //         }else{
//     //             if(media == 8 || media < 10){
//     //                 $conceito.value = "B"
//     //             }else{
//     //                 if(media == 10){
//     //                     $conceito.value = "A"
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }

    

//     // console.log($nome.value);

//     $media.value = media;
// }

//     const calcularConceito = () =>{
//     const media = document.getElementById ('media').value;
//     const $conceito = document.getElementById('conceito');
    
//     if(media == 0 || media < 3){
//             $conceito.value = "E";
//          }else {
//             if(media == 3 || media < 5){
//                  $conceito.value = "D";
//              }else{
//                  if(media == 5 || media < 8){
//                      $conceito.value = "C";
//                  }else{
//                      if(media == 8 || media < 10){
//                          $conceito.value = "B";
//                      }else{
//                          if(media == 10){
//                              $conceito.value = "A";
//                          }
//                      }
//                  }
//              }
//          }
    
// }

// function exibirResultados(){
//     exibirMedia();
//     calcularConceito();
// }


// // const exibirResultados = () =>{
// //     exibirMedia();
// //     calcularConceito();
// // }

// // const calcular2 = function () { // segunda maneira  de encurtar a função
// //     calcularConceito();
// //     calcularMedia;
// // }

// // const calcular3 = () => { // iremos usar esta maneira de criar uma função
// //     calcularMedia();
// //     calcularConceito();
// // }

// // function soma (a, b) {
// //     return a + b;
// // }

// //const soma2 = (a, b) => a + b;// uma das aneiras de encurtar a função. 

// //const soma2 = a => a + b; // funciona quando so tem um argumento, ele não precisa de parenteses.

// const exibirCalculadora = (el) => el.style.color = 'red';



// $calcular.addEventListener('click', exibirResultados);
// $exibir.addEventListener('click',() => exibirCalculadora ($conteiner));


const $calcular = document.getElementById('calcular');
const $exibir = document.getElementById('exibir');
const $ocultar = document.getElementById('ocultar');
const $conteiner = document.querySelector ('.conteiner');

const calcularMedia = ( n1, n2 ) => ( parseInt( +n1 ) + parseInt( +n2 ) ) / 2;
 
const verificarSituacao = ( media ) => media >= 5 ? "Aprovado" : "Reprovado";

const exibirMedia = () => {
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const $media = document.getElementById('media');
    const $situacao = document.getElementById('situacao');

    const media = calcularMedia ( nota1, nota2 ) ;

    $situacao.value = verificarSituacao ( media );

    $media.value = media;

}

const defineConceito =  () => {
    const media = document.getElementById ('media').value
    const $conceito = document.getElementById ('conceito');

    if ( media < 3 ) {
        $conceito.value = "E";
    }else if ( media < 5 ) {
        $conceito.value = "D";
    }else if ( media < 8 ) {
        $conceito.value = "C";
    }else if ( media < 10 ) {
        $conceito.value = "B";
    }else {
        $conceito.value = "A";
    }
}

const exibirResultados = () => {
    exibirMedia();
    defineConceito();
}

const exibir = ( el ) =>   el.classList.add ( 'exibir' );
const ocultar = ( el ) =>   el.classList.remove ( 'exibir' );


$calcular.addEventListener('click', exibirResultados);
$exibir.addEventListener('click',( ) => exibir ( $conteiner ));
$ocultar.addEventListener('click',( ) => ocultar ( $conteiner ));










































































