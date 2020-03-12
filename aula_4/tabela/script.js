"use strict";

// const card = () => {
//     return ` 
//     <div class="container">
//         <div class="card">
//             <div class="card-title">Frutas</div>
//             <div class="card-body">
//                 <ul>
//                     <li>uva</li>
//                     <li>morango</li>
//                     <li>banana</li>
//                     <li>limão</li>
//                 </ul>
//             </div>
//         </div>
//     </div>`
// }

// const $container = document.querySelector('.container');
// $container.InnerHTML = card();

// mostra as divs sem estar la no html
//  const $div = document.createElement('div');
//  $div.innerHTML = card();
//  $container.appendChild($div);

//  const $div2 = document.createElement('div');
//  $div2.innerHTML = card();
//  $container.appendChild($div2);

const frutas = ['melão', 'morango', 'pera', 'pitanguinha'];
const clientes = ['afonso', 'ryan', 'erick', 'helder'];


const card = ( arr, titulo="lista" ) => {
    const $card = document.createElement('div');
    $card.classList.add ('card');

    const elementos = arr.join("</li><li>");

    $card.innerHTML=` 
    
            <div class="card-title">${titulo}</div>
            <div class="card-body">
                <ul>
                    <li> ${elementos}</li>
                </ul>
            </div>`;

    return $card;
}

const $container = document.querySelector('.container');
$container.appendChild(card( frutas, "frutas"));
$container.appendChild(card( clientes, ));





























