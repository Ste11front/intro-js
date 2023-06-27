// console.log("varie");

// // SCOPE--------------------------------------------------------------------------------

// //scope globale è dichiarato fuori da qualsiasi graffa.

// let pippo = 10; // sscope globale

// if (pippo < 20) {
//   pippo = pippo + 3;
//   let pluto = 4;
// }
// //pluto = pluto + 1;
// // console.log(pippo);
// console.log(pluto);


// // scoppe innestati

// function evenarray(max) {
//     const temparray = []
//     for (let i = 0; i <= max; i++) {
//         if (condition) {
    
//    }
      
//     }

// }
//FUNZIONE PARAMATRI ARGS-------------------------------------------------------

//function mean() {
//     console.log(arguments);
//     const mean = (v1 + v2 + v3) / 3;
//     return mean;
// }
// console.log(mean(3,4,5));

// let sum = 0

// for (let i = 0; i < arguments.length; i++) {
//     const value = arguments[i];
//     sum = sum + value;
// }
// const mean = sum/arguments.length;
// return mean;
// }
// console.log(mean(3,4,5));

// function sumAll(...args) {
//     let sum = 0
//     for (let i = 0; i < args.length; i++) {
//         const value = args[i];
//         sum = sum + value;
//     }
//     return sum;
// }
// console.log(sumAll(3,4,5));

// function pippo(v1, v2,...args) 

//REDUCE------------------------------------------------------------------------

// function sumAll(arrayToSum) {
//     let accumulator = 0;
//     for (let i = 0; i < arrayToSum.length; i++) {
//         const current = arrayToSum[i];
//         accumulator = accumulator + current;
//     }
//     return accumulator;
// }
// console.log(sumAll([2,3,4,5]));

// function miltiplayArray(arrayTomoltiplay) {
//     let accumulator = 1;
//     for (let i = 0; i < arrayTomoltiplay.length; i++) {
//         const current = arrayTomoltiplay[i];
//         accumulator = accumulator * current;
//     }
//     return accumulator;
// }
// console.log(miltiplayArray([2,3,4,5]));

// function join(arrauToJoin) {
//   let accumulator = "";
//   for (let i = 0; i < arrauToJoin.length; i++) {
//     const current = arrauToJoin[i];
//     accumulator += current;
//   }
//   return accumulator;
// }
// console.log("join", join(["qui", "quo", "qua"]));

// function sumEvenAndOdd(arrayToReduce) {
//     let accumulator = {sumOfEven: 0, sumOfOdd: 0};
//     for (let i = 0; i < arrayToReduce.length; i++) {
//       const current = arrayToReduce[i];
//       accumulator += current;
//     }
//     return accumulator;
//   }
//   console.log("join", join(["qui", "quo", "qua"]));

  // RICORSIONE-----------------------------------------------------------------------------------

  // FATTORIALE(!)

  // 5! = 5 * 4 * 3 * 2 * 1 = 120!

  // DEFINIZIONE
  // 1) 1! = 1;
  // 2) n! = n * (n - 1)!

  // 5! = 5 * 4!

//   function factoriale(n) {
//     if (n === 1) {
//         //1)
//         return 1;
//     } else {
//         //2)
//         return n * factoriale(n - 1);
//     }
//   }
//   console.log(factoriale(5));

// function min(v1, v2) {
//     let minimum;
//     if (v1 < v2) {
//         minimum = v1;
//     } else {
//         minimum = v2;
//     }
//     return minimum;
// }
// console.log(min(3, 8));

// function min2(...args) {
//     let accumulator = -Infinity;
//     for (let i = 0; i < args.length; i++) {
//         const current = args[i];
//         if (i === 0) {
//             accumulator = current;
//         } else (accumulator > current){
//             accumulator = current;
//         }
//     }
//     return accumulator;
// }
// console.log(min2());

//1) isEven(0) => true
//2) isEven(1) => false
//3) isEven(n) => isEven(n-2)

// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1) {
//       return false;  
//     } else { 
//     return isEven(n-2);
//     }
// }
// console.log(isEven(3));
// console.log(isEven(6));