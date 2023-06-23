//1) Definire una funzione 'pow' che non faccia uso dell' operatore '**' ne della libreria Math

// function pow(base, exponent) {
//   let result = 1;
//   for (let i = 0; i < exponent; i++) {
//     result = result * base;
    
//   }
//   return base;
// }
// console.log(pow(5, 4));

//2) Definire una funzione 'correctCase' che prenda in input una stringa e 
// la restituisca trasformando la prima lettera in maiuscolo
// 'la casa blu' => 'La casa blu'

// function correctCase(selectedString){
// if (selectedString === undefined) {
// return '';
// }
//    const firstChar = selectedString[0]
//    const firstCharUpper = firstChar.toUpperCase();
//    const restOfTheString = selectedString.slice(1);  
//    const newString = firstCharUpper + restOfTheString;
//    return newString;
//  }
//  console.log(correctCase('la casa blu'));

//3) Defininire una funzione 'min' che dati due numeri restituisca il minore

// function min(number1, number2) {
//      if (number1 < number2) {
//          return number1;
//      } else {
//          return number2;
//      }
//  }
//  console.log(min(30,20));

//4) Definire una funzione 'clamp' che prenda come parametri tre numeri: valore, massimo e minimo.
//   se valore è minore di minimo, restituisce minimo
//   se valore è maggiore di massimo, restituisce massimo
//   altrimenti restituisce valore

//   v=12, min=20, max=100 => 20
//   v=5, min=0, max=3 => 3
//   v=10, min=1, max=100 => 10 

// function clamp(value, min, max) {        // Nota:in una funzione quando si utilizza return, else diventa superfluo
//   if (value < min) {
//     return min;
//   } else if (value > max){
//     return max;
//   } else {
//     return value;
//   }
// }
// console.log(clamp(12, 5, 10));

//5) definire una funzione chessboard che prenda come parametro 'size' e stampi la scacchiera 

//  function chessboard(size) {
//    let chessboardString = '';
//    for (let i = 0; i < size; i++) {
//      if ((i - j) % 2 === 0) {
//        chessboardString = chessboardString + '#';    //?Attenzione:codice errato
//      }
//      if ((i - j) % 2 !== 0) {
//        chessboardString = chessboardString  + '';
//      }
//      chessboardString = chessboardString + '\n';
//    } return chessboardString;
//   }
//  console.log(chessboard(19));  

//6) Definire una funzione 'ellipse' che prende come parametro una stringa
//   se la stringa è minore di 20 caratteri la ritorna non modificata
//   altrimenti la taglia a 20 caratteri e aggiunge 3 puntini
//   'ciao mamma!' => 'ciao mamma!'
//   'nel mezzo del cammin di nostra vita' = 'nel mezzo del cammin...'

// function ellipse(str) {
//   if (str.lenght < 20) {
//     return str;
//   } else {
//     const shortString = str.slice(0, 20);
//     ellipsedString = shortString + '...'
//     return ellipsedString;
//   }
// }
// console.log(ellipse('cammin di nostra vita'));


//7) definire una funzione reverseString che data una stringa la restituisca al contrario
//   'casa rosa' => 'asor asac'

//  function reverseString(str){
//    let newString = '';
//    for (let i = (str.lenght - 1); i >= 0 ; i++) {     //?Attenzione: codice errato
//      const char = str[i];
//      newString = newString + char;
//    }
//    return newString;
//  }
//  console.log(reverseString('la casa rosa'));