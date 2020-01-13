var parola = prompt("inserisci una parola per scoprire se è un palindromo");
document.getElementById('messaggio').innerHTML = isPalindrome(parola);


function isPalindrome(string) {
  var i = 0;
  var messaggio = "è un palindromo";
  do {
    if (string[i] != string[string.length - i - 1]) {
      messaggio = "non è un palidromo"
    }
    i++;
  } while (i < Math.floor(string.length/2) && messaggio == "è un palindromo");
return messaggio;
}
