/**
 * PALINDROMO
*/

// catturo il bottone in una variabile
const btn = document.querySelector("#app button");
// catturo l'input in una variabile
const inputEl = document.getElementById("data");

btn.addEventListener("click", function () {
    // catturo il dato dell'user in una variabile
    let userWord = inputEl.value;
    //creo un ciclo per reversare la parola dell'user
    let reversed = "";
    for (let i = userWord.length - 1; i >= 0; i--) {
       reversed += userWord[i]
    }
    // creo la condizione per verificare se la parola è palindroma
    let msg;  
    if (userWord === reversed) {
    msg = "La tua parola è Palindroma!"
    } else {
    msg = "La tua parola non è Palindroma!"
    }
    // stampo i risultati 
    const alertEl = document.querySelector(".alert");
    alertEl.classList.remove("d-none")
    alertEl.innerHTML = 
    `
    ${userWord}
    ${reversed}
    ${msg}
    `  
})
