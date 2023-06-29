// let batman = 2 / 2, joker = 1 * 1;  // % modulo (resto)
// console.log((batman + joker) * 2);

// console.log('bollito \'\\loco\' \n caldisssimo')   //  \n => a capo   \\ => \      \' => '

// console.log(typeof'bollito \'\\loco\' \n caldisssimo');

// console.log(1 == 2);     // == => = (2 = '2')  === => = (2 = 2)  != => diverso !== => diverso preciso

// console.log(true && false);  // && => vero se entrambe condizioni vere    || => almeno una vera   ! => non è

// let x = 10;
// let y = (x > 5) ? 'maggiore di 5' : 'minore o uguale a 5';     // ? : => ? (se è vera) : (se è falsa)
// console.log(y);

// let debiti = 126;
// debiti = debiti - 26;
// console.log(debiti);

// let x = 8
// console.log('il valore di x è', x );

// console.log(Math.max(9, 7) + 1);    // Math.min   => considera valore max/min

// let pizzaNumber = Number(prompt('Ma ciao, inserisci un numero!'));  // Number => rappresenta un numero
// if (!Number.isNaN(pizzaNumber)) {    // !Number.isNaN => Number è diverso(!) da Nan
//     console.log(pizzaNumber * pizzaNumber + ' è il quadrato del tuo numero!');  // prompt() =>  finestra di
//                                                               // dialogo che consente di inserire un valore
//    } else {
//     console.log('Non fare l\'idiota!');
// }

// let num = Number(prompt('Inserisci un numero al posto di x che renda vero 12<x<23'));
// if (num > 12 && num < 23) {
//     console.log('Ben fatto!');
// } else if (num <= 12) {
//     console.log('Mi sa che è troppo piccolo');
// } else if (num >= 23) {
//     console.log('Un pò troppo grosso direi...');
// } else {
//     console.log('Non è nemmeno un numero!');
// }

let num = 0;
while (num <= 12) {
  num = num + 2;
  console.log(num);
}