// ES Andrea 3) Definire una funzione 'min' che, dati due numeri, restituisca il minore

// function min(number1, number2) {
//     if (number1 > number2) {
//         console.log(number2);
//     } else { 
//         console.log(number1);
//     } 
// }
// const pikachu = min (30,20);

// oppure

function min(number1, number2) {
    if (number1 < number2) {
        return number1;
    } else {
        return number2;
    }
}
const pikachu = min (30,20);
console.log(pikachu);