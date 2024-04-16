const numero="#24";

const msg="la tua password è: ";

let nome= prompt("inserisci il tuo nome");

let cognome=prompt("inserisci il cognome");

let colore=prompt("inserisci il colore preferito");

document.getElementById("bucata").innerHTML= nome+cognome+colore+numero;

let secret=nome+cognome+colore+numero;

document.getElementById("secret-psw").innerHTML= msg+secret;

alert(secret);

