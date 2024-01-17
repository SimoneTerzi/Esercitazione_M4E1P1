/* ESERCIZIO 1 
Crea una funzione che controlli due numeri interi. ritorna "true" se uno dei due è 50 o se la somma dei due è 50.
*/

function controllaNumeri(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else {
    return false;
  }
}

let numero1 = 20;
let numero2 = 40;

console.log(controllaNumeri(numero1, numero2));

/* ESERCIZIO 2
Crea una funzione che rimuova il carattere da una stringa. passa la stringa e la posizione come parametro e ritorna la stringa modificata.
*/

function rimuoviCarattere(stringa, posizione) {
  if (posizione >= 0 && posizione < stringa.length) {
    var arrayCaratteri = stringa.split("");
    arrayCaratteri.splice(posizione, 1);
    return arrayCaratteri.join("");
  } else {
    console.log("Posizione non valida.");
    return stringa;
  }
}

let stringaOriginale = "ciao";
let posizioneDaRimuovere = 1;

let stringaModificata = rimuoviCarattere(
  stringaOriginale,
  posizioneDaRimuovere
);
console.log(stringaModificata);

/* ESERCIZIO 3 
Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100, ritorna 'true' se rispechcchiano queste condizioni, altrimenti ritorna 'false'.
*/

function controllaNumeri(numero1, numero2) {
  if (
    (numero1 >= 40 && numero1 <= 60 && numero2 >= 40 && numero2 <= 60) ||
    (numero1 >= 70 && numero1 <= 100 && numero2 >= 70 && numero2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

let numeroA = 45;
let numeroB = 80;
let numeroC = 30;

console.log(controllaNumeri(numeroA, numeroB));
console.log(controllaNumeri(numeroA, numeroC));

/* ESERCIZIO 4 
Crea una funzione che accetti un nome di città come parametro e ritorni il nome tesso se inizia con 'los' o 'new', altrimenti ritorna 'false'.
*/

function estendiNomeCitta(nomeCitta) {
  let nomeCittaMinuscolo = nomeCitta.toLowerCase();
  if (
    nomeCittaMinuscolo.startsWith("los") ||
    nomeCittaMinuscolo.startsWith("new")
  ) {
    return nomeCitta;
  } else {
    return false;
  }
}

let citta1 = "Los Angeles";
let citta2 = "New York";
let citta3 = " Orleans";

console.log(estendiNomeCitta(citta1));
console.log(estendiNomeCitta(citta2));
console.log(estendiNomeCitta(citta3));

/* ESERCIZIO 5 
Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. 
L'array eve essere passato come parametro.
*/

function sommaArray(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += array[i];
  }

  return somma;
}

let arrayNumeri = [1, 2, 3, 4, 5];

console.log(sommaArray(arrayNumeri));

/* ESERCIZIO 6
Crea una funzione che controlli che un array  contenga i numeri 1 o 3. se non li contiene ritorna "True", altrimenti ritorna "False".
*/

function arraySenzaUnoTre(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 || arr[i] === 3) {
      return false;
    }
  }
  return true;
}

let array1 = [2, 4, 6, 8, 1, 5, 9];

console.log(arraySenzaUnoTre(array1));

/* ESERCIZIO 7 
Crea una funzione per trovare il tipo di un angolo di cui i gradi sono passati come parametro
Angolo acuto:meno di 90°,  ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° gradi, ritorna "ottuso"
Angolo Retto: 90° ritorna "retto"
Angolo piatto: 180° ritorna "piatto".
*/

function tipoAngolo(gradi) {
  if (gradi < 90) {
    return "acuto";
  } else if (gradi === 90) {
    return "retto";
  } else if (gradi > 90 && gradi < 180) {
    return "ottuso";
  } else if (gradi === 180) {
    return "piatto";
  } else {
    return "angolo non valido";
  }
}

let angolo = 123;

console.log(tipoAngolo(angolo));

/* ESERCIZIO 8 
Crea una funzione in js che crei un acronimo a partire da una frase. es. "fabbrica italiana automobili torino" deve ritornare "FIAT".
*/

function creaAcronimo(frase) {
  let parole = frase.split(" ");
  let acronimo = "";
  for (let i = 0; i < parole.length; i++) {
    acronimo += parole[i].charAt(0).toUpperCase();
  }
  return acronimo;
}

let frase = "fabbrica italiana automobili torino";
let risultato = creaAcronimo(frase);
console.log(risultato);
