console.log('palindroma')

// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

let userParola = prompt('Inserisci una parola')
let userParolaNeutra = userParola.toLowerCase()

function palindroma(parola) {
    let parolaLength = parola.length
    let result

    for(let i = 0; i < parolaLength; i++) {
        if (parola[i] === parola[(parolaLength - 1) - i]) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

let verificaPalindroma = palindroma(userParolaNeutra)

if(verificaPalindroma) {
    console.log('La parola "' + userParola + '" è palindroma')
} else {
    console.log('La parola "' + userParola + '" non è palindroma')
}