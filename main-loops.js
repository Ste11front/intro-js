console.log("loooooops")
// CICLO WHILE-------------------------


// let indice = 0;

// while (indice < 100) {
//     console.log('sono un\'istruzione che deve essere ripetuta)

//    // indice = indice + 1;

//    // indice += 1;

//     indice++;
// }


// let indice =0;

// while (indice < 100) {
//  if (indice % 2 === 0) {
//      console.log(indice);
//  }
//     indice++;
// }

// while (true) {
//     const input = prompt('scrivi una frase o scrivi FINE per terminare')

//     if (input === 'FINE') {
//         break;
//     } else {
//         alert('la lunghezza della frase inserita è ' + input.length + 'caratteri');
//         alert('la lunghezza della frase inserita è ${input.lenght} caratteri')
//     }
// }

// CICLO DO WHILE

// let indice = 0

// do {
//     console.log('sono un\'istruzione che deve essere ripetuta');
//     indice++;

// } while (indice < 10);

// for (let index = 0; index < 100; index += 2) {
//     console.log('sono un numero pari e sono : ' + index)
// }

// for (let index = 0; index <100; index++) {
//     if (index < 50) {
//         console.log(index * 2);
//     } else {
//         console.log(index / 2);
//     }
// }

// for (let index = 100; index >= 0; index --){
//     console.log(index);
// }

// for (let i = 100; i >= 0; i--) {
    
//     if (i % 2 === 0) {
//         console.log('pari')
    
//     } else {
//         console.log('dispari')
//     }

// } 

// const paperone = 'stringa di prova';

// for (let i = 0; i < paperone.length; i++) {

//     const char = paperone[i];
//     console.log(char);

// }

// CAPITOLO 2 ES 1--------------

// let startingString = '#'
// for (let i = 0; i < 7; i++) {
//     console.log(startingString);
//     startingString = startingString + '#'
// }

// // CAPITOLO 2 ES 2 ------------------------

// for (let i = 1; i <100; i++) {
  
//     if (i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
// } else if (i % 3 === 0){
//     console.log('Fizz');
// } else if (i & 5 === 0){
//     console.log('Buzz');
// } else {
//     console.log(i);
// }
// } 

// CAPITOLO 2 ES 3 -----------------------

// let chessboard = ''

// for (let i = 0; i < 8; i++) {

//     if (i % 2 === 0) {
//         chessboard = chessboard + ' # # # #\n'
//     } else {
//         chessboard = chessboard + '# # # #\n'
//     }

// }

// console.log(chessboard);

// Altra Soluzione 

const size = 4;

let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        // se i è pari {
            //se j è pari {
                //aggiungo a chessboard uno spazio
            }
        }

    }
}

for (let i= 0; i < )