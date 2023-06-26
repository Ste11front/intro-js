console.log('array');
// ARRAY---------------------------------------

// const pippo = ['pane', 'pasta', 'latte', 'caffè'];

//console.log(pippo);

//console.log(pippo.length);

// AGGIUNGERE E TOGLIERE ELEMENTI--------

// pippo.push('acqua'); // aggiungere in coda

// pippo.unshift('biscotti'); // aggiungere in testa


// const elementoCoda = pippo.pop() // togliere in coda;

// console.log(elementoCoda);

// const elementoTesta = pippo.shift() // togliere in testa;

// console.log(elementoTesta);

// console.log(pippo);


//CICLI ED ARRAY-------------------------

// const pluto = [1, 2, 23, -4, 345, 0];

// console.log(pluto[0]);

// console.log(pluto[2]);

// console.log(pluto[pluto.length - 1]);

// for (let i = 0; i < pluto.length; i++) {
//     const element = pluto[i];
//     console.log(element);
// }

// for (const element of pluto) {
//     console.log(element);
// }

// let i = 0;
// while (i < pluto.length) {
//     const element = pluto[i];
//     console.log(element);
//     i++;
// }

// for (let i = pluto.length - 1; i >= 0; i--) {
//     const element = pluto[i];
//     console.log(element);
// }

// TRASFORMAZIONI DI ARRAY-------------------
// MAPPING

// const paperino = [2, 5, -4, 2000, 7, 34];

// function multiplyArrayBy2(selectedArray){

//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];

//         const newElement = element * 2;

//         newArray.push(newElement);
//     }

//     return newArray;
// }

// console.log('multiply by 2', multiplyArrayBy2(paperino));

// function divideBy2ifEven(selectedArray){
//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
        
//         let newElement;
//         if (element % 2 === 0) {
//             newElement = element / 2;
//         } else {
//             newElement = element;
//         }

//         newArray.push(newElement);
//     }
//     return newArray;
// }

// console.log('divide by 2 if even', divideBy2ifEven(paperino));


// const paperone = ['qui', 'quo', 'qua'];

// function upperCaseAll(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         const newElement = element.toUpperCase();

//         newArray.push(newElement);
//     }
//     return newArray;
// }

// console.log('UpperCaseAll', upperCaseAll(paperone));


//FILTERING

// const paperoga = [3, 5, 6, 9, 8 , 111, -3, -8, 0];

// function removeEven(selectedArray){

//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         if(element % 2 !== 0){
//             newArray.push(element);
//         }

//     }
//     return newArray;
// }

// console.log('remove even', removeEven(paperoga));

// function removeNegative(selectedArray){
//     const newArray = [];
//     for (let i = 0; i < selectedArray.length; i++) {
        
//         const element = selectedArray[i];
        
//         if(element >= 0){
//             newArray.push(element);
//         }

//     }
//     return newArray;
// }

// // console.log('remove negative', removeNegative(paperoga));

// // FUNCTION COMPOSITION

// const qui = [3, 5, 6, 9, 8 , 111, -3, -8, 0, 20, -10000];

// function removeNegativeAndMultiplyBy2(selectedArray){

//     // const arrayWithoutNegative = removeNegative(selectedArray);
//     // const arrayMultiplied = multiplyArrayBy2(arrayWithoutNegative);

//     // return arrayMultiplied;

//     return multiplyArrayBy2(removeNegative(selectedArray));
// }

// console.log(removeNegativeAndMultiplyBy2(qui));



// ESERCIZI-------------------------------------------------

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const decreasedNumbersArray = [];

// for (let i = 0; i < numbersArray.length; i++) {
//      const element = numberArray [i] - 1;
//      decreasedNumbersArray.push(Element);
// }
// return decreasedNumbersArray;

//  console.log(decreasedNumbersArray);

// 2) mapping function che prende in input un array di numeri
//    e restituisce un array con i il valore assoluto dei numeri

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const absoluteNumbersArray = [];

// for (let i = 0; i < numbersArray.length; i++) {
//     const element = numbersArray

// console.log(absoluteNumbersArray);

// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di stringhe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// const evenOrOdd = [];

// for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0) {
//         evenOrOdd.push('PARI');
//     } else {
//         evenOrOdd.push('DISPARI');
//     }
// }

// console.log(evenOrOdd);

// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// function convertiInMinuscolo(stringsArray) {
//     let risultato = [];
//     for (let i = 0; i < stringsArray.length; i++) {
//       risultato[i] = stringsArray[i].toLowerCase();
//     }
//     return risultato;
//   }
  
//   console.log(convertiInMinuscolo(stringsArray));

// 5) mapping function che prende in input un array di stringhe
//    e restituisce un array di numeri con le lunghezze delle stringhe

// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
// const lengthsArray = [];

// for (let i = 0; i < stringsArray.length; i++) {
//   lengthsArray.push(stringsArray[i].length);
// }

// console.log(lengthsArray); // [2, 5, 5, 11, 7, 0, 9]

// 6) mapping function che prende in input un array di stringhe
//    e restituisce le stringhe in formato camelCase

// // array di stringhe
// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// // array vuoto dove pushare le stringhe in formato camelCase
// const camelCaseArray = [];

// // ciclo for per iterare sull'array di stringhe
// for (let i = 0; i < stringsArray.length; i++) {
//   // trasformo la stringa in minuscolo e la divido in un array di parole
//   let string = stringsArray[i].toLowerCase().split(' ');
//   // ciclo for per iterare sull'array di parole
//   for (let j = 0; j < string.length; j++) {
//     // trasformo la prima lettera della parola in maiuscolo e concateno il resto della parola
//     string[j] = string[j].charAt(0).toUpperCase() + string[j].slice(1);
//   }
//   // pusho la parola in formato camelCase nell'array vuoto
//   camelCaseArray.push(string.join(''));
// }

// console.log(camelCaseArray); // ["23", "Pippo", "Pluto", "LaCasaBlu", "Osvaldo", "", "Porchetta"]

// 7) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri

// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
// const filteredArray = [];

// for (let i = 0; i < stringsArray.length; i++) {
//   if (stringsArray[i].length > 3) {
//     filteredArray.push(stringsArray[i]);
//   }
// }

// console.log(filteredArray); // ["PIPPO", "pluto", "la CASA blu", "Osvaldo", "porchetta"]

// 8) filter function che prende in input un array di stringhe
//    e restituisce solo quelle che contengono la lettera 'p'

// const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];
// const filteredArray = [];
// for (let i = 0; i < stringsArray.length; i++) {
//   if (stringsArray[i].indexOf('p') !== -1) {
//     filteredArray.push(stringsArray[i]);
//   }
// }
// console.log(filteredArray);

// 9) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3

// const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
// let result = [];

// for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] > 0 && numbersArray[i] % 3 === 0) {
//         result.push(numbersArray[i]);
//     }
// }

// console.log(result);

// 10) fare una copia della home del sito di AXIA FORMAZIONE