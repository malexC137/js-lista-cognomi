var surnamesList = ["Rossi", "Bianchi", "Verdi", "Neri", "Gialli"];
var userSurname = prompt("Insesrisci il tuo cognome");
surnamesList.push(userSurname);
surnamesList.sort();
var indexUser = surnamesList.indexOf(userSurname) + 1;
var numberedSurnamesList = [];

for (var i = 0; i < surnamesList.length; i++) {
    numberedSurnamesList += (i + 1) + " : " + surnamesList.sort()[i] + "\n";
}

console.log(numberedSurnamesList);
console.log("Il cognome inserito '" + userSurname + "' si trova alla " + indexUser + "a posizione")






