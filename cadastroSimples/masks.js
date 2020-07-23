"use strick";

const masks = {
    text : value => value.replace(/[^a-z A-Z À-ÿ]/,''),
    callphone : value => value.replace(/[^0-9]/g, '')
    .replace(/(.{2})(.{5})(.{4})/, '($1) $2 - $3'),

    // celular (value){
    //     return value
    //         .replace(/\D/g, '')
    //         .replace(/(\d{2})(\d)/, '($1)$2')
    //         .replace(/(\d{5})(\d)/, '$1-$2')
    //         .replace(/(-\d{4})\d+?$/, '$1')
    //     },

    number : value => value.replace(/[^0-9]/, ''),
    email : value => value.replace(/[.*@.+\..+]/,''),
    cep : value => value.replace(/[^a-z A-Z À-ÿ]/,'')
};
export const validate = elemento => {
    elemento.addEventListener('input', (event) => {
        const $input = event.target;
        const typeMask = $input.dataset.type;
        if( masks.hasOwnProperty(typeMask) ){
            $input.value = masks[typeMask]($input.value);
        }
    });
};

export const emailValidate = () => {
    elemento.addEventListener('blur', () => {
       if(!elemento.value.match (/.*@.+\..+/)){
            alert('erro');
       };
    });
}

