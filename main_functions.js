

// function square( specialNumber ){
//     const result = specialNumber * specialNumber;
//     return result;
// }

// function logUppercase (stringToLog){
//     const result = specialNumber * specialNumber;
//     console.log(uppercaseString);
// }

// function gentleAllert(){
//     alert('caro amico, studia');
// }

// function logMultipleTimes(stringToLog, times){
//     for (let i = 0; i < times; i++) {
//         console.log(stringToLog);
//     }
// }

// function isEven(number){
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function pow(base, exponent){
//     const result = base ** exponent;
//     return result;
// }

// function lastCharUppercase(selectedString){
//     const char = selectedString[selectedString.lenght - 1];
//     const CharUppercase = char.toUpperCase();
//     return CharUppercase;
// }


// const pippo = square(16);

// console.log(pippo);

// logUppercase('viva le funzioni!')

// gentleAllert();

// logMultipleTimes('pizza', 100)

// const pluto = isEven(27);

// console.log(pluto);

// const paperino = pow(2, 10);

// console.log(paperino);

// const gastone = lastCharUppercase('genova');

// console.log(gastone)



// SINTASSI ALTERNATIVE

// function square(number) {
//     const result = number * number;
//     return result;
// }

// console.log(square(3));



// const square2 = function(number){
//     const result = number * number;
//     return result;
// } // anonymus function

// console.log(square2(10));

// const square3 = (number) => {
//     const result = number * number;
//     return result;
// } // lamba function (arrow function);

// console.log(square3(4));


// PARAMETRI--------------------------------------

// function logParameters(parameter1, parameter2){
//     console.log('parametro 1', parameter1);
//     console.log('parametro 2, parameter2');
// }

// logParameters('pippo, 5');

// logParameters(27);

// logParameters();

// function pow(base, exponent){
//     if (exponent !== undefined) {
//         const result = base **exponent;
//         return result;
//     } else {
//         const result = base ** exponent;
//         return result;
//     } else {
//         const result2 = base ** 2;
//         return result2;
//     }
// }

// const pippo = pow(4, 4);
// console.log(pippo);

// const pluto = pow(4);
// console.log(pluto);

// VALORI DI DEFAULT-------------------------

// function pow(base, exponent = 2) {
//     const result = base ** exponent;
//     return result;
// }

// console.log(pow(5, 3));

// console.log(pow(5));

//----------------------------------------------------------------------

// const startingString = '25';

// const startingNumber = parseInt(startingString);

// cnsole.log(startingString, typeof startingString);

// console.log(startingString, typeof startingNumber);


//--------------------------------------------------------

// ES Andrea 1) Definire una funzione 'pow' che non faccia uso dell'operatore '**' ne della libreria Math

// ES Andrea 2) Definire una funzione 'correctCase' che prende in input una stringa e la restituisce trasformando la prima lettera in maiuscolo 'la casa blu' => 'La casa blu'

// ES Andrea 3) Definire una funzione 'min' che, dati due numeri, restituisca il minore



// Es Andrea 4) Definire una funzione 'clamp' che prende come parametri tre numeri: valore, massimo e minimo.
// se valore è minore di minimo, restituisce minimo.
// se valore è maggiore di massimo, restituisce masssimo
// altrimenti restituisce valore

// v=12, min=20, max=100 => 20
// v=5, min=o, max=
// v=10, min=1, max

// ES Andrea