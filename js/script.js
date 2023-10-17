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
            resultPrint(msg)
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

/**
 * PARI O DISPARI
*/

EvenOddGame()

function EvenOddGame() {
    const btn = document.querySelector("#app2 button");
    btn.addEventListener("click", evenOddVerify)
    
    function evenOddVerify () {
         //dichiaro le variabili che mi servono nelle funzioni
    const inputEl2 = document.getElementById("data2")
    const inputEl3 = document.getElementById("data3");
    const finalPrint = document.querySelector(".alert2");
    let userChoiseNN = inputEl2.value;
    let userChoise = userChoiseNN.toLowerCase()
    let userValue = parseInt(inputEl3.value);
    let pcValue = getRndInteger(1, 5);
    let somma = userValue + pcValue;
    let result;
    let msg;

    if (((userChoise !== "pari") && (userChoise !== "dispari")) || (userValue > 5)) {
        finalPrint.innerHTML =
            `
        Inserisci valori corretti!
        `
        finalPrint.classList.remove("d-none")
    } else {
        myIsEven(somma);

        myResult(userChoise, result)

        printWinner(userChoise, userValue, pcValue, somma, msg)
    }

    function myIsEven(num) {
        result = (somma % 2 === 0) ? "even" : "odd"
    }
    function myResult(choise, resulting) {
        if ((userChoise === "pari" && result === "even") || (userChoise === "dispari" && result === "odd")) {
            msg = "hai vinto!!"
        } else {
            msg = "hai perso!!"
        }
    }
    function printWinner(choise, value1, value2, sum, message) {
        finalPrint.innerHTML =
            `
        La tua scelta: ${userChoise} <br>
        Il tuo numero: ${userValue} <br>
        Il mio numero: ${pcValue} <br>
        Somma dei numeri: ${somma} <br>
        Vincitore: ${msg}
        `
        finalPrint.classList.remove("d-none")
    }
    }

}




