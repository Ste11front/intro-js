// const studente = {nome: 'Damiano,', anno: 1993, sposato: false};

// console.log(studente);

// console.log(studente.nome);

// console.log(studente['anno']);

// studente.indirizzo = 'taggia';

// console.log(studente);

// console.log(studente.conto);

// console.log(Object.keys(studente)); // tutte le etichette
// console.log(Object.values(studente)); // tutti i valori

// for (const key in studente) {
//     const value = studente [key] 
//     console.log(key, value);
// }

const studente2 = {
    name: 'Manuela',
    yob: '1988',
    isMarried: false,
    marks: [8, 9, 6, 8, 7],
    dog:{
        name: 'Nala',
        breed: 'lupo cecoslovacco',
        yob: 2017
    }
}

console.log(studente2);

function calcateAge(student) {
    
    const actualYear = new Date().getFullYear();
    
    const age = actualYear - student.yob;

    return age;

}

console.log(calcateAge(studente2));

const studente3 = {
    name: 'Cesare',
    yob: '2003',
    isMarried: false,
    marks: [9, 9, 8, 6, 7],
    dog:{
        name: 'Luna',
        breed: 'dobberman',
        yob: 2016
    }
}

console.log(studente3);

function calcateAge(student) {
    
    const actualYear = new Date().getFullYear();
    
    const age = actualYear - student.yob;

    return age;

}

console.log(calcateAge(studente3));

const studente4 = {
    name: 'Stefano',
    yob: '1998',
    isMarried: false,
    marks: [8, 5, 6, 10, 7],
    dog: null
}

console.log(studente4);

function calcateAge(student) {
    
    const actualYear = new Date().getFullYear();
    
    const age = actualYear - student.yob;

    return age;

}

console.log(calcateAge(studente4));

function caculateMean(student) {
    let  sum = 0;
    for (const mark of student.marks) {
        sum += marks;
}
const mean = sum/student.mark.lenght;
return mean;
}

console.log(caculateMean(studente3));