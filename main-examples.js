/// scrivere una funzione che dato un array di numeri, li elevi al quadrato e rimuova i negativi

// const testArray = [2, -12, 0, 27, 4, -3, 12, 1, -1];

// function squareAllandRemoveNegative(arr) {
//   const onlyPositiveArray = arr.filter((el) => el >= 0);
//   const mappedArray = onlyPositiveArray.map((el) => el ** 2);
//   return mappedArray;
// }
// console.log(squareAllandRemoveNegative(testArray));

// function squareAllandRemoveNegative2(arr) {
//   return arr.filter((el) => el >= 0).map((el) => el ** 2);
// }

// function squareAllandRemoveNegative3(arr) {
//   const accumulator = [];
//   for (const number of arr) {
//     if (number >= 0) {
//       const newNumber = number ** 2;
//       accumulator.push(newNumber);
//     }
//   }
//   return accumulator;
// }
// console.log(squareAllandRemoveNegative3(testArray));


// scrivi una funzione che dato un array di numeri sommi tutti quelli divisibili per 3

// function sommadivisibilix3(arr) {
//     const divisibilix3 = arr.filter(el => el % 3 === 0);
//     const sum = divisibilix3.reduce((acc, curr) => acc + curr, 0)
//     return sum
// }
// console.log(sommadivisibilix3(testArray));


// function squareAllandRemoveNegative3(arr) {
//   return arr.reduce((acc, curr) => {
//     if (curr % 3 === 0) {
//       acc = acc + curr;
//     }
//     return acc;
//   });
// }
// console.log(squareAllandRemoveNegative3(testArray));

// data una stringa di elementi separati da virgole:
// converti gli elementi in numeri
// togli gli elementi che non sono numeri
// somma i numeri tra loro

// const testString = '2000,10,pippo,345,-234,ciambella,2,,'

// // function covertToNumbersAndSumAll(str) {
// //     const stringArray = str.split(',');
// //     const numbersArray = stringArray.map(el => parseFloat(el));
// //     const onlyNumbersArray = numbersArray.filter(el => !isNaN(el));
// //     const sum = onlyNumbersArray.reduce((acc, curr) => acc + curr);
// //     return sum;
// // }
// // console.log(covertToNumbersAndSumAll(testString));

// function covertToNumbersAndSumAll2(str) {
//     return str.split(',').reduce((acc, curr) =>{
//         if (!isNaN(number)) {
//             acc = acc + number;
//         }
//         return acc;
//     },0)
// }
// console.log(covertToNumbersAndSumAll2(testString));


// Con tutti e 4 i procedimenti

//1) Dato un array di stringhe,
// elimina tutte quelle che non contengono la lettera p
// e ritorna la somma delle lunghezza delle rimanenti

const test1 = ['pippo', 'pluto', 'qui', 'quo', 'qua', 'paperone'];

function onlyContainsPSum(arr) {
    const onlyContainsP = arr.filter(el => el.toLowerCase().includes('p'));
    const stringsLengthArray = onlyContainsP.map(el => el.length);
    const stringsLengthArraySum = stringsLengthArray.reduce((acc, curr) => acc + curr, 0);
    return stringsLengthArraySum;
} 
console.log(onlyContainsPSum(test1));
// v1

function onlyContainsPSum(arr) {
    const newArray = arr.filter(el => el.toLowerCase().includes('p')).map(el => el.length).reduce((acc, curr) => acc + curr, 0);
    return newArray;
} 
console.log(onlyContainsPSum(test1));
//v2

function onlyContainsPSum(arr) {
    return newArray = arr.filter(el => el.toLowerCase().includes('p')).map(el => el.length).reduce((acc, curr) => acc + curr, 0);
} 
console.log(onlyContainsPSum(test1));
//v3

function onlyContainsPSum(arr) {
    const acc = 0;
    for (const element of arr) {
        if (element.toLowerCase().includes('p')) {
            const sum = element.length.reduce((acc, curr) => acc + curr, 0);
        }
    }
}
//v4

//2) Dato un array di numeri, moltiplicali per il loro indice
// rimuovi quelli maggiori di 1000
// e restituiscili in formato stringa, separati da ;

const test2 = [100, 10, 24, -20, 300, 6, 100, 300];

//3) Data una stringa, elimina tutte le parole più corte di 4 caratteri
// e restituiscile in un array odininate per lunghezza dalla più lunga

const test3 = 'ho fatto il bucato ieri sera ma si è colorato tutto di violetto';