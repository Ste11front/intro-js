//HIGHER ORDER FUNCTIONS------------------------------
//MAP

// function addOneToArray(arrayOfNumbers) {
//     let tempArray = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = arrayOfNumbers[i];
//         const newElement = element + 1;
//         tempArray.push(newElement);
//     }
//     return tempArray;
// }
// console.log(addOneToArray([3, 7, 0]));

// function map(array, transFunc) {
//     let tempArray = []
//     for (let i = 0; i < arrayOfNumbers.length; i++) {
//         const element = array[i];
//         const newElement = transFunc(element);
//         tempArray.push(newElement);
//     }
//     return tempArray;
// }

// function addOne(element) {
//    const newElement = element +1;
//    return newElement 
// }
// console.log(map([7,10, 34])), addOne;

// const tempArray = [12, 34, 5, 0, -23];

// function multiply2(element) {
//     const newElement = element * 2;
//     return newElement;
// }    

// console.log(testArray.map(element) => element * 2);

// const testArray2 = ['Ciao', 'qwqwew', 'wqewd'];
// console.log(testArray2.map((element)));

// function xIndex(element, i, originArray) {
//     const newElement = element * i;
//     return newElement;
// }
// console.log(testArray2.map(xIndex)); 

// function removeNegative(array) {
//     let tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }
// console.log(removeNegative([0, 3, 5, -2]));

// function removeNegative(array) {
//     let tempArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element >= 0) {
//             tempArray.push(element);
//         }
//     }
//     return tempArray;
// }
// console.log(removeNegative([0, 3, 5, -2]));

// const testArray = [3, 5, 4, -2]

// function isEven(element) {
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(testArray.filter(isEven));

// function sumAll(array) {
//     let accumulator = o;
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         accumulator += current;
//     }
//     return accumulator;
// }
// console.log(sumAll[23, 4, 4, 6, 3]);

// function reduce(array, reduceFunc, startingValue) {
//     let accumulator = startingValue;
//     for (let i = 0; i < array.length; i++) {
//         const current = array[i];
//         accumulator = reduceFunc(accumulator, current);
//     }
//     return accumulator;
// }
// console.log();

// function sum(accumulator, current) {
//     const newAccumulator = accumulator + current;
//     return newAccumulator;
// }
// console.log(reduce([23, 4, 4, 6, 3], sum, 0));

// const testArray = [4, 3, 2, 1];
// function multiply(acc, curr) {
//     const newAcc = acc * curr;
//     return newAcc;
// }
// console.log(testArray.reduce(multiply, 1));
// console.log(testArray.reduce((acc, curr) => acc * curr, 1));

// function sumOnAddIndex(acc, curr, index, originArray) {
//     if (index % 2 !=== 0) {
//         const newAcc = acc + curr;
//         return newAcc
//     } else {
//         return acc;
//     }
// }
// console.log(testArray.reduce(sumOnlyOddIndex, 0));

// function sumAll(array) {
//   let accumulator = array[0];
//   for (let i = 1; i < array.length; i++) {
//     const current = array[i];
//     accumulator += current;
//   }
//   return accumulator;
// }
// console.log(sumAll([2, 3, 4]));


// FUNZIONI CHE RESTITUISCONO FUNZIONI

// function multiply2(number) {
//     const result = number * 2;
//     return result;
// }
// function multiply4(number) {
//     const result = number * 4;
//     return result;
// }
// console.log(multiply2(3));
// console.log(multiply4(3));

// function prefix(prefixStr) {
//     return (str) => prefixStr + '' + str;
// }
// const itaPrefix = prefix('+39');
// console.log(itaPrefix('333666333666'));




// ESERCIZI-------------------------------------------------

const numbersArray = [23, 45, 12, -8, -6, 23, 45, 1, 45, 34, 2];
const stringsArray = ['23', 'PIPPO', 'pluto', 'la CASA blu', 'Osvaldo', '', 'porchetta'];

// 1) mapping function che prende in input un array di numeri
//    e restituisce un array con tutti i numeri diminuiti di uno


function minusOne(element) {
    const newElement = element - 1;
    return newElement;
}

console.log(numbersArray.map(minusOne));

console.log(numbersArray.map(element => element - 1));

// 2) mapping function che prende in input un array di numeri
// e restituisce un array con i il valore assoluto dei numeri

function absValue(element) {
    const newElement = Math.abs(element);
    return newElement;
}

console.log(numbersArray.map(absValue));

console.log(numbersArray.map(element => Math.abs(element)));


// console.log(absoluteAll(numbersArray));

// 3) mapping function che prende in input un array di numeri
//    e restituisce un array di strighe con scritto 'PARI' se il numero
//    corrispondente è pari o 'DISPARI' se il numero corrispondente è dispari

// function arrayToEvenOrOddStrings(arrayOfNumbers){

//     const tempArray = [];

//     for (let i = 0; i < arrayOfNumbers.length; i++) {

//         const element = arrayOfNumbers[i];
        
//         //inserire il codice quì
//         let newElement;
         if (element % 2 === 0) {
             newElement = 'PARI'
        } else {
             newElement = 'DISPARI'
         }

//         tempArray.push(newElement);
        
//     }

//     return tempArray;

// }

// console.log(arrayToEvenOrOddStrings(numbersArray));


function evenOrOdd(element) {
    const newElement = element;
    return newElement;
}

console.log(numbersArray.map(absValue));

console.log(numbersArray.map(element => Math.abs(element)));


// 4) mapping function che prende in input un array di stringhe
//    e le restituisce tutte minuscole

function toLowerCaseAll(element) {
        const newElement = element.toLowerCase();
        return newElement;
    }    
    console.log(stringsArray.map(toLowerCaseAll));
    
    console.log(stringsArray.map(element => element.toLowerCase()));

// 5) mapping function che prende in input un array di strighe
//    e restituisce un array di numeri con le lunghezze delle stringhe

function fromStringArrayToLenghtArray(arrayOfStrings){

    const tempArray = [];

    for (let i = 0; i < arrayOfStrings.length; i++) {

        const element = arrayOfStrings[i];
        
        //inserire il codice quì
        let newElement;
        if (element === undefined) {
            newElement = -1;
            console.log('ALLARME!!')
        } else {
            newElement = element.length;
        }
        
        tempArray.push(newElement);
    }

    return tempArray;

}

console.log(fromStringArrayToLenghtArray(stringsArray));

// 7) filter function che prende in input un array di stringhe
//    e restituisce solo quelle più lunghe di tre caratteri

function removeShorterThan3Chars(string) {
    if (string.length > 3) {
        return true
    } else {
        return false
    }
}
console.log(stringsArray.filter(removeShorterThan3Chars));

console.log(stringsArray.filter(string => string.length > 3));

// 8) filter function che prende in input un array di strighe
//    e restituisce solo quelle che contengono la lettera 'p'

function removePEnemies(string){
if (string.toLowerCase().includes('p')) {
    return true
    } else {
        return false
    }
}
console.log(stringsArray.filter(removePEnemies));

// 9) filter function che prende in input un array di numeri
//    e restituisce i positivi divisibili per 3

function keepPositiveAndDivisibleBy3(element){
    if (element % 3 === 0) {
        return true
        } else {
            return false
        }
    }
    console.log(numbersArray.filter(keepPositiveAndDivisibleBy3));
    