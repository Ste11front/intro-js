console.log('array');
// ARRAY-------------------------------------------------

// const batman = ['pane', 'pasta', 'latte', 'caffè'];

// console.log(batman);

// console.log(batman.length);

// AGGIUNGERE e TOGLIERE ELEMENTI------------------------

// batman.push('acqua');  // Aggiungere in coda

// batman.unshift('biscotti'); // Aggiungere in testa

// const elementoCoda = batman.pop()  // Togliere in coda

// console.log(elementoCoda);

// const elementoTesta = batman.shift()  // Togliere in Testa

// console.log(elementoTesta);

// console.log(batman);

// CICLI ed ARRAY-----------------------------------------

// const batman = [1, 2, 23, -4, 345, 0];

// console.log(batman)[0];  // Mi da il numero 1

// console.log(batman)[2];  // Da il numnero  23

// console.log(batman)[batman.length - 1];  // Da l'ultimo numero

// for (let i = 0; i < batman.length; i++) {
//     const element = batman[i];
//     console.log(element);
    
// }

// for (const element of batman) {
//     console.log(element);
    
// }

// let i = 0;
// while (i < batman.length) {
//     const element = batman[i];
//     console.log(element);
//     i++
// }

// for (let i = batman.length - 1; i >= 0; i--) {
//     const element = batman[i];

//     console.log(element); 
// }

// TRASFORMAZIONI DI ARRAY---------------------------------------
//MAPPING

const joker = [2, 5, -4, 2000, 7, 34];               

// function multiplyArrayby2(selectedArray) {          // Esempio 1

//     const newArray = [];

//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
//         const newElement = element * 2;
//         newArray.push(newElement);
//     }
    
//     return newArray;
// }

// console.log(multiplyArrayby2(joker));

// function devidedBy2ifeven(selectedArray) {            // Esempio 2
 // const newArray = [];
// for (let i = 0; i < selectedArray.length; i++) {
//     const element = selectedArray[i];

//     let newElement;
//     if (element % 2 === 0) {
//         newElement = element / 2;
//         } else {
//             newElement = element;
//         }

//         newArray.push(newElement);
//     }
//     return newArray;
// }
// console.log(devidedBy2ifeven(joker));  
    
// --------------------------------------

// const goku = ['super', 'saiyan', '4'];

// function upperCaseAll(selectedArray) {
        
//     const newArray = []
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];
            
//         const newElement = element.toUppercase();
//         newArray.push(newElement);
//     }
//     return newArray;
// }
// console.log(upperCaseAll(goku));

// FILTERING------------------------------------------------------

// const paperoga = [3, 5, 6, 9, 11, -3, 8]
// const newArray = [];

// function removeEven(selectedArray) {
//     for (let i = 0; i < selectedArray.length; i++) {
//         const element = selectedArray[i];

//         if (Element ) {
            
//         }
//     }
// }

// FUNCTION COMPOSITION------------------------------------------------

const qui = [3, 5, 6, 9, 8, 111, -3, -8, 20, -1000];

function removeNegativeAndMultiplyby2(selectedArray) {

 return multiplyArrayby2(removeNegative(selectedArray));
}

console.log(removeNegativeAndMultiplyby2(qui));