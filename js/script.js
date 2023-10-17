/**
 * PALINDROMO
*/

(function palindromaGame() {

    const btn = document.querySelector("#app button");
    btn.addEventListener("click", verification)
    function verification() {
        // prendo i valori che mi serviranno in tutte le funzioni
        const inputEl = document.getElementById("data");
        let userWord = inputEl.value;
        let reversed = "";
        let msg;

        if (userWord !== "") {
            //prendo la parola e la riverto tramite funzione, ritornerà la parola reversata
            takeAndRevert(userWord, reversed);

            // creo la condizione per verificare se la parola è palindroma
            message(userWord, reversed)

            // stampo i risultati 
            resultPrint(userWord, reversed, msg)
        } else {
            msg = "Inserisci una parola corretta!!"
            resultPrint (msg)
        }

        //FUNCTIONS
        function takeAndRevert(word1, word2) {
            for (let i = userWord.length - 1; i >= 0; i--) {
                reversed += userWord[i]
            }
        }
        function message(mess1, mess2) {
            if (userWord === reversed) {
                msg = "La tua parola è Palindroma!"
            } else {
                msg = "La tua parola non è Palindroma!"
            }
        }
        function resultPrint(word1, word2, message) {
            const alertEl = document.querySelector(".alert");
            alertEl.classList.remove("d-none")
            alertEl.innerHTML =
                `
        ${userWord}
        ${reversed}
        ${msg}
        `
        }
    }
})()
