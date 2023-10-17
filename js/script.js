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
    // creo un array dove inserire le singole lettere della parola
    const userArray = []
    // creo un ciclo for dedicato a dividere la parola in singole lettere e pusharle nell'array
    for (let i = 0; i < userWord.length; i++) {
        const letter = userWord[i];
        userArray.push(letter)
    }
    //creo la condizione per verificare se la parola è palindroma
    let msg;
    if (userArray === userArray.reverse()) {
        msg = "La tua parola è polindroma!"
    } else {
        msg ="La tua parola non è Polindroma!"
    }
    console.log(userArray.reverse());
})
