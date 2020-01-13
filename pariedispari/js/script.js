var segno;
var numUtente;
do {
  segno = prompt("pari o dispari?");
} while (segno != "pari" && segno != "dispari");

do {
  numUtente = parseInt(prompt("inserisci un numero tra 1 e 5"));
} while (numUtente < 1 || numUtente > 5);


document.getElementById('esito').innerHTML = giocoPariDispari(segno,numUtente);

function giocoPariDispari(pariOdispari,num) {
  var random = Math.floor(Math.random() * 5 + 1);
  console.log(random);
  var somma = random + num;
  var esito = "hai perso!"
  if (somma % 2 == 0 && pariOdispari == "pari") {
    esito = "hai vinto!"
  } else if (somma % 2 == 1 && pariOdispari == "dispari") {
    esito = "hai vinto!"
  }
  return esito;
}
