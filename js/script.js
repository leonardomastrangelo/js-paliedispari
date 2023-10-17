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
    let reversed = "";
    for (let i = userWord.length; i >= 0; i--) {
       reversed += userWord[i]
       console.log(reversed);
    }
    
    
})
