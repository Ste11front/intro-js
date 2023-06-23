//1) Definire una funzione 'pow' che non faccia uso dell' operatore '**' ne della libreria Math

//2) Definire una funzione 'correctCase' che prenda in input una stringa e 
// la restituisca trasformando la prima lettera in maiuscolo
// 'la casa blu' => 'La casa blu'

function correctCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const stringa = "la casa blu";
const stringaCorretta = correctCase(stringa);

console.log(stringaCorretta);

// Spiegazione
// Il codice definisce una funzione chiamata “correctCase” che prende una stringa come argomento e restituisce la 
// stessa stringa con la prima lettera maiuscola.     
// La funzione fa questo prendendo la prima lettera della stringa con il metodo “charAt(0)” e trasformandola 
// in maiuscolo con il metodo “toUpperCase()”. 
// Poi prende il resto della stringa (dalla seconda lettera in poi) con il metodo “slice(1)” e lo concatena 
// alla lettera maiuscola.
// Quindi, se la stringa passata alla funzione è “la casa blu”, la funzione restituirà “La casa blu”.

  //3) Defininire una funzione 'min' che dati due numeri restituisca il minore

// function min(number1, number2) {
//      if (number1 > number2) {
//          console.log(number2);
//      } else { 
//          console.log(number1);
//      } 
// }
// const pikachu = min (30,20);

// oppure

// function min(number1, number2) {
//     if (number1 < number2) {
//         return number1;
//     } else {
//         return number2;
//     }
// }
// const pikachu = min (30,20);
// console.log(pikachu);

//4) Definire una funzione 'clamp' che prenda come parametri tre numeri: valore, massimo e minimo.
//   se valore è minore di minimo, restituisce minimo
//   se valore è maggiore di massimo, restituisce massimo
//   altrimenti restituisce valore

//   v=12, min=20, max=100 => 20
//   v=5, min=0, max=3 => 3
//   v=10, min=1, max=100 => 10 

//5) definire una funzione chessboard che prende come parametro 'size' e stampa la scacchiera 

//6) Definire una funzione 'ellipse' che prende come parametro una stringa
//   se la stringa è minore di 20 caratteri la ritorna non modificata
//   altrimenti la taglia a 20 caratteri e aggiunge 3 puntini

//   'ciao mamma!' => 'ciao mamma!'
//   'nel mezzo del cammin di nostra vita' = 'nel mezzo del cammin...'


//7) definire una funzione reverseString che data una stringa la restituisca al contrario

//   'casa rosa' => 'asor asac'