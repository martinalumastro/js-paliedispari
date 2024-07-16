console.log('pari e dispari')

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


let parole = ['pari','dispari']
console.log(parole)
let pariDispari = prompt('Scivi pari o dispari (usa lettere minuscole)')
console.log(pariDispari)

if (pariDispari !== parole[0] || pariDispari !== parole[1]) {
    console.log('Mi dispiace, la parola inserita non è valida')
    pariDispari = prompt('Scivi pari o dispari (usa lettere minuscole)')
}

//let pariDispari = prompt('Scegli tra pari e dispari')
let numUtente = parseInt(prompt('Scegli un nuero da 1 a 5'))


function randomNumeri() {
    //numero casuale generato dal pc, intervallo tra 1 e 5
    return Math.floor(Math.random() * 5 + 1)
}

let pcNumber = randomNumeri()

console.log(pcNumber)

let somma = pcNumber + numUtente
console.log(somma)

if (somma === 0 && pariDispari === 'pari') {
    console.log('Ha vinto l\'utente')
} else if (somma === 0 && pariDispari === 'dispari') {
    console.log('Ha vinto il computer')
} else if (somma !== 0 && pariDispari === 'dispari') {
    console.log('Ha vinto l\'utente')
} else {
    console.log('Ha vinto il computer')
}
// // somma pari o dispari
// if(somma % 2 === 0) {
//     console.log('La somma è pari')
// } else {
//     console.log('La somma è dispari')
// }
