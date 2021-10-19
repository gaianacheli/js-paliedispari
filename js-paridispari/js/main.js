//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const pRisultato = document.querySelector('.risultato')
let tot = 0

const pariDispari = prompt ('Pari o Dispari ')
const numberUser = parseInt(prompt ('Inserisci un numero da 1 a 5'))

let numberComputer = computer(5)
console.log(numberUser)
console.log(numberComputer)

tot=numberUser+numberComputer
console.log(tot)
console.log(pariDispari)
console.log(pariODispari(tot))

if (pariDispari.toLowerCase() != pariODispari(tot) ){
    pRisultato.append('Hai perso')
}else {
    console.log("hai vinto")
    pRisultato.append('Hai vinto')
}

function computer(number) {
    return Math.floor(Math.random() * number)+1;
}

function pariODispari(number) {
     if (number % 2 == 0) {
         return "pari"
     }else {
         return "dispari"
     }
}

   