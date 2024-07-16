console.log('palindroma')

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// let userParola = prompt('Inserisci una parola')
// let userParolaNeutra = userParola.toLowerCase()

// function palindroma(parola) {
//     let parolaLength = parola.length
//     let result

//     for(let i = 0; i < Math.floor(parolaLength /2); i++) {
//         if (parola[i] !== parola[(parolaLength - 1) - i]) {
//             return false
//         }
//         return true
//     }
// }

// let verificaPalindroma = palindroma(userParolaNeutra)

// if(verificaPalindroma) {
//     console.log('La parola "' + userParola + '" è palindroma')
// } else {
//     console.log('La parola "' + userParola + '" non è palindroma')
// }

//SECONDA PROVA DELL'ESERCIZIO
let parola = prompt('Inserisci una parola');

//singoli caratteri parola
let caratteri = parola.split('');

//parola invertita
let inverso = caratteri.reverse().join('');

//verifica
if(parola === inverso) {
    console.log(parola + ' è una parola palindroma')
} else {
    console.log(parola + ' non è una parola palindroma')
}