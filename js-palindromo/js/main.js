//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma



let risposta = document.querySelector('.risposta')
let parola = prompt ('Inserisci una parola')
let palindroma = isPalindroma(parola)

if (palindroma) {
    risposta.innerHTML = 'La parola è palindroma'
}else {
    risposta.innerHTML = 'La parola non è palindroma'

}

function isPalindroma (parola) {

    let parolaInversa = parola.split('').reverse().join('');  

    if(parola.toLowerCase() == parolaInversa.toLowerCase()){
        return true
    } else {
       return false
    }
}